import React from 'react';
import InputBase from '@components/InputBase/InputBase';
import ISelectInput from '@components/SelectInput/SelectInput.types';

const SelectInput: React.FC<ISelectInput> = ({options, name, label, multiple = false}: ISelectInput) => {
    return (
        <>
            <InputBase label={label} name={name}>
                <select name={name} id={name} multiple={multiple}>
                    {options.map((e) => (
                        <option key={e.value} value={e.value}>
                            {e.text}
                        </option>
                    ))}
                </select>
            </InputBase>
        </>
    );
};
export default SelectInput;
