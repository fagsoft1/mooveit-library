import React, {useContext} from 'react';
import IInputLabel from './InputLabel.types';
import ThemeContext from '../Themes/ThemeContext';

const InputLabel: React.FC<IInputLabel> = ({label, name, children}: IInputLabel) => {
    const theme = useContext(ThemeContext);
    return (
        <>
            <label style={{color: theme.palette.primary.main}} htmlFor={name}>
                <span>{label} </span>
            </label>
            {children}
        </>
    );
};
export default InputLabel;
