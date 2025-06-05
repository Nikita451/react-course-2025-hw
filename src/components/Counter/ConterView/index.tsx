import type React from "react";
import styles from "./counter.style.module.scss";
import { Button } from "../../Button";

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
      <Button disabled={count >= max} onClick={onIncrement} text="+" />
      <span>{count}</span>
      <Button disabled={count <= min} onClick={onDecrement} text="-" />
    </div>
  );
};
