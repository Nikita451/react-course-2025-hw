import { RestaurantList } from "./components/Restaurants";
import "./app.scss";
import { Layout } from "./components/Layout";
import { ThemeContextProvider } from "./context/ThemeContext/themeContextProvider";
import { AuthContextProvider } from "./context/AuthContext/AuthContextProvider";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout>
            <RestaurantList />
          </Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
}

export default App;
