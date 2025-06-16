import type { FC } from "react";
import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/restaurantSlice";
import { RestaurantDishes } from "../../components/Restaurants/Dish";
import { useRequest } from "../../redux/utils/use-request";
import { StatusWrapper } from "../../components/StatusWrapper/status-wrapper";
import { getDishesByRestId } from "../../redux/entities/dish/get-dish";

interface RestaurantDishesProps {
  id: string;
}

export const RestaurantDishesContainer: FC<RestaurantDishesProps> = ({
  id,
}) => {
  const { dishes } = useSelector(
    (state: RootState) => selectRestaurantById(state, id) || {}
  );
  const requestStatus = useRequest(getDishesByRestId, id);

  return (
    <StatusWrapper status={requestStatus}>
      <RestaurantDishes ids={dishes} />
    </StatusWrapper>
  );
};
