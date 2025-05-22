import { memo } from "react";
import { useCounter } from "./useCounter";
import styles from "./counter.style.module.scss";

interface IProps {
  min: number;
  max: number;
}

function Counter({ min, max }: IProps) {
  const { count, onIncrement, onDecrement } = useCounter();

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
}

export default memo(Counter);
