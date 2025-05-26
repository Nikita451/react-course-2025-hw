import { type FormEvent } from "react";
import { useReviewForm, type ReviewHandler } from "./useReviewForm";
import { CounterView } from "../../../Counter/ConterView";
import styles from "./reviewForm.module.scss";

export interface Props {
  onCreateReview: ReviewHandler;
}

const MIN_RATING = 1;
const MAX_RATING = 5;

export const ReviewForm = ({ onCreateReview }: Props) => {
  const {
    creatingReview,
    onNameChange,
    onClear,
    onRatingChange,
    onTextChange,
  } = useReviewForm();

  const { rating, name, text } = creatingReview;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onCreateReview(creatingReview);
    onClear();
  }

  function onReset() {
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
          <button type="submit">Отправить</button>
          <button onClick={onReset} type="button">
            Очистить
          </button>
        </div>
      </form>
    </div>
  );
};
