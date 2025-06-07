import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../../data/types";
import { normalizedUsers } from "../../data/normalized-mock";

export interface UserState {
  ids: string[];
  entities: Record<string, User>;
}

const initialState: UserState = {
  ids: normalizedUsers.map(({ id }) => id),
  entities: normalizedUsers.reduce(
    (allEntities: Record<string, User>, currentEntity) => {
      allEntities[currentEntity.id] = currentEntity;
      return allEntities;
    },
    {}
  ),
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  selectors: {
    getUserIds: (state: UserState) => state.ids,
    getUserById: (state, id: string) => state.entities[id],
  },
  reducers: {},
});

export const { getUserById, getUserIds } = userSlice.selectors;

export default userSlice.reducer;
