import React from "react";
import {InputText, IInputText} from '../InputText/InputText'

interface IInputNumber extends Omit<IInputText, 'type'> {
}

const InputNumber = ({text, name, label}: IInputNumber) => {
    return <InputText text={text} label={label} name={name} type='number'/>;
};
export {InputNumber}
