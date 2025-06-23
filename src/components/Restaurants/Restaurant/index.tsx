"use client";
import React, { type FC } from "react";
import styles from "../style.module.scss";
import { ProgressBar } from "../../ProgressBar";
import RestaurantNavLink from "../../RestaurantNavLink/restNavLink";
import { StatusWrapper } from "../../StatusWrapper/status-wrapper";
import { useGetRestaurantByIdQuery } from "../../../redux/api";

interface Props {
  id: string;
  children: React.JSX.Element;
}

export const RestaurantView: FC<Props> = ({ id, children }) => {
  const {
    data: restaurant,
    isError,
    isFetching,
  } = useGetRestaurantByIdQuery(id);
  const { name: restaurantName } = restaurant || {};

  return (
    <StatusWrapper isError={isError} isFetching={isFetching}>
      <div className={styles.restaurant}>
        <ProgressBar />
        <h2>{restaurantName}</h2>

        <div className={styles.restaurantContent}>
          <ul>
            <li>
              <RestaurantNavLink to="dishes" text="Меню" />
            </li>
            <li>
              <RestaurantNavLink to="reviews" text="Отзывы" />
            </li>
          </ul>

          <div>{children}</div>
        </div>
      </div>
    </StatusWrapper>
  );
};
