import React from 'react';
import InputLabel from '../InputLabel/InputLabel.types';
export default interface IAutocomplete extends Omit<InputLabel, 'children'> {
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
    options: [string];
    value: string;
}
