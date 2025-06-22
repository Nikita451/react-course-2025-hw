"use client";
import { type FC } from "react";
import styles from "./dish.module.scss";
import { DishCounter } from "./DishCounter";
import { StatusWrapper } from "../../StatusWrapper/status-wrapper";
import { useGetDishByIdQuery } from "../../../redux/api";

interface Props {
  id: string;
}

export const DishDetailView: FC<Props> = ({ id }) => {
  const { data: dish, isError, isFetching } = useGetDishByIdQuery(id);
  const { name, ingredients, price } = dish || {};

  return (
    <StatusWrapper isError={isError} isFetching={isFetching}>
      <div className={styles.detailDish}>
        <h2>{name}</h2>
        <p>Ингредиенты: {ingredients?.join(",")}</p>
        <p>Цена: {price}$</p>
        <DishCounter id={id} />
      </div>
    </StatusWrapper>
  );
};
