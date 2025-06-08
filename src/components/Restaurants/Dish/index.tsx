import { type FC } from "react";
import { DishView } from "./DishView";

export interface Props {
  ids: string[];
}

export const RestaurantDishes: FC<Props> = ({ ids }) => {
  if (!ids.length) {
    return <div>Меню данного ресторана в процессе подготовки</div>;
  }

  return (
    <ul>
      {ids.map((id) => (
        <DishView key={id} id={id} />
      ))}
    </ul>
  );
};
