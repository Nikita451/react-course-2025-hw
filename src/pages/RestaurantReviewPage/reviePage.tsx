import { useParams } from "react-router";
import { RestaurantReviewContainer } from "./restaurantReviewContainer";

export function RestaurantReviewPage() {
  const { restaurantId } = useParams();
  if (!restaurantId) {
    return null;
  }

  return <RestaurantReviewContainer id={restaurantId} />;
}
