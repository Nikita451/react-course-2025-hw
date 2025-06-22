import { type FC, ReactElement } from "react";
import { Provider } from "react-redux";
import { AuthContextProvider } from "../../context/AuthContext/AuthContextProvider";
import { ThemeContextProvider } from "../../context/ThemeContext/themeContextProvider";
import { store } from "../../redux/store";
import Layout from "../Layout";

interface Props {
  children: ReactElement;
}

const RestaurantContextWrapper: FC<Props> = ({ children }) => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout>
            <div>{children}</div>
          </Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};

export default RestaurantContextWrapper;
