import { type FC } from "react";
import { DishView } from "./DishView";
import type { Dish } from "../../../data/types";

export interface Props {
  dishes: Dish[] | undefined;
}

export const RestaurantDishes: FC<Props> = ({ dishes }) => {
  if (!dishes?.length) {
    return <div>Меню данного ресторана в процессе подготовки</div>;
  }

  return (
    <ul>
      {dishes.map((dish) => (
        <DishView key={dish.id} dish={dish} />
      ))}
    </ul>
  );
};
