import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import type { User } from "../../../data/types";
import { getUsers } from "./get-user";
import { api } from "../../api";

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

export const selectUsersResult = api.endpoints.getUsers.select();

export const selectUsersById = createSelector(
  selectUsersResult,
  ({ data: users }): Record<string, User> => {
    if (!users?.length) {
      return {};
    }
    return users.reduce<Record<string, User>>((usersById, user) => {
      usersById[user.id] = user;
      return usersById;
    }, {});
  }
);

export const { selectUserById, selectUserIds } = userSlice.selectors;

export default userSlice.reducer;
