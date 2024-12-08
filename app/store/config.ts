import {createPersistStore} from "../utils/store";
import {Theme} from "@/app/utils/typing";


const DEFAULT_PLUGIN_STATE = {
    theme: Theme.System
};


export const useConfigStore = createPersistStore(
    DEFAULT_PLUGIN_STATE,

    (set, _get) => {
        function get() {
            return {
                ..._get(),
                ...methods,
            };
        }

        const methods = {

        };
        return methods;
    },
    {name: 'config',}
);
