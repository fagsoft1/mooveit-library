import React from 'react';

export default interface IButton {
    palette: 'primary' | 'secondary';
    text: string;
    disabled?: boolean;
    type?: 'button' | 'reset' | 'submit';
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
