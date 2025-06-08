import "./app.scss";
import { ThemeContextProvider } from "./context/ThemeContext/themeContextProvider";
import { AuthContextProvider } from "./context/AuthContext/AuthContextProvider";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { MainRoutes } from "./MainRoutes";

function App() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <MainRoutes />
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
}

export default App;
