import React, {useContext} from 'react';
import ThemeContext from '@components/Themes/ThemeContext';

import IButton from '@components/Button/Button.types';

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
export default Button;
