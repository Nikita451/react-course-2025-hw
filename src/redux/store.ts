import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./slices/restaurantSlice";
import { menuSlice } from "./slices/menuSlice";
import { reviewSlice } from "./slices/reviewSlice";
import { userSlice } from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    [restaurantSlice.name]: restaurantSlice.reducer,
    [menuSlice.name]: menuSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
