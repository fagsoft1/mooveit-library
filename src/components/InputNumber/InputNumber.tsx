import React, {useState} from 'react';
import InputBase from '../InputBase/InputBase';

import IInputNumber from './InputNumber.types';

const InputNumber: React.FC<IInputNumber> = ({name, label, decimalSeparator = '.'}: IInputNumber) => {
    const [currentValue, setCurrentValue] = useState('');
    const justNumbers = (text: string) => text.replace(/[^0-9]/g, '');
    const createMask = (text: string) => {
        return text.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, `$1${decimalSeparator}`);
    };
    const destroyMask = (text: string) => {
        return text.replace(/\D/g, '').substring(0, 40);
    };
    return (
        <InputBase
            onChange={(e) => {
                setCurrentValue(justNumbers(e.target.value));
            }}
            onKeyUp={(e) => {
                setCurrentValue(createMask(destroyMask(e.currentTarget.value)));
            }}
            value={currentValue}
            label={label}
            name={name}
        />
    );
};
export default InputNumber;
