import React from "react";
import InputBase, { IInputBase } from "@components/InputBase/InputBase";

interface ISelectInputItem {
  value: number | string;
  text: string;
}

interface ISelectInput extends IInputBase {
  options: [ISelectInputItem];
  multiple?: boolean;
}

const SelectInput: React.FC<ISelectInput> = ({
  options,
  name,
  label,
  multiple = false,
}: ISelectInput) => {
  return (
    <>
      <InputBase label={label} name={name}>
        <select name={name} id={name} multiple={multiple}>
          {options.map((e) => (
            <option key={e.value} value={e.value}>
              {e.text}
            </option>
          ))}
        </select>
      </InputBase>
    </>
  );
};
export default SelectInput;
