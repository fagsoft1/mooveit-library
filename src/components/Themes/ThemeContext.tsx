import {createContext} from 'react';

interface ITheme {
    palette: {
        primary: {
            main: string,
            contrast: string
        },
        secondary: {
            main: string,
            contrast: string
        }
    },
}

const themes: ITheme = {
    palette: {
        primary: {
            main: 'green',
            contrast: 'black'
        },
        secondary: {
            main: 'red',
            contrast: 'white'
        }
    },
};

const ThemeContext = createContext(themes);
export {ThemeContext, ITheme};