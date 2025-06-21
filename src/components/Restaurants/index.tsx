import { type FC } from "react";
import styles from "./style.module.scss";
import { RestaurantTabView } from "./RestaurantTab/restaurantTab";
import { Outlet } from "react-router";
import { StatusWrapper } from "../StatusWrapper/status-wrapper";
import { useGetRestaurantsQuery } from "../../redux/api";

export const RestaurantList: FC = () => {
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
        <Outlet />
      </>
    </StatusWrapper>
  );
};
