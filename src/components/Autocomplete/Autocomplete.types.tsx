import React from 'react';
import IInputText from '../InputText/InputText.types';

export default interface IAutocomplete extends Omit<IInputText, 'children' | 'onKeyDown' | 'onKeyUp'> {
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
    options: [string];
    value: string;
}
