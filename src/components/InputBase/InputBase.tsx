import React, {useContext} from 'react';
import ThemeContext from '@components/Themes/ThemeContext';
import IInputBase from '@components/InputBase/InputBase.types';

const InputBase: React.FC<IInputBase> = ({label, name, children}: IInputBase) => {
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
export default InputBase;
