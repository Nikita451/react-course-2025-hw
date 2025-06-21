import type { FC } from "react";
import styles from "../style.module.scss";
import classNames from "classnames";
import { RestaurantNavLink } from "../../RestaurantNavLink/restNavLink";
import type { RestaurantNormalized } from "../../../data/types";

export interface Props {
  restaurant: RestaurantNormalized;
}

export const RestaurantTabView: FC<Props> = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  const { id, name } = restaurant;
  return (
    <li
      className={classNames({
        [styles.active]: id === id,
      })}
    >
      <RestaurantNavLink to={id} text={name} />
    </li>
  );
};
