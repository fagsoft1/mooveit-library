import IInputBase from '@components/InputBase/InputBase.types';

export default interface IInputText extends Omit<IInputBase, 'children'> {
    text: string;
    type: string;
}
