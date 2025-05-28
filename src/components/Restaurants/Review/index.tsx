import type { FC } from "react";
import type { Review } from "../../../data/types";
import { ReviewForm } from "./ReviewForm";
import type { ReviewHandler } from "./ReviewForm/useReviewForm";

export interface Props {
  reviews: Review[];
  onCreateReview: ReviewHandler;
}

export const RestaurantReview: FC<Props> = ({ reviews, onCreateReview }) => {
  if (!reviews?.length) {
    <div>Отзывов на данный ресторан пока нет</div>;
  }

  return (
    <>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map(({ text, id }) => (
          <li key={id}>{text}</li>
        ))}
      </ul>
      <ReviewForm onCreateReview={onCreateReview} />
    </>
  );
};
