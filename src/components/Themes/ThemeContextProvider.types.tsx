import React from 'react';

export interface ITheme {
    palette: {
        primary: {
            main: string;
            contrast: string;
        };
        secondary: {
            main: string;
            contrast: string;
        };
    };
}

export default interface IThemeContextProvider {
    children: React.ReactElement;
    theme: ITheme;
}
