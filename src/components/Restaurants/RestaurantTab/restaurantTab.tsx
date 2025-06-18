import type { FC } from "react";
import styles from "../style.module.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { selectRestaurantById } from "../../../redux/entities/restaurant/restaurantSlice";
import { RestaurantNavLink } from "../../RestaurantNavLink/restNavLink";
export interface Props {
  id: string;
}

export const RestaurantTabView: FC<Props> = ({ id }) => {
  const { name } = useSelector((state: RootState) =>
    selectRestaurantById(state, id)
  );
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
