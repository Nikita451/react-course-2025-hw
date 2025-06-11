import { type FC } from "react";
import styles from "./dish.module.scss";
import type { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { selectDishById } from "../../../redux/slices/dishSlice";
import { Link } from "react-router";
import { DishCounter } from "./DishCounter";

interface Props {
  id: string;
}

export const DishView: FC<Props> = ({ id }) => {
  const dish = useSelector((state: RootState) => selectDishById(state, id));
  const { name } = dish;

  return (
    <div className={styles.dish}>
      <li>
        <Link to={`/dish/${id}`}>{name}</Link>
        <DishCounter id={id} />
      </li>
    </div>
  );
};
