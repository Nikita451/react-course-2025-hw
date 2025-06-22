import { type FC } from "react";
import styles from "./dish.module.scss";
import { DishCounter } from "./DishCounter";
import type { Dish } from "../../../data/types";
import Link from "next/link";

interface Props {
  dish: Dish;
}

export const DishView: FC<Props> = ({ dish }) => {
  const { id, name } = dish || {};

  return (
    <div className={styles.dish}>
      <li>
        <Link href={`/dish/${id}`}>{name}</Link>
        <DishCounter id={id} />
      </li>
    </div>
  );
};
