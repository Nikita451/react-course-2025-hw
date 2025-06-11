import type { FC } from "react";
import { RestaurantReview } from "../../components/Restaurants/Review";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/slices/restaurantSlice";
import type { RootState } from "../../redux/store";

interface RestaurantReviewProps {
  id: string;
}

export const RestaurantReviewContainer: FC<RestaurantReviewProps> = ({
  id,
}) => {
  const { reviews } = useSelector((state: RootState) =>
    selectRestaurantById(state, id)
  );

  function onCreateReview() {}

  return <RestaurantReview ids={reviews} onCreateReview={onCreateReview} />;
};
