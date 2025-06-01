import { RestaurantList } from "./components/Restaurants";
import { restaurants } from "./data/mock";
import "./app.scss";
import { Layout } from "./components/Layout";
import { ThemeContextProvider } from "./context/ThemeContext/themeContextProvider";
import { AuthContextProvider } from "./context/AuthContext/AuthContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Layout>
          <RestaurantList restaurants={restaurants} />
        </Layout>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
