import React, {useState, useEffect} from 'react';
import InputBase from '../InputBase/InputBase';
import IInputText from './InputText.types';

const InputText: React.FC<IInputText> = (props: IInputText) => {
    const {value = '', disabled = false, name, label, className, onKeyDown, onChange, palette} = props;
    const [currentValue, setCurrentValue] = useState(value);
    useEffect(() => {
        setCurrentValue(value);
    }, [value]);
    return (
        <InputBase
            className={className}
            disabled={disabled}
            palette={palette}
            name={name}
            label={label}
            onKeyDown={onKeyDown}
            onChange={(e) => {
                setCurrentValue(e.target.value);
                if (onChange) {
                    onChange(e);
                }
            }}
            value={currentValue}
        />
    );
};

export default InputText;
