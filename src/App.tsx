import Restaurants from "./components/Restaurants";
import { restaurants } from "./data/mock";
import "./app.scss";

function App() {
  return (
    <>
      <h1>Доставка из лучших ресторанов Москвы</h1>
      <Restaurants restaurants={restaurants} />
    </>
  );
}

export default App;
