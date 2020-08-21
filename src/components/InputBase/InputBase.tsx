import React from 'react';
import IInputBase from './InputBase.types';
import InputLabel from '../InputLabel/InputLabel';

const InputBase: React.FC<IInputBase> = ({label, value, name, onKeyUp, onChange}: IInputBase) => {
    return (
        <InputLabel label={label} name={name}>
            <input value={value} onChange={onChange} onKeyUp={onKeyUp} />
        </InputLabel>
    );
};
export default InputBase;
