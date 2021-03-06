import React from 'react';
import {fireEvent, screen, render, cleanup, getByDisplayValue, getByText} from '@testing-library/react';
import Autocomplete from '../Autocomplete/Autocomplete';
import ThemeContextProvider from "../Themes/ThemeContextProvider";
//https://www.freecodecamp.org/news/testing-react-hooks/
afterEach(cleanup)

const theme = {palette: {primary: {main: 'green', contrast: 'black'}, secondary: {main: 'blue', contrast: 'white'}}};

const renderAutocompleteWithTheme = ({palette = 'primary'}) => {
    const utils = render(<ThemeContextProvider theme={theme}>
        <Autocomplete
            palette={palette}
            options={['']}
            name={'name'}
            label={'label'}
            value={''}
        />
    </ThemeContextProvider>)
    const input = screen.getByLabelText('label');
    return {
        input,
        rerender: (changed_props) => utils.rerender(<ThemeContextProvider theme={theme}>
            <Autocomplete
                palette={palette}
                options={['']}
                name={'name'}
                label={'label'}
                value={''}
                {...changed_props}
            />
        </ThemeContextProvider>)
    }
};

const renderAutocomplete = ({palette = 'primary', label = 'My Label', disabled = false, name = 'my_name', onChange, value = 'Lion', options = ['Lion', 'Lizard', 'Cow', 'Pig', 'Bird']}) => {
    const utils = render(<Autocomplete
        palette={palette}
        options={options}
        onChange={onChange}
        name={name}
        label={label}
        disabled={disabled}
        value={value}
    />)
    const input = screen.getByLabelText(label);
    return {
        ...utils,
        input,
        onUp: () => fireEvent.keyDown(input, {key: 'ArrowUp', keyCode: 38}),
        onDown: () => fireEvent.keyDown(input, {key: 'ArrowDown', keyCode: 40}),
        enter: () => fireEvent.keyDown(input, {key: 'Enter', keyCode: 13}),
        onChange: (value) => fireEvent.change(input, {target: {value}}),
        rerender: (changed_props) => utils.rerender(<Autocomplete
            palette={palette}
            options={options}
            onChange={onChange}
            name={name}
            label={label}
            disabled={disabled}
            value={value}
            {...changed_props}
        />)
    }
};

describe('<Autocomplete />', () => {
    test('should set initial value', () => {
        const {input} = renderAutocomplete({label: 'Name', value: 'Cow'})
        expect(input.value === 'Cow');
    });
    test('should handle onChange', () => {
        const onChangeMock = jest.fn();
        const {input, onChange} = renderAutocomplete({label: 'Name', onChange: onChangeMock})
        onChange('Pi')
        expect(input.value === 'Pi');
        expect(onChangeMock).toBeCalled();
    });
    test('should show current options like Li', () => {
        const {onChange} = renderAutocomplete({label: 'Name', value: 'Cow'})
        onChange('Li')
        const select_option = screen.getAllByRole('presentation');
        select_option.map(e => getByText(e, /Li/i))
    });
    test('should up, down and enter', () => {
        const {input, onChange, onDown, onUp, enter} = renderAutocomplete({
            label: 'Name',
            value: '',
            options: ['Ant', 'Ant2', 'Ant3', 'Ant4', 'Ant5']
        })
        onChange('An'); //set position on first option  0
        onDown();//second 1
        onDown();//third 2
        const select_option = screen.getAllByRole('presentation');
        expect(select_option[2].className).toBe('option-active')
        onUp(); // 1
        expect(select_option[1].className).toBe('option-active')
        onDown();// 2
        enter();
        expect(input.value).toBe('Ant3');
    });
    test('should have default theme', () => {
        const {input, rerender} = renderAutocomplete({});
        expect(input.style.color).toBe('white');
        expect(input.style.backgroundColor).toBe('black');
        rerender({palette: 'secondary'})
        expect(input.style.color).toBe('white');
        expect(input.style.backgroundColor).toBe('red');
    });
    test('should use custom theme', () => {
        const {input, rerender} = renderAutocompleteWithTheme({});
        expect(input.style.color).toBe(theme.palette.primary.contrast);
        expect(input.style.backgroundColor).toBe(theme.palette.primary.main);
        rerender({palette: 'secondary'})
        expect(input.style.color).toBe(theme.palette.secondary.contrast);
        expect(input.style.backgroundColor).toBe(theme.palette.secondary.main);
    });
})