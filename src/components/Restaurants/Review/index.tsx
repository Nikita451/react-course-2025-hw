import { useContext, type FC } from "react";
import { ReviewForm } from "./ReviewForm";
import type { ReviewHandler } from "./ReviewForm/useReviewForm";
import { AuthContext } from "../../../context/AuthContext/authContext";
import { ReviewView } from "./Review";

export interface Props {
  ids: string[];
  onCreateReview: ReviewHandler;
}

export const RestaurantReview: FC<Props> = ({ ids, onCreateReview }) => {
  const {
    user: { isAuthorized },
  } = useContext(AuthContext);
  if (!ids?.length) {
    <div>Отзывов на данный ресторан пока нет</div>;
  }

  return (
    <>
      <ul>
        {ids.map((id) => (
          <ReviewView key={id} id={id} />
        ))}
      </ul>
      {isAuthorized && <ReviewForm onCreateReview={onCreateReview} />}
    </>
  );
};
