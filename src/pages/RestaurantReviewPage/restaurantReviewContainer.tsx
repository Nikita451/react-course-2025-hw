import type { FC } from "react";
import { RestaurantReview } from "../../components/Restaurants/Review";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/slices/restaurantSlice";
import type { RootState } from "../../redux/store";
import { useRequest } from "../../redux/utils/use-request";
import { getReviewsByRestId } from "../../redux/slices/reviewSlice";
import { getUsers } from "../../redux/slices/userSlice";
import {
  combineStatus,
  StatusWrapper,
} from "../../components/StatusWrapper/status-wrapper";

interface RestaurantReviewProps {
  id: string;
}

export const RestaurantReviewContainer: FC<RestaurantReviewProps> = ({
  id,
}) => {
  const { reviews } = useSelector((state: RootState) =>
    selectRestaurantById(state, id)
  );
  const requestStatusRest = useRequest(getReviewsByRestId, id);
  const requestStatusUser = useRequest(getUsers);

  function onCreateReview() {}

  return (
    <StatusWrapper status={combineStatus(requestStatusRest, requestStatusUser)}>
      <RestaurantReview ids={reviews} onCreateReview={onCreateReview} />
    </StatusWrapper>
  );
};
