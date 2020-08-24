import React from 'react';
import ThemeContext from './ThemeContext';
import IThemeContextProvider from './ThemeContextProvider.types';

const ThemeContextProvider = ({children, theme}: IThemeContextProvider) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
export default ThemeContextProvider;
