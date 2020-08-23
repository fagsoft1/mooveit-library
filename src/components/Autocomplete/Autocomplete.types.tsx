import InputLabel from '../InputLabel/InputLabel.types';

export default interface IAutocomplete extends Omit<InputLabel, 'children'> {
    options: [string];
    value: string;
}
