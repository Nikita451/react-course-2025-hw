import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { RestaurantNormalized } from "../../../data/types";
import { getRestaurantById, getRestaurants } from "./get-restaurants";

const entityAdapter = createEntityAdapter<RestaurantNormalized>();

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRestaurants.fulfilled, (state, action) => {
        entityAdapter.setAll(state, action.payload);
      })
      .addCase(getRestaurantById.fulfilled, (state, action) => {
        entityAdapter.setOne(state, action.payload);
      });
  },
  selectors: {
    selectRestaurantIds: (state) => state.ids,
    selectRestaurantById: (state, id: string) => state.entities[id],
  },
});

export default restaurantSlice.reducer;
export const { selectRestaurantById, selectRestaurantIds } =
  restaurantSlice.selectors;
