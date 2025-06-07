import { useState, type FC } from "react";
import styles from "./style.module.scss";
import { RestaurantView } from "./Restaurant";
import { RestaurantTabView } from "./RestaurantTab/restaurantTab";
import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { getRestaurantIds } from "../../redux/slices/restaurantSlice";

export const RestaurantList: FC = () => {
  const restaurantIds = useSelector((state: RootState) =>
    getRestaurantIds(state)
  );

  const [activeRestaurantId, setActiveRestaurantId] = useState<string>(
    restaurantIds[0]
  );

  function onSetActiveTab(currentRestaurantId: string) {
    if (currentRestaurantId === activeRestaurantId) {
      return;
    }
    setActiveRestaurantId(currentRestaurantId);
  }

  return (
    <>
      <ul className={styles.tabs}>
        {restaurantIds.map((id) => (
          <RestaurantTabView key={id} id={id} onSetActiveTab={onSetActiveTab} />
        ))}
      </ul>
      <RestaurantView id={activeRestaurantId} key={activeRestaurantId} />
    </>
  );
};
