import type { FC } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { selectReviewById } from "../../../redux/entities/review/reviewSlice";
import { selectUserById } from "../../../redux/entities/user/userSlice";

export interface Prop {
  id: string;
}

export const ReviewView: FC<Prop> = ({ id }) => {
  const { text, userId } = useSelector(
    (state: RootState) => selectReviewById(state, id) || {}
  );

  const { name: userName } = useSelector(
    (state: RootState) => selectUserById(state, userId) || {}
  );

  return (
    <li>
      {userName} : {text}
    </li>
  );
};
