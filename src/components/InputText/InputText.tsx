import React from "react";

import {InputBase, IInputBase} from "../InputBase/InputBase";

export interface IInputText extends Omit<IInputBase, 'children'> {
    text: string,
    type: string
}

const InputText = ({text, type = 'text', name, label}: IInputText) => {
    return <InputBase name={name} label={label}>
        <input type={type}>{text}</input>
    </InputBase>;
};

export {InputText}
