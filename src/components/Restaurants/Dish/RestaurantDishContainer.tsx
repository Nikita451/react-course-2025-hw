"use client";
import type { FC } from "react";
import { RestaurantDishes } from ".";
import { StatusWrapper } from "../../StatusWrapper/status-wrapper";
import { useGetDishesByRestIdQuery } from "../../../redux/api";

interface RestaurantDishesProps {
  id: string;
}

export const RestaurantDishesContainer: FC<RestaurantDishesProps> = ({
  id,
}) => {
  const { data: dishes, isError, isFetching } = useGetDishesByRestIdQuery(id);

  return (
    <StatusWrapper isError={isError} isFetching={isFetching}>
      <RestaurantDishes dishes={dishes} />
    </StatusWrapper>
  );
};
