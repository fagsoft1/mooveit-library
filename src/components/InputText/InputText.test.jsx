import React from 'react';
import {fireEvent, screen, render, cleanup} from '@testing-library/react';
import InputText from './InputText';
//https://www.freecodecamp.org/news/testing-react-hooks/
afterEach(cleanup)

const renderInputText = ({label = 'My Label', disabled = false, name = 'my_name', onChange, value = ''}) => {
    const utils = render(<InputText onChange={onChange} name={name} label={label} disabled={disabled} value={value}/>)
    const input = screen.getByLabelText(label);
    return {
        ...utils,
        input,
        onChange: (value) => fireEvent.change(input, {target: {value}}),
        rerender: (changed_props) => utils.rerender(<InputText onChange={onChange} name={name} label={label}
                                                               disabled={disabled} value={value} {...changed_props}/>)
    }
};

describe('<InputText />', () => {
    test('should set initial value', () => {
        const {input} = renderInputText({value: 'Fabio Garcia'});
        expect(input.value).toBe('Fabio Garcia');
    });
    test('should get enable or disabled', () => {
        const {input, rerender} = renderInputText({label: 'Name', value: 'Fabio', disabled: false})
        expect(input.disabled).toBeFalsy();
        rerender({disabled: true})
        expect(input.disabled).toBeTruthy();
    });
    test('should handle onChange events', () => {
        const onChangeMock = jest.fn();
        const newValue = 'Andres';
        const {onChange, input} = renderInputText({label: 'Name', value: 'Fabio', onChange: onChangeMock})
        expect(input.value === newValue).toBeFalsy();
        onChange(newValue);
        expect(input.value === newValue).toBeTruthy();
    });
})