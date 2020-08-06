import { createContext } from "react";

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

const themes: ITheme = {
  palette: {
    primary: {
      main: "green",
      contrast: "black",
    },
    secondary: {
      main: "red",
      contrast: "white",
    },
  },
};

const ThemeContext = createContext(themes);
export default ThemeContext;
