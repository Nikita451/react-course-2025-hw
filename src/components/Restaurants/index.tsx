import { type FC } from "react";
import styles from "./style.module.scss";
import { RestaurantTabView } from "./RestaurantTab/restaurantTab";
import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { getRestaurantIds } from "../../redux/slices/restaurantSlice";
import { Outlet } from "react-router";

export const RestaurantList: FC = () => {
  const restaurantIds = useSelector((state: RootState) =>
    getRestaurantIds(state)
  );

  return (
    <>
      <ul className={styles.tabs}>
        {restaurantIds.map((id) => (
          <RestaurantTabView key={id} id={id} />
        ))}
      </ul>
      <Outlet />
    </>
  );
};
