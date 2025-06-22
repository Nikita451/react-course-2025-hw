"use client";
import React, { ReactElement, FC } from "react";
import styles from "./restaurant.style.module.scss";
import { useGetRestaurantsQuery } from "../../redux/api";
import { StatusWrapper } from "../../components/StatusWrapper/status-wrapper";
import { RestaurantTabView } from "../../components/Restaurants/RestaurantTab/restaurantTab";
import RestaurantContextWrapper from "../../components/RestaurantContextWrapper/wrapper";

interface Props {
  children: ReactElement;
}

const RestaurantListWrapper: FC<Props> = ({ children }) => {
  return (
    <RestaurantContextWrapper>
      <RestaurantList>{children}</RestaurantList>
    </RestaurantContextWrapper>
  );
};

const RestaurantList: FC<Props> = ({ children }) => {
  const { data, isFetching, isError } = useGetRestaurantsQuery();

  if (!data) {
    return null;
  }

  return (
    <StatusWrapper isError={isError} isFetching={isFetching}>
      <>
        <ul className={styles.tabs}>
          {data.map((restaurant) => (
            <RestaurantTabView key={restaurant.id} restaurant={restaurant} />
          ))}
        </ul>
        {children}
      </>
    </StatusWrapper>
  );
};

export default RestaurantListWrapper;
