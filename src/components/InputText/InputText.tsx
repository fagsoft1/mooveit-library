import React from 'react';
import InputBase from '@components/InputBase/InputBase';
import IInputText from '@components/InputText/InputText.types';

const InputText: React.FC<IInputText> = ({text, type = 'text', name, label}: IInputText) => {
    return (
        <InputBase name={name} label={label}>
            <input type={type} value={text} />
        </InputBase>
    );
};

export default InputText;
