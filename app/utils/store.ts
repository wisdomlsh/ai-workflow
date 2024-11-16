import { create } from "zustand";
import { combine } from "zustand/middleware";


 function deepClone<T>(obj: T) {
    return JSON.parse(JSON.stringify(obj));
}

export type Updater<T> = (updater: (value: T) => void) => void;


type MakeUpdater<T> = {
    lastUpdateTime: number;

    markUpdate: () => void;
    update: Updater<T>;
};

type SetStoreState<T> = (
    partial: T | Partial<T> | ((state: T) => T | Partial<T>),
    replace?: boolean | undefined ,
) => void;

export function createPersistStore<T extends object, M>(
    state: T,
    methods: (
        set: SetStoreState<T & MakeUpdater<T>> ,
        get: () => T & MakeUpdater<T>,
    ) => M,
) {
    return create(
        combine(
            {
                ...state,
                lastUpdateTime: 0,
            },
            (set, get) => {

                return {
                    ...methods(set, get as never),

                    markUpdate() {
                        set({ lastUpdateTime: Date.now() } as Partial<
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
                } as M & MakeUpdater<T>;
            },
        ),
    );
}
