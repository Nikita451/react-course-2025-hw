import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import type { RestaurantNormalized } from "../../data/types";
import type { RootState } from "../store";

export const getRestaurantById = createAsyncThunk(
  "/fetch/restaurant-by-id",
  async (id: string) => {
    const response = await fetch(`http://localhost:3001/api/restaurant/${id}`);
    const restaurant = await response.json();

    return restaurant;
  }
);

export const getRestaurants = createAsyncThunk(
  "/fetch/restaurants",
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/restaurants/");
    const restaurants = await response.json();

    if (!restaurants?.length) {
      return rejectWithValue("nodata");
    }

    return restaurants;
  },
  {
    condition: (_, { getState }) => {
      const state: RootState = getState() as RootState;
      return !selectRestaurantIds(state).length;
    },
  }
);

export interface RestaurantState {
  ids: string[];
  entities: Record<string, RestaurantNormalized>;
}

const initialState: RestaurantState = {
  ids: [],
  entities: {},
};

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
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
    selectRestaurantIds: (state: RestaurantState) => state.ids,
    selectRestaurantById: (state, id: string) => state.entities[id],
  },
});

export default restaurantSlice.reducer;
export const { selectRestaurantById, selectRestaurantIds } =
  restaurantSlice.selectors;
