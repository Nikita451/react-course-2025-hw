import { type FC } from "react";
import styles from "./dish.module.scss";
import type { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { selectDishById } from "../../../redux/slices/dishSlice";
import { DishCounter } from "./DishCounter";

interface Props {
  id: string;
}

export const DishDetailView: FC<Props> = ({ id }) => {
  const dish = useSelector((state: RootState) => selectDishById(state, id));
  const { name, ingredients, price } = dish;

  return (
    <div className={styles.detailDish}>
      <h2>{name}</h2>
      <p>Ингредиенты: {ingredients.join(",")}</p>
      <p>Цена: {price}$</p>
      <DishCounter id={id} />
    </div>
  );
};
