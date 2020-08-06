import React, { useContext } from "react";
import ThemeContext from "@components/Themes/ThemeContext";

interface IButton {
  text: string;
  // type: "button" | "reset" | "submit";
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Button: React.FC<IButton> = ({
  text,
  onClick,
}: // type = "button",
IButton) => {
  const theme = useContext(ThemeContext);
  return (
    <button
      onClick={onClick}
      type="button"
      style={{
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrast,
      }}
    >
      {text}
    </button>
  );
};
export default Button;
