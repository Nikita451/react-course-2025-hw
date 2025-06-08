import { type FC } from "react";
import styles from "../style.module.scss";
import { ProgressBar } from "../../ProgressBar";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { getRestaurantById } from "../../../redux/slices/restaurantSlice";
import { NavLink, Outlet } from "react-router";

interface Props {
  id: string;
}

export const RestaurantView: FC<Props> = ({ id }) => {
  const restaurant = useSelector((state: RootState) =>
    getRestaurantById(state, id)
  );
  const { name: restaurantName } = restaurant;

  return (
    <div className={styles.restaurant}>
      <ProgressBar />
      <h2>{restaurantName}</h2>

      <div className={styles.restaurantContent}>
        <ul>
          <li>
            <NavLink
              to="dishes"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Меню
            </NavLink>
          </li>
          <li>
            <NavLink
              to="reviews"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Отзывы
            </NavLink>
          </li>
        </ul>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
