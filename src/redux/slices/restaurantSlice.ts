import { createSlice } from "@reduxjs/toolkit";
import type { RestaurantNormalized } from "../../data/types";
import { normalizedRestaurants } from "../../data/normalized-mock";

export interface RestaurantState {
  ids: string[];
  entities: Record<string, RestaurantNormalized>;
}

const initialState: RestaurantState = {
  ids: normalizedRestaurants.map(({ id }) => id),
  entities: normalizedRestaurants.reduce(
    (allEntities: Record<string, RestaurantNormalized>, currentEntity) => {
      allEntities[currentEntity.id] = currentEntity;
      return allEntities;
    },
    {}
  ),
};

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {},
  selectors: {
    getRestaurantIds: (state: RestaurantState) => state.ids,
    getRestaurantById: (state, id: string) => state.entities[id],
  },
});

export default restaurantSlice.reducer;
export const { getRestaurantById, getRestaurantIds } =
  restaurantSlice.selectors;
