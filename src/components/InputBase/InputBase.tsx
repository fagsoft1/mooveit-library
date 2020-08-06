import React, { useContext } from "react";
import ThemeContext from "@components/Themes/ThemeContext";

export interface IInputBase {
  label: string;
  name: string;
  children: React.ReactElement;
}

const InputBase: React.FC<IInputBase> = ({
  label,
  name,
  children,
}: IInputBase) => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <label style={{ color: theme.palette.primary.main }} htmlFor={name}>
        <span>{label} </span>
      </label>
      {children}
    </>
  );
};
export default InputBase;
