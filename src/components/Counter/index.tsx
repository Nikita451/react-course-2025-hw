import { CounterView } from "./ConterView";
import { useCounter } from "./useCounter";

interface IProps {
  min: number;
  max: number;
}

function Counter({ min, max }: IProps) {
  const { count, onIncrement, onDecrement } = useCounter();

  return (
    <CounterView
      max={max}
      min={min}
      count={count}
      onDecrement={onDecrement}
      onIncrement={onIncrement}
    />
  );
}

export default Counter;
