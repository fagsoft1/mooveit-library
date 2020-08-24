import React from 'react';
import {fireEvent, screen, render, cleanup, getByRole} from '@testing-library/react';
import InputText from './InputText';
import ThemeContextProvider from "../Themes/ThemeContextProvider";
//https://www.freecodecamp.org/news/testing-react-hooks/
afterEach(cleanup)

const theme = {palette: {primary: {main: 'green', contrast: 'black'}, secondary: {main: 'blue', contrast: 'white'}}};

const renderInputTextWithTheme = ({palette = 'primary'}) => {
    const utils = render(<ThemeContextProvider theme={theme}><InputText name={'name'} label={'label'} value={'value'}
                                                                        palette={palette}/></ThemeContextProvider>)
    const input = screen.getByLabelText('label');
    return {
        input,
        rerender: (changed_props) => utils.rerender(<ThemeContextProvider theme={theme}>
            <InputText name={'name'} label={'label'} value={'value'} palette={palette} {...changed_props}/>
        </ThemeContextProvider>)
    }
};

const renderInputText = ({label = 'My Label', disabled = false, name = 'my_name', onChange, value = '', palette = 'primary'}) => {
    const utils = render(<InputText onChange={onChange} name={name} label={label} disabled={disabled} value={value}
                                    palette={palette}/>)
    const input = screen.getByLabelText(label);
    return {
        ...utils,
        input,
        onChange: (value) => fireEvent.change(input, {target: {value}}),
        rerender: (changed_props) => utils.rerender(<InputText onChange={onChange} name={name} label={label}
                                                               disabled={disabled} value={value}
                                                               palette={palette}
                                                               {...changed_props}/>)
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
        expect(onChangeMock).toBeCalled();
    });
    test('should have default theme', () => {
        const {input, rerender} = renderInputText({});
        expect(input.style.color).toBe('white');
        expect(input.style.backgroundColor).toBe('black');
        rerender({palette: 'secondary'})
        expect(input.style.color).toBe('white');
        expect(input.style.backgroundColor).toBe('red');
    });
    test('should use custom theme', () => {
        const {input, rerender} = renderInputTextWithTheme({});
        expect(input.style.color).toBe(theme.palette.primary.contrast);
        expect(input.style.backgroundColor).toBe(theme.palette.primary.main);
        rerender({palette: 'secondary'})
        expect(input.style.color).toBe(theme.palette.secondary.contrast);
        expect(input.style.backgroundColor).toBe(theme.palette.secondary.main);
    });
})