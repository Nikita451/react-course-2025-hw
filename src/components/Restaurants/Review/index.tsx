import { memo } from "react";
import type { Review } from "../../../data/types";

export interface Props {
  reviews: Review[];
}

function RestaurantReview({ reviews }: Props) {
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
}

export default memo(RestaurantReview);
