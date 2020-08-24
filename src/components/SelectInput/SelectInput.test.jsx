import React from 'react';
import {fireEvent, screen, render, cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import ThemeContextProvider from "../Themes/ThemeContextProvider";
import SelectInput from './SelectInput';
//https://www.freecodecamp.org/news/testing-react-hooks/
afterEach(cleanup)

const theme = {palette: {primary: {main: 'green', contrast: 'black'}, secondary: {main: 'blue', contrast: 'white'}}};

const renderSelectInputWithTheme = ({palette = 'primary'}) => {
    const utils = render(<ThemeContextProvider theme={theme}>
        <SelectInput name={'name'} label={'label'} value={'value'}
                     options={[{value: '1', text: 'One'}]}
                     palette={palette}/>
    </ThemeContextProvider>)
    const input = screen.getByLabelText('label');
    return {
        input,
        rerender: (changed_props) => utils.rerender(<ThemeContextProvider theme={theme}>
            <SelectInput name={'name'} label={'label'} value={'value'} options={[{value: '1', text: 'One'}]}
                         palette={palette} {...changed_props}/>
        </ThemeContextProvider>)
    }
};

const renderSelectInput = (
    {
        label = 'My Label',
        disabled = false,
        name = 'my_name',
        onChange,
        value = '0',
        multiple = false,
        palette = 'primary',
        options = [{
            text: 'Uno',
            value: '1'
        }, {
            text: 'Dos',
            value: '2'
        }, {
            text: 'Tres',
            value: '3'
        }, {
            text: 'Cuatro',
            value: '4'
        }]
    }) => {
    const utils = render(<SelectInput
        options={options}
        onChange={onChange}
        multiple={multiple}
        name={name}
        label={label}
        disabled={disabled}
        value={value}
        palette={palette}
    />)
    const input = screen.getByTestId(name);
    return {
        ...utils,
        input,
        onChange: (value) => {
            fireEvent.change(input, {target: {value}})
        },
        selectOptions: (optionsToSelect) => userEvent.selectOptions(input, optionsToSelect),
        deselectOptions: (optionsToDeselect) => userEvent.deselectOptions(input, optionsToDeselect),
        rerender: (changed_props) => utils.rerender(<SelectInput
            options={options}
            multiple={multiple}
            name={name}
            label={label}
            disabled={disabled}
            onChange={onChange}
            value={value}
            palette={palette}
            {...changed_props}
        />)
    }
};

describe('<SelectInput />', () => {
    test('should set value', () => {
        const {input} = renderSelectInput({value: 2});
        expect(input.value).toBe("2");
    });
    test('should handle onChange', () => {
        const onChangeMock = jest.fn();
        const {input, onChange} = renderSelectInput({onChange: onChangeMock})
        onChange('2')
        expect(input.value === 'Dos');
        expect(onChangeMock).toBeCalled();
    });
    test('should allow enable and disable', () => {
        const {input, rerender} = renderSelectInput({disabled: false})
        expect(input.disabled).toBeFalsy();
        rerender({disabled: true})
        expect(input.disabled).toBeTruthy();
    });
    test('should be multiple and select multiple options', () => {
        const {selectOptions, getByText} = renderSelectInput({multiple: true, value: []})
        selectOptions(['2', '4']);
        expect(getByText('Uno').selected).toBeFalsy();
        expect(getByText('Dos').selected).toBeTruthy();
        expect(getByText('Tres').selected).toBeFalsy();
        expect(getByText('Cuatro').selected).toBeTruthy();
    });
    test('should be multiple and deselect multiple options', () => {
        const {selectOptions, deselectOptions, getByText} = renderSelectInput({multiple: true, value: []})
        selectOptions(['2', '4']);
        expect(getByText('Dos').selected).toBeTruthy();
        expect(getByText('Cuatro').selected).toBeTruthy();
        deselectOptions(['2']);
        expect(getByText('Dos').selected).toBeFalsy();
        expect(getByText('Cuatro').selected).toBeTruthy();
        deselectOptions(['4']);
        expect(getByText('Dos').selected).toBeFalsy();
        expect(getByText('Cuatro').selected).toBeFalsy();
    });
    test('should have default theme', () => {
        const {input, rerender} = renderSelectInput({});
        expect(input.style.color).toBe('white');
        expect(input.style.backgroundColor).toBe('black');
        rerender({palette: 'secondary'})
        expect(input.style.color).toBe('white');
        expect(input.style.backgroundColor).toBe('red');
    });
    test('should use custom theme', () => {
        const {input, rerender} = renderSelectInputWithTheme({});
        expect(input.style.color).toBe(theme.palette.primary.contrast);
        expect(input.style.backgroundColor).toBe(theme.palette.primary.main);
        rerender({palette: 'secondary'})
        expect(input.style.color).toBe(theme.palette.secondary.contrast);
        expect(input.style.backgroundColor).toBe(theme.palette.secondary.main);
    });
})