import { useMemo, useReducer } from "react";

export interface ReviewCreating {
  name: string;
  text: string;
  rating: number;
}

export type ReviewHandler = (review: ReviewCreating) => void;
export const MAX_RATING = 5;

const INIT_STATE: ReviewCreating = Object.freeze({
  name: "",
  text: "",
  rating: MAX_RATING,
});

interface PayloadProps {
  type: string;
  value?: string | number;
}

const CHANGE_NAME = "CHANGE_NAME";
const CHANGE_TEXT = "CHANGE_TEXT";
const CHANGE_RATING = "CHANGE_RATING";
const CLEAR_FORM = "CLEAR_FORM";

function formReviewReducer(
  initState = INIT_STATE,
  actions: PayloadProps
): ReviewCreating {
  switch (actions.type) {
    case CHANGE_NAME:
      return { ...initState, name: actions.value as string };
    case CHANGE_TEXT:
      return { ...initState, text: actions.value as string };
    case CHANGE_RATING:
      return { ...initState, rating: actions.value as number };
    case CLEAR_FORM:
    default:
      return INIT_STATE;
  }
}

export function useReviewForm() {
  const [creatingReview, dispatch] = useReducer(formReviewReducer, INIT_STATE);

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
