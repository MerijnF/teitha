import { browser } from '$app/environment'

export default function useTheme() {
    let theme: string | undefined = $state()

    if (browser) {
        if (localStorage.appTheme == undefined) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                theme = 'dark';
            } else {
                theme = 'light';
            }
        } else {
            theme = localStorage.appTheme;
        }

    }

    return {
        get theme() { return theme },
        toggleDarkMode() {
            if (browser) {

            }
        }
    };
}


