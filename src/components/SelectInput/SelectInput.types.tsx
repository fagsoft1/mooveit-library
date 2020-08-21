import InputLabel from '../InputLabel/InputLabel.types';

export interface ISelectInputItem {
    value: number | string;
    text: string;
}

export default interface ISelectInput extends InputLabel {
    options: [ISelectInputItem];
    multiple?: boolean;
}
