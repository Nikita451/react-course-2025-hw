import { createSlice } from "@reduxjs/toolkit";
import type { Menu } from "../../data/types";
import { normalizedDishes } from "../../data/normalized-mock";

export interface MenuState {
  ids: string[];
  entities: Record<string, Menu>;
}

const initialState: MenuState = {
  ids: normalizedDishes.map(({ id }) => id),
  entities: normalizedDishes.reduce(
    (allEntities: Record<string, Menu>, currentEntity) => {
      allEntities[currentEntity.id] = currentEntity;
      return allEntities;
    },
    {}
  ),
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  selectors: {
    getMenuIds: (state: MenuState) => state.ids,
    getMenuById: (state, id: string) => state.entities[id],
  },
  reducers: {},
});

export const { getMenuById, getMenuIds } = menuSlice.selectors;

export default menuSlice.reducer;
