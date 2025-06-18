import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurant/restaurantSlice";
import { dishSlice } from "./entities/dish/dishSlice";
import { reviewSlice } from "./entities/review/reviewSlice";
import { userSlice } from "./entities/user/userSlice";
import { basketSlice } from "./entities/basket/basketSlice";
import { requestSlice } from "./entities/request/request";

export const store = configureStore({
  reducer: {
    [restaurantSlice.name]: restaurantSlice.reducer,
    [dishSlice.name]: dishSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [basketSlice.name]: basketSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
