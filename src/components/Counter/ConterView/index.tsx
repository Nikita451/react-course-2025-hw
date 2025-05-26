import type React from "react";
import styles from "./counter.style.module.scss";

export interface Props {
  count: number;
  min: number;
  max: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const CounterView: React.FC<Props> = ({
  count,
  min,
  max,
  onDecrement,
  onIncrement,
}: Props) => {
  return (
    <div className={styles.counter}>
      <button disabled={count >= max} onClick={onIncrement}>
        +
      </button>
      <span>{count}</span>
      <button disabled={count <= min} onClick={onDecrement}>
        -
      </button>
    </div>
  );
};
