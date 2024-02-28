import { browser } from '$app/environment'

export default function useTheme() {
    let darkMode: boolean | undefined = $state()

    if (browser) {
        if (
            JSON.parse(localStorage.themeDarkMode) ||
            (localStorage.themeDarkMode == undefined && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            darkMode = true
        } else {
            darkMode = false
        }
    }

    return {
        get darkMode() { return darkMode },
        toggleDarkMode() {
            if (browser) {
                if (!darkMode) {
                    darkMode = true;
                    localStorage.themeDarkMode = JSON.stringify(darkMode);
                    document.documentElement.classList.add('dark');
                } else {
                    darkMode = false;
                    localStorage.themeDarkMode = JSON.stringify(darkMode);
                    document.documentElement.classList.remove('dark');
                }
            }
        }
    };
}


