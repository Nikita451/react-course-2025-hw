import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { selectUserIds } from "./userSlice";

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
