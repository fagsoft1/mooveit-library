import React from 'react';
import {fireEvent, getByText, render, cleanup} from '@testing-library/react';
import Button from './Button';
//https://www.freecodecamp.org/news/testing-react-hooks/
afterEach(cleanup)

describe('<Button />', () => {
    test('should display text', () => {
        const {container} = render(<Button text="We Salute You!"/>);
        getByText(container, 'We Salute You!');
    });
});

describe('<Button />', () => {
    test('should handle click events', () => {
        const onClickMock = jest.fn();
        const {container} = render(
            <Button text="Click me, maybe?" onClick={onClickMock}/>,
        );
        const component = container.firstChild;
        fireEvent.click(component);
        expect(onClickMock).toBeCalled();
    });
});