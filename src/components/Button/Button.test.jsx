import React from 'react';
import {fireEvent, screen, getByText, getByRole, render, cleanup} from '@testing-library/react';
import Button from './Button';
//https://www.freecodecamp.org/news/testing-react-hooks/
afterEach(cleanup)

const renderButton = ({text = 'My Text is This!', disabled = false, onClick = null}) => {
    const utils = render(<Button text={text} disabled={disabled} onClick={onClick}/>)
    const button = screen.getByText(text);
    return {
        ...utils,
        onClick: () => fireEvent.click(button),
        getByText: (text) => getByText(utils.container, text),
        getByRole: () => getByRole(utils.container, 'button'),
        rerender: (changed_props) => utils.rerender(<Button text={text} disabled={disabled}
                                                            onClick={onClick} {...changed_props}/>)
    }
};

describe('<Button />', () => {
    test('should handle click events', () => {
        const onClickMock = jest.fn();
        const {onClick} = renderButton({onClick: onClickMock})
        onClick();
        expect(onClickMock).toBeCalled();
    });
    test('should disable and enable button', () => {
        const onClickMock = jest.fn();
        const text = 'My Text';
        const {onClick, rerender} = renderButton({onClick: onClickMock, text, disabled: true})
        onClick();
        expect(onClickMock).not.toBeCalled();
        rerender({disabled: false})
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
});