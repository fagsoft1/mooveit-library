import IInputBase from '@components/InputBase/InputBase.types';

export interface ISelectInputItem {
    value: number | string;
    text: string;
}

export default interface ISelectInput extends IInputBase {
    options: [ISelectInputItem];
    multiple?: boolean;
}
