import React, {useContext} from "react";
import {ThemeContext} from "../Themes/ThemeContext";

interface IButton {
    text: string,
    onClick: (e: any) => any
}

const Button = ({text, onClick}: IButton) => {
    const theme = useContext(ThemeContext);
    return <button onClick={onClick} style={{
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrast
    }}>{text}</button>;
};
export {Button}