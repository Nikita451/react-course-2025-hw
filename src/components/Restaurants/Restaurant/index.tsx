import type { FC } from "react";
import type { Restaurant } from "../../../data/types";
import { RestaurantMenu } from "../Menu";
import { RestaurantReview } from "../Review";
import styles from "../style.module.scss";

interface Props {
  restaurant: Restaurant;
}

export const RestaurantView: FC<Props> = ({ restaurant }) => {
  const { name: restaurantName, menu, reviews } = restaurant;
  return (
    <div className={styles.restaurant}>
      <h2>{restaurantName}</h2>
      <RestaurantMenu menu={menu} />
      <RestaurantReview reviews={reviews} />
    </div>
  );
};
