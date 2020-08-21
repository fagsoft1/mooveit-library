import React from 'react';
import IInputLabel from '../InputLabel/InputLabel.types';
export default interface IInputBase extends Omit<IInputLabel, 'children'> {
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
