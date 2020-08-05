import React from "react";

interface IButton {
    text: string,
    onClick: (e: any) => any
}

const Button = ({text, onClick}: IButton) => {
    return <button onClick={onClick}>{text}</button>;
};
export {Button}