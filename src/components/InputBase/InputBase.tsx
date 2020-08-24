import React, {useContext} from 'react';
import IInputBase from './InputBase.types';
import InputLabel from '../InputLabel/InputLabel';
import ThemeContext from '../Themes/ThemeContext';

const InputBase: React.FC<IInputBase> = ({
    label,
    value,
    name,
    onKeyUp,
    onChange,
    disabled,
    onKeyDown,
    className,
    palette,
    placeholder,
}: IInputBase) => {
    const theme = useContext(ThemeContext);
    const currentPalette = palette === 'primary' ? theme.palette.primary : theme.palette.secondary;
    return (
        <InputLabel label={label} name={name} palette={palette}>
            <input
                placeholder={placeholder}
                style={{backgroundColor: disabled ? 'gray' : currentPalette.main, color: currentPalette.contrast}}
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
