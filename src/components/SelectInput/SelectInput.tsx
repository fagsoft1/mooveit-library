import React from 'react';
import InputLabel from '../InputLabel/InputLabel';
import ISelectInput from './SelectInput.types';

const SelectInput: React.FC<ISelectInput> = ({options, name, label, multiple = false}: ISelectInput) => {
    return (
        <InputLabel label={label} name={name}>
            <select name={name} id={name} multiple={multiple}>
                {options.map((e) => (
                    <option key={e.value} value={e.value}>
                        {e.text}
                    </option>
                ))}
            </select>
        </InputLabel>
    );
};
export default SelectInput;
