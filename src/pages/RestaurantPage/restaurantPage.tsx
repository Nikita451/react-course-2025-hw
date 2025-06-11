import { useParams } from "react-router";
import { RestaurantView } from "../../components/Restaurants/Restaurant";

export function RestaurantPage() {
  const { restaurantId } = useParams();
  if (!restaurantId) {
    return null;
  }

  return <RestaurantView id={restaurantId} key={restaurantId} />;
}
