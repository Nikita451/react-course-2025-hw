import { useMemo, useReducer } from "react";

export interface ReviewCreating {
  id: string;
  name: string;
  text: string;
  rating: number;
  userId: string;
}

export type ReviewHandler = (review: ReviewCreating) => void;
export const MAX_RATING = 5;

const INIT_STATE: ReviewCreating = Object.freeze({
  name: "",
  text: "",
  userId: "",
  id: "",
  rating: MAX_RATING,
});

type ReviewFormAction =
  | { type: "name" | "text"; value: string }
  | { type: "rating"; value: number }
  | { type: "clear" };

const CHANGE_NAME = "name";
const CHANGE_TEXT = "text";
const CHANGE_RATING = "rating";
const CLEAR_FORM = "clear";

function formReviewReducer(
  initState = INIT_STATE,
  actions: ReviewFormAction
): ReviewCreating {
  switch (actions.type) {
    case CHANGE_NAME:
      return { ...initState, name: actions.value };
    case CHANGE_TEXT:
      return { ...initState, text: actions.value };
    case CHANGE_RATING:
      return { ...initState, rating: actions.value };
    case CLEAR_FORM:
      return INIT_STATE;
    default:
      return initState;
  }
}

export function useReviewForm(initialState: ReviewCreating = INIT_STATE) {
  const [creatingReview, dispatch] = useReducer(
    formReviewReducer,
    initialState
  );

  const handlers = useMemo(() => {
    return {
      onNameChange: (value: string) => dispatch({ type: CHANGE_NAME, value }),
      onTextChange: (value: string) => dispatch({ type: CHANGE_TEXT, value }),
      onRatingChange: (value: number) =>
        dispatch({ type: CHANGE_RATING, value }),
      onClear: () => dispatch({ type: CLEAR_FORM }),
    };
  }, [dispatch]);

  return {
    creatingReview,
    ...handlers,
  };
}
