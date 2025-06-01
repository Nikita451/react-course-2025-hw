import { useState, type FC } from "react";
import classNames from "classnames";
import type { Restaurant } from "../../data/types";
import styles from "./style.module.scss";
import { RestaurantView } from "./Restaurant";
import { Button } from "../Button";

interface Props {
  restaurants: Restaurant[];
}

export const RestaurantList: FC<Props> = ({ restaurants }) => {
  const [activeRestaurantId, setActiveRestaurantId] = useState<string>(
    restaurants[0].id
  );
  const activeRestaurant = restaurants.find(
    ({ id }) => id === activeRestaurantId
  );
  if (!activeRestaurant) {
    return null;
  }

  function onSetActiveTab(currentTab: string) {
    if (currentTab === activeRestaurantId) {
      return;
    }
    setActiveRestaurantId(currentTab);
  }

  return (
    <>
      <ul className={styles.tabs}>
        {restaurants.map(({ name, id }) => (
          <li
            className={classNames({
              [styles.active]: id === activeRestaurantId,
            })}
            key={id}
          >
            <Button text={name} onClick={() => onSetActiveTab(id)} />
          </li>
        ))}
      </ul>
      <RestaurantView restaurant={activeRestaurant} key={activeRestaurant.id} />
    </>
  );
};
