import React from 'react';
import Button from './Button';

export default {
    title: 'Button',
};

export const Primary = () => <Button text="Hola" />;
export const Secondary = () => <Button text="Hola 2" onClick={() => alert('SIIII')} />;
