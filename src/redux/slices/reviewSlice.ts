import { createSlice } from "@reduxjs/toolkit";
import type { ReviewNormalized } from "../../data/types";
import { normalizedReviews } from "../../data/normalized-mock";

export interface ReviewState {
  ids: string[];
  entities: Record<string, ReviewNormalized>;
}

const initialState: ReviewState = {
  ids: normalizedReviews.map(({ id }) => id),
  entities: normalizedReviews.reduce(
    (allEntities: Record<string, ReviewNormalized>, currentEntity) => {
      allEntities[currentEntity.id] = currentEntity;
      return allEntities;
    },
    {}
  ),
};

export const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  selectors: {
    selectReviewIds: (state: ReviewState) => state.ids,
    selectReviewById: (state, id: string) => state.entities[id],
  },
});

export const { selectReviewById, selectReviewIds } = reviewSlice.selectors;

export default reviewSlice.reducer;
