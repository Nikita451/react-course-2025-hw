import styles from "./layout.module.scss";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/header";
import { FC, ReactElement } from "react";

interface Props {
  children: ReactElement;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
