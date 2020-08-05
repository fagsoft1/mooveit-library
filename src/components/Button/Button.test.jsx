import {fireEvent} from "@testing-library/dom";
import {getByText, render} from "@testing-library/react";
import React from "react";
import {Button} from "./Button";

describe("Button", () => {
    test("should display text", () => {
        const {container} = render(<Button text="We Salute You!"/>);
        getByText(container, "We Salute You!");
    });
});

describe("Button", () => {
    test("should handle click events", () => {
        const onClickMock = jest.fn();
        const {container} = render(
            <Button text="Click me, maybe?" onClick={onClickMock}/>
        );
        const component = container.firstChild;

        fireEvent.click(component);

        expect(onClickMock).toBeCalled();
    });
});