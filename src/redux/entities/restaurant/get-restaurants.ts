import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { selectRestaurantIds } from "./restaurantSlice";

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
