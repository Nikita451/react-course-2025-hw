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
    selectUserIds: (state: UserState) => state.ids,
    selectUserById: (state, id: string) => state.entities[id],
  },
  reducers: {},
});

export const { selectUserById, selectUserIds } = userSlice.selectors;

export default userSlice.reducer;
