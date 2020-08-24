import React from 'react';
import InputLabel from '../InputLabel/InputLabel.types';

export interface ISelectInputItem {
    value: number | string;
    text: string;
}

export default interface ISelectInput extends Omit<InputLabel, 'children'> {
    value?: string | number | readonly string[] | undefined;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: [ISelectInputItem];
    multiple?: boolean;
}
