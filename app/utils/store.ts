import {create} from "zustand";
import {combine, persist, createJSONStorage} from "zustand/middleware";
import {deepClone} from "./common";

type SecondParam<T> = T extends (
        _f: infer _F,
        _s: infer S,
        ...args: infer _U
    ) => unknown
    ? S
    : never;
type Updater<T> = (updater: (value: T) => void) => void;
type MakeUpdater<T> = {
    lastUpdateTime: number;
    _hasHydrated: boolean;

    markUpdate: () => void;
    update: Updater<T>;
    setHasHydrated: (state: boolean) => void;
};

type SetStoreState<T> = (
    partial: T | Partial<T> | ((state: T) => T | Partial<T>),
    replace?: boolean | undefined,
) => void;

type GetStoreState<T> = () => T;

export function createPersistStore<T extends object, M>(
    state: T,
    methods: (
        set: SetStoreState<T & MakeUpdater<T>>,
        get: GetStoreState<T>,
    ) => M,
    persistOptions: SecondParam<typeof persist<T & M & MakeUpdater<T>>>,
) {
    persistOptions.storage = createJSONStorage(() => localStorage);
    const oldOonRehydrateStorage = persistOptions?.onRehydrateStorage;
    persistOptions.onRehydrateStorage = (state) => {
        oldOonRehydrateStorage?.(state);
        return () => state.setHasHydrated(true);
    };

    return create(
        persist(
            combine(
                {
                    ...state,
                    lastUpdateTime: 0,
                    _hasHydrated: false,
                },
                (set, get) => {
                    return {
                        ...methods(set, get),

                        markUpdate() {
                            set({lastUpdateTime: Date.now()} as Partial<
                                T & M & MakeUpdater<T>
                            >);
                        },
                        update(updater) {
                            const state = deepClone(get());
                            updater(state);
                            set({
                                ...state,
                                lastUpdateTime: Date.now(),
                            });
                        },
                        setHasHydrated: (state: boolean) => {
                            set({_hasHydrated: state} as Partial<T & M & MakeUpdater<T>>);
                        },
                    } as M & MakeUpdater<T>;
                },
            ),
            persistOptions as never,
        ),
    );
}
