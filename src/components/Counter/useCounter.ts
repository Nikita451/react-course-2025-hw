import { useState } from "react";

export function useCounter() {
  const [count, setCount] = useState<number>(0);

  return {
    count,
    onIncrement: () => setCount((currentCount) => currentCount + 1),
    onDecrement: () => setCount((currentCount) => currentCount - 1),
  };
}
