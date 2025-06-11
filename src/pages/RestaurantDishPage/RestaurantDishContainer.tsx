import type { FC } from "react";
import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/slices/restaurantSlice";
import { RestaurantDishes } from "../../components/Restaurants/Dish";

interface RestaurantDishesProps {
  id: string;
}

export const RestaurantDishesContainer: FC<RestaurantDishesProps> = ({
  id,
}) => {
  const { dishes } = useSelector((state: RootState) =>
    selectRestaurantById(state, id)
  );

  return <RestaurantDishes ids={dishes} />;
};
