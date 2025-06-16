import { type FC } from "react";
import styles from "./style.module.scss";
import { RestaurantTabView } from "./RestaurantTab/restaurantTab";
import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import {
  getRestaurants,
  selectRestaurantIds,
} from "../../redux/slices/restaurantSlice";
import { Outlet } from "react-router";
import { useRequest } from "../../redux/utils/use-request";
import { StatusWrapper } from "../StatusWrapper/status-wrapper";

export const RestaurantList: FC = () => {
  const restaurantIds = useSelector((state: RootState) =>
    selectRestaurantIds(state)
  );

  const requestStatus = useRequest(getRestaurants);

  return (
    <StatusWrapper status={requestStatus}>
      <>
        <ul className={styles.tabs}>
          {restaurantIds.map((id) => (
            <RestaurantTabView key={id} id={id} />
          ))}
        </ul>
        <Outlet />
      </>
    </StatusWrapper>
  );
};
