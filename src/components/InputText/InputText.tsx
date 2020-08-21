import React, {useState} from 'react';
import InputBase from '../InputBase/InputBase';
import IInputText from './InputText.types';

const InputText: React.FC<IInputText> = (props: IInputText) => {
    const {value = '', name, label} = props;
    const [currentValue, setCurrentValue] = useState(value);
    return (
        <InputBase
            name={name}
            label={label}
            onChange={(e) => {
                setCurrentValue(e.target.value);
            }}
            value={currentValue}
        />
    );
};

export default InputText;
