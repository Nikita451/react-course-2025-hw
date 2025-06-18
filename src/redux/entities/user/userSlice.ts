import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { User } from "../../../data/types";
import { getUsers } from "./get-user";

const entityAdapter = createEntityAdapter<User>();

export const userSlice = createSlice({
  name: "users",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      entityAdapter.setAll(state, action.payload);
    });
  },
  selectors: {
    selectUserIds: (state) => state.ids,
    selectUserById: (state, id: string) => state.entities[id],
  },
  reducers: {},
});

export const { selectUserById, selectUserIds } = userSlice.selectors;

export default userSlice.reducer;
