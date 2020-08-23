import React from 'react';
import IInputBase from './InputBase.types';
import InputLabel from '../InputLabel/InputLabel';

const InputBase: React.FC<IInputBase> = ({
    label,
    value,
    name,
    onKeyUp,
    onChange,
    disabled,
    onKeyDown,
    className,
}: IInputBase) => {
    return (
        <InputLabel label={label} name={name}>
            <input
                className={className}
                onKeyDown={onKeyDown}
                value={value}
                onChange={onChange}
                name={name}
                onKeyUp={onKeyUp}
                disabled={disabled}
                aria-label={label}
            />
        </InputLabel>
    );
};
export default InputBase;
