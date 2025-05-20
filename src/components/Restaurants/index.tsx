import { memo, useState } from "react";
import classNames from "classnames";
import type { Restaurant } from "../../data/types";
import Menu from "./Menu";
import Review from "./Review";
import styles from "./style.module.scss";

interface Props {
  restaurants: Restaurant[];
}

function RestaurantView({ restaurants }: Props) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { name: restaurantName, menu, reviews } = restaurants[activeTab];

  function onSetActiveTab(currentTab: number) {
    if (currentTab === activeTab) {
      return;
    }
    setActiveTab(currentTab);
  }

  return (
    <>
      <ul className={styles.tabs}>
        {restaurants.map(({ name, id }, index) => (
          <li
            className={classNames({ [styles.active]: index === activeTab })}
            onClick={() => onSetActiveTab(index)}
            key={id}
          >
            {name}
          </li>
        ))}
      </ul>

      <div className={styles.restaurant}>
        <h2>{restaurantName}</h2>
        <Menu menu={menu} />
        <Review reviews={reviews} />
      </div>
    </>
  );
}

export default memo(RestaurantView);
