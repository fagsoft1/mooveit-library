import React from 'react';
import {fireEvent, screen, render, cleanup} from '@testing-library/react';
import InputNumber from './InputNumber';
import ThemeContextProvider from "../Themes/ThemeContextProvider";
//https://www.freecodecamp.org/news/testing-react-hooks/
afterEach(cleanup)

const theme = {palette: {primary: {main: 'green', contrast: 'black'}, secondary: {main: 'blue', contrast: 'white'}}};

const renderInputNumberWithTheme = ({palette = 'primary'}) => {
    const utils = render(<ThemeContextProvider theme={theme}><InputNumber name={'name'} label={'label'} value={'value'}
                                                                          palette={palette}/></ThemeContextProvider>)
    const input = screen.getByLabelText('label');
    return {
        input,
        rerender: (changed_props) => utils.rerender(<ThemeContextProvider theme={theme}>
            <InputNumber name={'name'} label={'label'} value={'value'} palette={palette} {...changed_props}/>
        </ThemeContextProvider>)
    }
};

const renderInputNumber = ({label = 'My Label', disabled = false, name = 'my_name', onChange, value = '0', decimalSeparator = ',', palette = 'primary'}) => {
    const utils = render(<InputNumber
        decimalSeparator={decimalSeparator}
        onChange={onChange}
        name={name}
        label={label}
        disabled={disabled}
        value={value}
        palette={palette}
    />)
    const input = screen.getByLabelText(label);
    return {
        ...utils,
        input,
        onChange: (value) => {
            fireEvent.change(input, {target: {value}})
        },
        onKeyUp: (value) => fireEvent.keyUp(input, {currentTarget: {value}}),
        rerender: (changed_props) => utils.rerender(<InputNumber
            decimalSeparator={decimalSeparator}
            onChange={onChange}
            name={name}
            label={label}
            disabled={disabled}
            value={value}
            palette={palette}
            {...changed_props}
        />)
    }
};

describe('<InputNumber />', () => {
    test('should set initial value', () => {
        const {input} = renderInputNumber({value: '500'});
        expect(input.value).toBe('500');
    });
    test('should get enable or disabled', () => {
        const {input, rerender} = renderInputNumber({label: 'Name', value: '5000', disabled: false})
        expect(input.disabled).toBeFalsy();
        rerender({disabled: true})
        expect(input.disabled).toBeTruthy();
    });
    test('should handle onChange events', () => {
        const onChangeMock = jest.fn();
        const newValue = '2000';
        const {onChange, input} = renderInputNumber({label: 'Name', value: '1000', onChange: onChangeMock})
        expect(input.value === newValue).toBeFalsy();
        onChange(newValue);
        expect(input.value === newValue).toBeTruthy();
        expect(onChangeMock).toBeCalled();
    });
    test('should not allow letters to be inputted', () => {
        const {input, onChange} = renderInputNumber({label: 'Name', value: '1000'})
        expect(input.value).toBe('1000');
        onChange('New Value');
        expect(input.value).toBe('');
    })
    test('should use decimalSeparator', () => {
        const {input, onKeyUp, rerender} = renderInputNumber({label: 'Name', value: '1000', decimalSeparator: '.'})
        expect(input.value).toBe('1000');
        onKeyUp('1');
        expect(input.value).toBe('1.000');
        rerender({decimalSeparator: ','});
        onKeyUp('1');
        expect(input.value).toBe('1,000');
    })
    test('should have default theme', () => {
        const {input, rerender} = renderInputNumber({});
        expect(input.style.color).toBe('white');
        expect(input.style.backgroundColor).toBe('black');
        rerender({palette: 'secondary'})
        expect(input.style.color).toBe('white');
        expect(input.style.backgroundColor).toBe('red');
    });
    test('should use custom theme', () => {
        const {input, rerender} = renderInputNumberWithTheme({});
        expect(input.style.color).toBe(theme.palette.primary.contrast);
        expect(input.style.backgroundColor).toBe(theme.palette.primary.main);
        rerender({palette: 'secondary'})
        expect(input.style.color).toBe(theme.palette.secondary.contrast);
        expect(input.style.backgroundColor).toBe(theme.palette.secondary.main);
    });
})