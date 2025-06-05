import { useContext } from "react";
import {
  DARK_THEME,
  DEFAULT_THEME,
  ThemeContext,
} from "../../../context/ThemeContext/themeContext";
import { Button } from "../../Button";

export function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleChangeTheme() {
    setTheme(theme === DEFAULT_THEME ? DARK_THEME : DEFAULT_THEME);
  }

  return <Button text="Сменить тему" onClick={handleChangeTheme} />;
}
