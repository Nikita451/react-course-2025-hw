import { useContext, type JSX } from "react";
import styles from "./layout.module.scss";
import { Button } from "../Button";
import {
  DARK_THEME,
  DEFAULT_THEME,
  ThemeContext,
} from "../../context/ThemeContext/themeContext";
import { AuthContext, TEST_USER } from "../../context/AuthContext/authContext";

export interface IProps {
  children?: JSX.Element;
}

export function Layout({ children }: IProps) {
  const { theme, setTheme } = useContext(ThemeContext);
  const { user, setUser } = useContext(AuthContext);

  function handleChangeTheme() {
    setTheme(theme === DEFAULT_THEME ? DARK_THEME : DEFAULT_THEME);
  }

  function handleChangeUser() {
    setUser(!user ? TEST_USER : "");
  }

  return (
    <div className={styles.layout}>
      <header>
        <h1>Доставка из лучших ресторанов Москвы</h1>
        <div className={styles.controlPanel}>
          <Button text="Сменить тему" onClick={handleChangeTheme} />
          <Button
            text={user ? `Выйти (${user})` : "Войти"}
            onClick={handleChangeUser}
          />
        </div>
      </header>
      <section>{children}</section>

      <footer>Powered By React19</footer>
    </div>
  );
}
