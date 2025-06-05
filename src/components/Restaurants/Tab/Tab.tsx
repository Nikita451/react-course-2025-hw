import type { FC } from "react";
import styles from "../style.module.scss";
import classNames from "classnames";
import { Button } from "../../Button";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { getRestaurantById } from "../../../redux/slices/restaurantSlice";
export interface Props {
  id: string;
  onSetActiveTab: (id: string) => void;
}

export const TabView: FC<Props> = ({ id, onSetActiveTab }) => {
  const { name } = useSelector((state: RootState) =>
    getRestaurantById(state, id)
  );
  return (
    <li
      className={classNames({
        [styles.active]: id === id,
      })}
    >
      <Button text={name} onClick={() => onSetActiveTab(id)} />
    </li>
  );
};
