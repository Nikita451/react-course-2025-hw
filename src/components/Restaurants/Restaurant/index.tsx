import { type FC } from "react";
import styles from "../style.module.scss";
import { ProgressBar } from "../../ProgressBar";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { selectRestaurantById } from "../../../redux/slices/restaurantSlice";
import { Outlet } from "react-router";
import { RestaurantNavLink } from "../../RestaurantNavLink/restNavLink";

interface Props {
  id: string;
}

export const RestaurantView: FC<Props> = ({ id }) => {
  const restaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, id)
  );
  const { name: restaurantName } = restaurant;

  return (
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

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
