import type { FC } from "react";
import type { ReviewNormalized, User } from "../../../data/types";

export interface Prop {
  review: ReviewNormalized;
  user: User;
}

export const ReviewView: FC<Prop> = ({ review, user }) => {
  return (
    <li>
      {user?.name} : {review.text}
    </li>
  );
};
