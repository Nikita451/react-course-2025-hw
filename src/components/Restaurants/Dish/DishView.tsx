import { type FC } from "react";
import styles from "./dish.module.scss";
import { Link } from "react-router";
import { DishCounter } from "./DishCounter";
import type { Dish } from "../../../data/types";

interface Props {
  dish: Dish;
}

export const DishView: FC<Props> = ({ dish }) => {
  const { id, name } = dish || {};

  return (
    <div className={styles.dish}>
      <li>
        <Link to={`/dish/${id}`}>{name}</Link>
        <DishCounter id={id} />
      </li>
    </div>
  );
};
