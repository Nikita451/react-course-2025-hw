import type { FC } from "react";
import styles from "../style.module.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { getRestaurantById } from "../../../redux/slices/restaurantSlice";
import { NavLink } from "react-router";
export interface Props {
  id: string;
}

export const RestaurantTabView: FC<Props> = ({ id }) => {
  const { name } = useSelector((state: RootState) =>
    getRestaurantById(state, id)
  );
  return (
    <li
      className={classNames({
        [styles.active]: id === id,
      })}
    >
      <NavLink
        to={`${id}`}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        {name}
      </NavLink>
    </li>
  );
};
