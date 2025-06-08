import styles from "./layout.module.scss";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/header";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
