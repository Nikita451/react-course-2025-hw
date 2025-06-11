import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./slices/restaurantSlice";
import { dishSlice } from "./slices/dishSlice";
import { reviewSlice } from "./slices/reviewSlice";
import { userSlice } from "./slices/userSlice";
import { basketSlice } from "./slices/basketSlice";

export const store = configureStore({
  reducer: {
    [restaurantSlice.name]: restaurantSlice.reducer,
    [dishSlice.name]: dishSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [basketSlice.name]: basketSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
