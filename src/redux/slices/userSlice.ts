import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import type { User } from "../../data/types";
import type { RootState } from "../store";

export interface UserState {
  ids: string[];
  entities: Record<string, User>;
}

export const getUsers = createAsyncThunk(
  "/fetch/users-by-id",
  async () => {
    const response = await fetch(`http://localhost:3001/api/users`);
    const users = await response.json();

    return users;
  },
  {
    condition: (_, { getState }) => {
      const state: RootState = getState() as RootState;
      return !selectUserIds(state).length;
    },
  }
);

const initialState: UserState = {
  ids: [],
  entities: {},
};

const entityAdapter = createEntityAdapter();

export const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      entityAdapter.setAll(state, action.payload);
    });
  },
  selectors: {
    selectUserIds: (state: UserState) => state.ids,
    selectUserById: (state, id: string) => state.entities[id],
  },
  reducers: {},
});

export const { selectUserById, selectUserIds } = userSlice.selectors;

export default userSlice.reducer;
