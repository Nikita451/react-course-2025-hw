import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { Dish } from "../../../data/types";
import { getDishById, getDishesByRestId } from "./get-dish";

const entityAdapter = createEntityAdapter<Dish>();

export const dishSlice = createSlice({
  name: "dish",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectDishIds: (state) => state,
    selectDishById: (state, id: string) => state.entities[id],
    selectDishes: (state) => state.entities,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDishesByRestId.fulfilled, (state, action) => {
      entityAdapter.setAll(state, action.payload);
    });
    builder.addCase(getDishById.fulfilled, (state, action) => {
      entityAdapter.setOne(state, action.payload);
    });
  },
});

export const { selectDishById, selectDishIds, selectDishes } =
  dishSlice.selectors;

export default dishSlice.reducer;
