import { createAsyncThunk } from "@reduxjs/toolkit";

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
