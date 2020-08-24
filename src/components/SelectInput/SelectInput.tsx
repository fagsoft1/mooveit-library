import React, {useContext, useEffect, useState} from 'react';
import InputLabel from '../InputLabel/InputLabel';
import ISelectInput from './SelectInput.types';
import ThemeContext from '../Themes/ThemeContext';

const SelectInput: React.FC<ISelectInput> = ({
    options,
    name,
    label,
    multiple = false,
    disabled = false,
    value = undefined,
    onChange,
    palette = 'primary',
}: ISelectInput) => {
    const [currentValue, setCurrentValue] = useState(value);
    useEffect(() => {
        setCurrentValue(value);
    }, [value]);
    const theme = useContext(ThemeContext);
    const currentPalette = palette === 'primary' ? theme.palette.primary : theme.palette.secondary;
    return (
        <InputLabel label={label} name={name} palette={palette}>
            <select
                style={{
                    background: currentPalette.main,
                    color: currentPalette.contrast,
                }}
                name={name}
                id={name}
                data-testid={name}
                multiple={multiple}
                disabled={disabled}
                value={currentValue}
                onChange={(e) => {
                    setCurrentValue(Array.from(e.target.selectedOptions, (item) => item.value));
                    if (onChange) {
                        onChange(e);
                    }
                }}
            >
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
