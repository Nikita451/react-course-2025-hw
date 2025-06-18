import { useParams } from "react-router";
import { RestaurantReviewsContainer } from "./restaurantReviewsContainer";

export function RestaurantReviewPage() {
  const { restaurantId } = useParams();
  if (!restaurantId) {
    return null;
  }

  return <RestaurantReviewsContainer id={restaurantId} />;
}
