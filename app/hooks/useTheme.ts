import {useEffect} from "react";
import {useConfigStore} from "@/app/store";
import {Theme} from "@/app/utils/typing";


const useTheme = () => {
    const config = useConfigStore();

    useEffect(() => {
        const mql = window.matchMedia('(prefers-color-scheme: dark)');

        const applyTheme = (theme: string) => {
            const body = document.body;
            if (theme === Theme.Dark) {
                body.setAttribute('theme-mode', Theme.Dark);
            } else {
                body.removeAttribute('theme-mode');
            }
        };

        const matchMode = (e: MediaQueryListEvent) => {
            if (config.theme === Theme.System) {
                applyTheme(e.matches ? Theme.Dark : Theme.Light);
            }
        };

        if (config.theme === Theme.System) {
            // Initially set theme based on system preference
            applyTheme(mql.matches ? Theme.Dark : Theme.Light);
            // Listen for changes in system theme
            mql.addEventListener('change', matchMode);
        } else {
            // Forcefully set theme based on user configuration
            applyTheme(config.theme);
        }

        return () => {
            // Clean up event listener
            mql.removeEventListener('change', matchMode);
        };
    }, [config.theme]);
};

export default useTheme;
