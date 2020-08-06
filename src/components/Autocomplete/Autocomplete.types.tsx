import IInputBase from '@components/InputBase/InputBase.types';

export default interface IAutocomplete extends Omit<IInputBase, 'children'> {
    options: [string];
}
