import IInputBase from '../InputBase/InputBase.types';

export default interface IInputNumber extends Omit<IInputBase, 'value'> {
    decimalSeparator?: '.' | ',';
}
