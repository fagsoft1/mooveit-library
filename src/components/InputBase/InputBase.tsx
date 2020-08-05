import React, {Fragment} from "react";

export interface IInputBase {
    label: string,
    name: string,
    children: React.ReactElement
}

const InputBase = ({label, name, children}: IInputBase) => {
    return <Fragment>
        <label htmlFor={name}><span>{label} </span></label>
        {children}
    </Fragment>
}
export {InputBase}