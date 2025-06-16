import { type FC } from "react";
import styles from "./dish.module.scss";
import type { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { getDishesById, selectDishById } from "../../../redux/slices/dishSlice";
import { DishCounter } from "./DishCounter";
import { useRequest } from "../../../redux/utils/use-request";
import { StatusWrapper } from "../../StatusWrapper/status-wrapper";

interface Props {
  id: string;
}

export const DishDetailView: FC<Props> = ({ id }) => {
  const dish = useSelector((state: RootState) => selectDishById(state, id));
  const { name, ingredients, price } = dish || {};

  const requestStatus = useRequest(getDishesById, id);

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
