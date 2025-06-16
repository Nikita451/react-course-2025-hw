import { type FC } from "react";
import styles from "./dish.module.scss";
import type { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { selectDishById } from "../../../redux/entities/dish/dishSlice";
import { DishCounter } from "./DishCounter";
import { useRequest } from "../../../redux/utils/use-request";
import { StatusWrapper } from "../../StatusWrapper/status-wrapper";
import { getDishById } from "../../../redux/entities/dish/get-dish";

interface Props {
  id: string;
}

export const DishDetailView: FC<Props> = ({ id }) => {
  const dish = useSelector((state: RootState) => selectDishById(state, id));
  const { name, ingredients, price } = dish || {};

  const requestStatus = useRequest(getDishById, id);

  return (
    <StatusWrapper status={requestStatus}>
      <div className={styles.detailDish}>
        <h2>{name}</h2>
        <p>Ингредиенты: {ingredients.join(",")}</p>
        <p>Цена: {price}$</p>
        <DishCounter id={id} />
      </div>
    </StatusWrapper>
  );
};
