import type { FC } from "react";
import { RestaurantReview } from "../../components/Restaurants/Review";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/restaurantSlice";
import type { RootState } from "../../redux/store";
import { useRequest } from "../../redux/utils/use-request";
import { StatusWrapper } from "../../components/StatusWrapper/status-wrapper";
import { combineStatus } from "../../components/StatusWrapper/statusUtils";
import { getReviewsByRestId } from "../../redux/entities/review/get-review";
import { getUsers } from "../../redux/entities/user/get-user";

interface RestaurantReviewProps {
  id: string;
}

export const RestaurantReviewsContainer: FC<RestaurantReviewProps> = ({
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
