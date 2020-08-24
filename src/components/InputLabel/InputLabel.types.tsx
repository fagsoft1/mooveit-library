import React from 'react';

export default interface IInputLabel {
    label: string;
    name: string;
    children: React.ReactElement;
    palette?: 'primary' | 'secondary';
}
