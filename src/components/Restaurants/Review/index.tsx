import { useContext, useState, type FC } from "react";
import { ReviewForm } from "./ReviewForm";
import type { ReviewCreating, ReviewHandler } from "./ReviewForm/useReviewForm";
import { AuthContext } from "../../../context/AuthContext/authContext";
import { ReviewView } from "./Review";
import type { ReviewNormalized, User } from "../../../data/types";

export interface Props {
  reviews: ReviewNormalized[];
  usersById: Record<string, User>;
  onCreateReview: ReviewHandler;
  onUpdateReview: ReviewHandler;
}

export const RestaurantReview: FC<Props> = ({
  reviews,
  usersById,
  onCreateReview,
  onUpdateReview,
}) => {
  const {
    user: { isAuthorized },
  } = useContext(AuthContext);

  const [reviewForUpdate, setUpdateReview] = useState<ReviewCreating | null>(
    null
  );

  if (!reviews?.length) {
    <div>Отзывов на данный ресторан пока нет</div>;
  }

  return (
    <>
      <ul>
        {reviews.map((review) => (
          <div key={review.id}>
            <ReviewView review={review} user={usersById[review.userId]} />
            {isAuthorized && (
              <button
                onClick={() =>
                  setUpdateReview({
                    ...review,
                    name: usersById[review.userId]?.name,
                  })
                }
              >
                Edit
              </button>
            )}
          </div>
        ))}
      </ul>
      {reviewForUpdate && (
        <ReviewForm
          initialState={reviewForUpdate}
          onCreateReview={onUpdateReview}
        />
      )}
      {isAuthorized && <ReviewForm onCreateReview={onCreateReview} />}
    </>
  );
};
