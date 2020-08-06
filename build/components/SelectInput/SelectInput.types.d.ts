import IInputBase from "@components/InputBase/InputBase.types";
export default interface ISelectInputItem {
    value: number | string;
    text: string;
}
export default interface ISelectInput extends IInputBase {
    options: [ISelectInputItem];
    multiple?: boolean;
}
