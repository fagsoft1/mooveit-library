import React, {useContext} from 'react';
import ThemeContext from '../Themes/ThemeContext';

import IButton from './Button.types';

const Button: React.FC<IButton> = ({text, disabled = false, type = 'button', onClick, palette}: IButton) => {
    const theme = useContext(ThemeContext);
    const currentPalette = palette === 'primary' ? theme.palette.primary : theme.palette.secondary;
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            type={type} // eslint-disable-line react/button-has-type
            style={{
                background: currentPalette.main,
                color: currentPalette.contrast,
            }}
        >
            {text}
        </button>
    );
};
export default Button;
