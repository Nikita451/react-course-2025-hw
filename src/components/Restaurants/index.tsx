import { memo, useState, type FC } from "react";
import classNames from "classnames";
import type { Restaurant } from "../../data/types";
import styles from "./style.module.scss";
import { RestaurantView } from "./Restaurant";

interface Props {
  restaurants: Restaurant[];
}

export const RestaurantList: FC<Props> = ({ restaurants }) => {
  const [activeTab, setActiveTab] = useState<string>(restaurants[0].id);
  const activeRestaurant = restaurants.find((r) => r.id === activeTab);
  if (!activeRestaurant) {
    return null;
  }

  function onSetActiveTab(currentTab: string) {
    if (currentTab === activeTab) {
      return;
    }
    setActiveTab(currentTab);
  }

  return (
    <>
      <ul className={styles.tabs}>
        {restaurants.map(({ name, id }) => (
          <li
            className={classNames({ [styles.active]: id === activeTab })}
            key={id}
          >
            <button onClick={() => onSetActiveTab(id)}>{name}</button>
          </li>
        ))}
      </ul>
      <RestaurantView restaurant={activeRestaurant} />
    </>
  );
};
