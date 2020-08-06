import React from "react";

import InputBase, { IInputBase } from "@components/InputBase/InputBase";

export interface IInputText extends Omit<IInputBase, "children"> {
  text: string;
  type: string;
}

const InputText: React.FC<IInputText> = ({
  text,
  type = "text",
  name,
  label,
}: IInputText) => {
  return (
    <InputBase name={name} label={label}>
      <input type={type} value={text} />
    </InputBase>
  );
};

export default InputText;
