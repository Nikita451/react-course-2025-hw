import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import type { ReviewNormalized } from "../../data/types";

export interface ReviewState {
  ids: string[];
  entities: Record<string, ReviewNormalized>;
}

export const getReviewsByRestId = createAsyncThunk(
  "/fetch/review-by-id",
  async (id: string) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${id})`
    );
    const restaurant = await response.json();

    return restaurant;
  }
);

const initialState: ReviewState = {
  ids: [],
  entities: {},
};

const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReviewsByRestId.fulfilled, (state, action) => {
      entityAdapter.setAll(state, action.payload);
    });
  },
  selectors: {
    selectReviewIds: (state: ReviewState) => state.ids,
    selectReviewById: (state, id: string) => state.entities[id],
  },
});

export const { selectReviewById, selectReviewIds } = reviewSlice.selectors;

export default reviewSlice.reducer;
