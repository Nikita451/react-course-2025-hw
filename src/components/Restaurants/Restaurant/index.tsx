import { useState, type FC } from "react";
import { v4 as uuidv4 } from "uuid";
import type { Restaurant } from "../../../data/types";
import { RestaurantMenu } from "../Menu";
import { RestaurantReview } from "../Review";
import styles from "../style.module.scss";
import type { ReviewCreating } from "../Review/ReviewForm/useReviewForm";

interface Props {
  restaurant: Restaurant;
}

export const RestaurantView: FC<Props> = ({ restaurant }) => {
  const { name: restaurantName, menu, reviews } = restaurant;

  /*
  Так никто не делает, но в рамках учебного проекта при работе со статическим объектом ... :)
  */
  const [dynamicRevies, setReviews] = useState(reviews);
  function onCreateReview({ name, text, rating }: ReviewCreating) {
    const newReviews = [
      ...dynamicRevies,
      { user: name, text: text, rating, id: uuidv4() },
    ];
    setReviews(newReviews);
  }

  return (
    <div className={styles.restaurant}>
      <h2>{restaurantName}</h2>
      <RestaurantMenu menu={menu} />
      <RestaurantReview
        reviews={dynamicRevies}
        onCreateReview={onCreateReview}
      />
    </div>
  );
};
