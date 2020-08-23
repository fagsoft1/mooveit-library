import React from 'react';
import {fireEvent, screen, render, cleanup} from '@testing-library/react';
import SelectInput from './SelectInput';
//https://www.freecodecamp.org/news/testing-react-hooks/
afterEach(cleanup)

const renderSelectInput = ({label = 'My Label', disabled = false, name = 'my_name', onChange, value = '0', multiple = false}) => {
    const utils = render(<SelectInput
        options={[{text: 'Uno', value: '1'}, {text: 'Dos', value: '2'}]}
        multiple={multiple}
        name={name}
        label={label}
        disabled={disabled}
        value={value}
    />)
    const input = screen.getByDisplayValue(label);
    return {
        ...utils,
        input,
        onChange: (value) => {
            fireEvent.change(input, {target: {value}})
        },
        rerender: (changed_props) => utils.rerender(<SelectInput
            options={[{text: 'Uno', value: '1'}, {text: 'Dos', value: '2'}]}
            multiple={multiple}
            name={name}
            label={label}
            disabled={disabled}
            value={value}
            {...changed_props}
        />)
    }
};

describe('<SelectInput />', () => {
    test('should get enable or disabled', () => {
        const {input, rerender} = renderSelectInput({label: 'Name', value: 'Fabio', disabled: false})
        expect(input.disabled).toBeFalsy();
        rerender({disabled: true})
        expect(input.disabled).toBeTruthy();
    });
})