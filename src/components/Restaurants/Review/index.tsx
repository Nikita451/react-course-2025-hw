import type { FC } from "react";
import type { Review } from "../../../data/types";

export interface Props {
  reviews: Review[];
}

export const RestaurantReview: FC<Props> = ({ reviews }) => {
  return (
    <>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map(({ text, id }) => (
          <li key={id}>{text}</li>
        ))}
      </ul>
    </>
  );
};
