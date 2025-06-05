import type { FC } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";

export interface Prop {
  id: string;
}

export const ReviewView: FC<Prop> = ({ id }) => {
  const { text, userId } = useSelector(
    (state: RootState) => state.reviews.entities[id]
  );

  const { name: userName } = useSelector(
    (state: RootState) => state.users.entities[userId]
  );

  return (
    <li>
      {userName} : {text}
    </li>
  );
};
