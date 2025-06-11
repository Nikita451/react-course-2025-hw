import { useParams } from "react-router";
import { RestaurantDishesContainer } from "./RestaurantDishContainer";

export function RestaurantDishPage() {
  const { restaurantId } = useParams();
  if (!restaurantId) {
    return null;
  }

  return <RestaurantDishesContainer id={restaurantId} />;
}
