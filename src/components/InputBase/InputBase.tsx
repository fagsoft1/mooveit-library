import React, {Fragment, useContext} from "react";
import {ThemeContext} from "../Themes/ThemeContext";

export interface IInputBase {
    label: string,
    name: string,
    children: React.ReactElement
}

const InputBase = ({label, name, children}: IInputBase) => {
    const theme = useContext(ThemeContext);
    return <Fragment>
        <label style={{color: theme.palette.primary.main}} htmlFor={name}><span>{label} </span></label>
        {children}
    </Fragment>
}
export {InputBase}