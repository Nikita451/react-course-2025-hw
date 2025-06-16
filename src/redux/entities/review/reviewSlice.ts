import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { ReviewNormalized } from "../../../data/types";
import { getReviewsByRestId } from "./get-review";

const entityAdapter = createEntityAdapter<ReviewNormalized>();

export const reviewSlice = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReviewsByRestId.fulfilled, (state, action) => {
      entityAdapter.setAll(state, action.payload);
    });
  },
  selectors: {
    selectReviewIds: (state) => state.ids,
    selectReviewById: (state, id: string) => state.entities[id],
  },
});

export const { selectReviewById, selectReviewIds } = reviewSlice.selectors;

export default reviewSlice.reducer;
