import { type FC } from "react";
import { RestaurantMenu } from "../Menu";
import { RestaurantReview } from "../Review";
import styles from "../style.module.scss";
import type { ReviewCreating } from "../Review/ReviewForm/useReviewForm";
import { ProgressBar } from "../../ProgressBar";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";

interface Props {
  id: string;
}

export const RestaurantView: FC<Props> = ({ id }) => {
  // При создании selector-а внутри slice рукагется TS, что глобальный тип стейна не соответствует локальному.
  // Сделал как в документации:
  const restaurant = useSelector(
    (state: RootState) => state.restaurants.entities[id]
  );
  const { name: restaurantName, menu, reviews: reviewIds } = restaurant;

  function onCreateReview({ name, text, rating }: ReviewCreating) {
    console.log("new review:", name, text, rating);
  }

  return (
    <div className={styles.restaurant}>
      <ProgressBar />

      <h2>{restaurantName}</h2>
      <RestaurantMenu ids={menu} />
      <RestaurantReview ids={reviewIds} onCreateReview={onCreateReview} />
      <RestaurantReview ids={reviewIds} onCreateReview={onCreateReview} />
      <RestaurantReview ids={reviewIds} onCreateReview={onCreateReview} />
      <RestaurantReview ids={reviewIds} onCreateReview={onCreateReview} />
      <RestaurantReview ids={reviewIds} onCreateReview={onCreateReview} />
      <RestaurantReview ids={reviewIds} onCreateReview={onCreateReview} />
      <RestaurantReview ids={reviewIds} onCreateReview={onCreateReview} />
      <RestaurantReview ids={reviewIds} onCreateReview={onCreateReview} />
    </div>
  );
};
