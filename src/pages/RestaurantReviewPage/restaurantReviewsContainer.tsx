import type { FC } from "react";
import { RestaurantReview } from "../../components/Restaurants/Review";
import { useSelector } from "react-redux";
import { StatusWrapper } from "../../components/StatusWrapper/status-wrapper";
import {
  useAddReviewMutation,
  useGetReviewsByRestIdQuery,
  useGetUsersQuery,
  useUpdateReviewMutation,
  type ReviewAction,
} from "../../redux/api";
import type { User } from "../../data/types";
import type { ReviewCreating } from "../../components/Restaurants/Review/ReviewForm/useReviewForm";
import { selectUsersById } from "../../redux/entities/user/userSlice";

interface RestaurantReviewProps {
  id: string;
}

export const RestaurantReviewsContainer: FC<RestaurantReviewProps> = ({
  id,
}) => {
  const {
    data: reviews,
    isError: isReviewError,
    isFetching: isReviewFetching,
  } = useGetReviewsByRestIdQuery(id);
  const { isError: isUserError, isFetching: isUserFetching } =
    useGetUsersQuery();

  const usersById: Record<string, User> = useSelector(selectUsersById);
  const currentUserId = Object.keys(usersById)[0];

  const [createReview] = useAddReviewMutation();
  const [updateReview] = useUpdateReviewMutation();

  function onCreateReview(newReview: ReviewCreating) {
    const reviewAction: ReviewAction = {
      review: { ...newReview, id: "", userId: currentUserId },
      restaurantId: id,
    };
    createReview(reviewAction);
  }

  function onUpdateReview(newReview: ReviewCreating) {
    updateReview({ review: { ...newReview, userId: currentUserId } });
  }

  if (!reviews || !usersById) {
    return null;
  }

  return (
    <StatusWrapper
      isError={isReviewError || isUserError}
      isFetching={isReviewFetching || isUserFetching}
    >
      <RestaurantReview
        reviews={reviews}
        usersById={usersById}
        onCreateReview={onCreateReview}
        onUpdateReview={onUpdateReview}
      />
    </StatusWrapper>
  );
};
