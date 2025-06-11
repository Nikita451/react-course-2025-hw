import { Basket } from "../../Basket/basket";
import { AuthButton } from "../AuthButton/authButton";
import { ThemeButton } from "../ThemeButton/themeButton";
import styles from "../layout.module.scss";

export function Header() {
  return (
    <header>
      <h1>Доставка из лучших ресторанов Москвы</h1>
      <Basket />
      <div className={styles.controlPanel}>
        <ThemeButton />
        <AuthButton />
      </div>
    </header>
  );
}
