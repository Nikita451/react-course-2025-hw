import { useSelector } from "react-redux";
import { selectBasket } from "../../redux/slices/basketSlice";

export function Basket() {
  const basket = useSelector(selectBasket);

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
