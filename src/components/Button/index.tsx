import { useContext, type FC } from "react";
import {
  DARK_THEME,
  DEFAULT_THEME,
  ThemeContext,
} from "../../context/ThemeContext/themeContext";
import classNames from "classnames";
import styles from "./button.style.module.scss";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
}

export const Button: FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  type,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      type={type}
      disabled={disabled}
      className={classNames({
        [styles.ligt]: theme === DEFAULT_THEME,
        [styles.dark]: theme === DARK_THEME,
      })}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
