import {createContext} from 'react';
import {ITheme} from './ThemeContextProvider.types';

const defaultTheme: ITheme = {
    palette: {
        primary: {main: 'black', contrast: 'white'},
        secondary: {main: 'red', contrast: 'white'},
    },
};
const ThemeContext = createContext(defaultTheme);
export default ThemeContext;
