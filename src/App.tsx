import { RestaurantList } from "./components/Restaurants";
import { restaurants } from "./data/mock";
import "./app.scss";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout>
      <RestaurantList restaurants={restaurants} />
    </Layout>
  );
}

export default App;
