import { type FormEvent } from "react";
import {
  useReviewForm,
  type ReviewCreating,
  type ReviewHandler,
} from "./useReviewForm";
import { CounterView } from "../../../Counter/ConterView";
import styles from "./reviewForm.module.scss";
import { Button } from "../../../Button";

export interface Props {
  onCreateReview: ReviewHandler;
  initialState?: ReviewCreating;
}

const MIN_RATING = 1;
const MAX_RATING = 5;

export const ReviewForm = ({ onCreateReview, initialState }: Props) => {
  const {
    creatingReview,
    onNameChange,
    onClear,
    onRatingChange,
    onTextChange,
  } = useReviewForm(initialState);

  const { rating, name, text } = creatingReview;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onCreateReview(creatingReview);
    onClear();
  }

  return (
    <div className={styles.form}>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Имя</label>
          <input
            onChange={(e) => onNameChange(e.target.value)}
            id="name"
            name="monster"
            value={name}
            required
          />
        </div>
        <div>
          <label htmlFor="text">Текст</label>
          <textarea
            onChange={(e) => onTextChange(e.target.value)}
            id="text"
            value={text}
            required
          ></textarea>
        </div>
        <div>
          <label>Ваша оценка</label>
          <CounterView
            min={MIN_RATING}
            max={MAX_RATING}
            count={rating}
            onDecrement={() => onRatingChange(rating - 1)}
            onIncrement={() => onRatingChange(rating + 1)}
          />
        </div>
        <div>
          <Button type="submit" text="Отправить" />
          <Button onClick={onClear} type="button" text="Очистить" />
        </div>
      </form>
    </div>
  );
};
