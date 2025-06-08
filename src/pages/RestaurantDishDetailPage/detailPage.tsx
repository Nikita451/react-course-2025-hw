import { useParams } from "react-router";
import { DishDetailView } from "../../components/Restaurants/Dish/DishDetailView";

export function RestaurantDishDetailPage() {
  const { dishId } = useParams();
  if (!dishId) {
    return null;
  }

  return <DishDetailView id={dishId} />;
}
