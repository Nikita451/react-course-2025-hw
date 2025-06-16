import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import type { Dish } from "../../data/types";

export interface DishState {
  ids: string[];
  entities: Record<string, Dish>;
}

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

export const getDishesById = createAsyncThunk(
  "/fetch/dish-by-id",
  async (id: string) => {
    const response = await fetch(`http://localhost:3001/api//dish/${id}`);
    const restaurant = await response.json();

    return restaurant;
  }
);

const initialState: DishState = {
  ids: [],
  entities: {},
};

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
  name: "dish",
  initialState,
  selectors: {
    selectDishIds: (state: DishState) => state.ids,
    selectDishById: (state, id: string) => state.entities[id],
    selectDishes: (state) => state.entities,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDishesByRestId.fulfilled, (state, action) => {
      entityAdapter.setAll(state, action.payload);
    });
    builder.addCase(getDishesById.fulfilled, (state, action) => {
      entityAdapter.setOne(state, action.payload);
    });
  },
});

export const { selectDishById, selectDishIds, selectDishes } =
  dishSlice.selectors;

export default dishSlice.reducer;
