import { createSlice } from "@reduxjs/toolkit";
import type { Dish } from "../../data/types";
import { normalizedDishes } from "../../data/normalized-mock";

export interface DishState {
  ids: string[];
  entities: Record<string, Dish>;
}

const initialState: DishState = {
  ids: normalizedDishes.map(({ id }) => id),
  entities: normalizedDishes.reduce(
    (allEntities: Record<string, Dish>, currentEntity) => {
      allEntities[currentEntity.id] = currentEntity;
      return allEntities;
    },
    {}
  ),
};

export const dishSlice = createSlice({
  name: "dish",
  initialState,
  selectors: {
    getDishIds: (state: DishState) => state.ids,
    getDishById: (state, id: string) => state.entities[id],
    getDishes: (state) => state.entities,
  },
  reducers: {},
});

export const { getDishById, getDishIds, getDishes } = dishSlice.selectors;

export default dishSlice.reducer;
