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
declare const ThemeContext: import("react").Context<ITheme>;
export default ThemeContext;
