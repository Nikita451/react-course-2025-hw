import { useSelector } from "react-redux";
import { getBasket } from "../../redux/slices/basketSlice";

export function Basket() {
  const basket = useSelector(getBasket);

  return (
    <div>
      <ul>
        {basket.map(({ id, name, count }) => (
          <li key={id}>
            {name} : {count}
          </li>
        ))}
      </ul>
    </div>
  );
}
