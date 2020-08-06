import React from 'react';
import InputText from '@components/InputText/InputText';

import IInputNumber from '@components/InputNumber/InputNumber.types';

const InputNumber: React.FC<IInputNumber> = ({text, name, label}: IInputNumber) => {
    return <InputText text={text} label={label} name={name} type="number" />;
};
export default InputNumber;
