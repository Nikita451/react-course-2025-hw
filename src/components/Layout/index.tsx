import { type JSX } from "react";
import styles from "./layout.module.scss";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/header";

export interface IProps {
  children?: JSX.Element;
}

export function Layout({ children }: IProps) {
  return (
    <div className={styles.layout}>
      <Header />
      <section>{children}</section>
      <Footer />
    </div>
  );
}
