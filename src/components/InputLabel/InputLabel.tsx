import React, {useContext} from 'react';
import IInputLabel from './InputLabel.types';
import ThemeContext from '../Themes/ThemeContext';

const InputLabel: React.FC<IInputLabel> = ({label, name, children, palette}: IInputLabel) => {
    const theme = useContext(ThemeContext);
    const currentPalette = palette === 'primary' ? theme.palette.primary : theme.palette.secondary;
    return (
        <>
            <label style={{color: currentPalette.main}} htmlFor={name}>
                <span>{label} </span>
            </label>
            {children}
        </>
    );
};
export default InputLabel;
