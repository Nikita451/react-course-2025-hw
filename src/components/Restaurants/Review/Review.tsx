import type { FC } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { getReviewById } from "../../../redux/slices/reviewSlice";
import { getUserById } from "../../../redux/slices/userSlice";

export interface Prop {
  id: string;
}

export const ReviewView: FC<Prop> = ({ id }) => {
  const { text, userId } = useSelector((state: RootState) =>
    getReviewById(state, id)
  );

  const { name: userName } = useSelector((state: RootState) =>
    getUserById(state, userId)
  );

  return (
    <li>
      {userName} : {text}
    </li>
  );
};
