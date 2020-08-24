import React from 'react';
import {fireEvent, screen, getByText, getByRole, render, cleanup} from '@testing-library/react';
import Button from './Button';
import ThemeContextProvider from "../Themes/ThemeContextProvider";
//https://www.freecodecamp.org/news/testing-react-hooks/
afterEach(cleanup)

const theme = {palette: {primary: {main: 'green', contrast: 'black'}, secondary: {main: 'blue', contrast: 'white'}}};

const renderButtonWithTheme = ({palette = 'primary'}) => {
    const utils = render(<ThemeContextProvider theme={theme}>
        <Button text={'text'} palette={palette}/>
    </ThemeContextProvider>)
    return {
        getButton: () => getByRole(utils.container, 'button'),
        rerender: (changed_props) => utils.rerender(<ThemeContextProvider theme={theme}>
            <Button text={'text'} palette={palette} {...changed_props}/>
        </ThemeContextProvider>)
    }
}

const renderButton = ({text = 'My Text is This!', disabled = false, onClick = null, palette = 'primary'}) => {
    const utils = render(<Button text={text} disabled={disabled} onClick={onClick} palette={palette}/>)
    const button = screen.getByText(text);
    return {
        ...utils,
        onClick: () => fireEvent.click(button),
        getByText: (text) => getByText(utils.container, text),
        getByRole: () => getByRole(utils.container, 'button'),
        rerender: (changed_props) => utils.rerender(<Button
            text={text}
            disabled={disabled}
            onClick={onClick}
            palette={palette}
            {...changed_props}
        />)
    }
};

describe('<Button />', () => {
    test('should handle click events', () => {
        const onClickMock = jest.fn();
        const {onClick} = renderButton({onClick: onClickMock})
        onClick();
        expect(onClickMock).toBeCalled();
    });
    test('should display text', () => {
        const text = "New Text!";
        const {getByText} = renderButton({text})
        getByText('New Text!')
    });
    test('should be disable or enable', () => {
        const {getByRole, rerender} = renderButton({})
        expect(getByRole().disabled).toBeFalsy();
        rerender({disabled: true})
        expect(getByRole().disabled).toBeTruthy();
    });
    test('should have default theme', () => {
        const {getByRole, rerender} = renderButton({})
        expect(getByRole().style.color).toBe('white');
        expect(getByRole().style.backgroundColor).toBe('black');
        rerender({palette: 'secondary'})
        expect(getByRole().style.color).toBe('white');
        expect(getByRole().style.backgroundColor).toBe('red');
    });
    test('should use custom theme', () => {
        const {getButton, rerender} = renderButtonWithTheme({});
        expect(getButton().style.color).toBe(theme.palette.primary.contrast);
        expect(getButton().style.backgroundColor).toBe(theme.palette.primary.main);
        rerender({palette: 'secondary'})
        expect(getButton().style.color).toBe(theme.palette.secondary.contrast);
        expect(getButton().style.backgroundColor).toBe(theme.palette.secondary.main);
    });
});