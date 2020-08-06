import React from "react";
import InputText, { IInputText } from "@components/InputText/InputText";

type IInputNumber = Omit<IInputText, "type">;

const InputNumber: React.FC<IInputNumber> = ({
  text,
  name,
  label,
}: IInputNumber) => {
  return <InputText text={text} label={label} name={name} type="number" />;
};
export default InputNumber;
