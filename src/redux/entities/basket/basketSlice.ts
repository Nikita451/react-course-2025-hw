import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectDishes } from "../dish/dishSlice";

export interface BasketState {
  ids: Record<string, number>;
}

export interface BasketInfo {
  id: string;
  name: string;
  count: number;
}

const initialState: BasketState = {
  ids: {},
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  selectors: {
    selectBasketIds: (state: BasketState) => state.ids,
    selectBasketCountById: (state: BasketState, id: string) => state.ids[id],
  },
  reducers: {
    addDish(state, action) {
      const { id } = action.payload;
      state.ids[id] = state.ids[id] ? state.ids[id] + 1 : 1;
    },
    removeDish(state, action) {
      const { id } = action.payload;
      if (!state.ids[id] || state.ids[id] === 1) {
        delete state.ids[id];
      } else {
        state.ids[id]--;
      }
    },
  },
});

export const { selectBasketIds, selectBasketCountById } = basketSlice.selectors;
export const { addDish, removeDish } = basketSlice.actions;

export const selectBasket = createSelector(
  selectBasketIds,
  selectDishes,
  (basketIds, dishes): BasketInfo[] => {
    return Object.entries(basketIds).map(([id, count]) => {
      return {
        id,
        count,
        name: dishes[id].name,
      };
    });
  }
);

export default basketSlice.reducer;
