import {Node} from "reactflow";

import { createPersistStore } from "../utils/store";


const DEFAULT_PLUGIN_STATE = {

};

export const useWorkflowStore = createPersistStore(
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
);
