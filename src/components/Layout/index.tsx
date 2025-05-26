import type { JSX } from "react";
import styles from "./layout.module.scss";

export interface IProps {
  children?: JSX.Element;
}

export function Layout({ children }: IProps) {
  return (
    <div className={styles.layout}>
      <header>
        <h1>Доставка из лучших ресторанов Москвы</h1>
      </header>

      <section>{children}</section>

      <footer>Powered By React19</footer>
    </div>
  );
}
