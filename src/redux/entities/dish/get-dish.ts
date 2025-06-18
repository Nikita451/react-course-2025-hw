import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDishesByRestId = createAsyncThunk(
  "/fetch/dish-by-rest-id",
  async (id: string) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${id})`
    );
    const restaurant = await response.json();

    return restaurant;
  }
);

export const getDishById = createAsyncThunk(
  "/fetch/dish-by-id",
  async (id: string) => {
    const response = await fetch(`http://localhost:3001/api/dish/${id}`);
    const restaurant = await response.json();

    return restaurant;
  }
);
