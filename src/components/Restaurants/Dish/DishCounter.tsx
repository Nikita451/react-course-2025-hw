import { useContext, type FC } from "react";
import { AuthContext } from "../../../context/AuthContext/authContext";
import { CounterView } from "../../Counter/ConterView";
import { useDispatch, useSelector } from "react-redux";
import {
  addDish,
  getBasketCountById,
  removeDish,
} from "../../../redux/slices/basketSlice";
import type { RootState } from "../../../redux/store";

interface Props {
  id: string;
}

const MIN_COUNT: number = 0;
const MAX_COUNT: number = 5;

export const DishCounter: FC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const {
    user: { isAuthorized },
  } = useContext(AuthContext);

  const selectedCount = useSelector((state: RootState) =>
    getBasketCountById(state, id)
  );

  return (
    <>
      {isAuthorized && (
        <CounterView
          onDecrement={() => dispatch(removeDish({ id }))}
          onIncrement={() => dispatch(addDish({ id }))}
          count={selectedCount || 0}
          min={MIN_COUNT}
          max={MAX_COUNT}
        />
      )}
    </>
  );
};
