import React, {useContext} from 'react';
import ThemeContext from '../Themes/ThemeContext';

import IButton from './Button.types';

const Button: React.FC<IButton> = ({text, disabled = false, type = 'button', onClick}: IButton) => {
    const theme = useContext(ThemeContext);
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            type={type} // eslint-disable-line react/button-has-type
            style={{
                background: theme.palette.primary.main,
                color: theme.palette.primary.contrast,
            }}
        >
            {text}
        </button>
    );
};
// eslint-disable-next-line import/prefer-default-export
export default Button;
