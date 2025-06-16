import { createSlice, type Action } from "@reduxjs/toolkit";

export const IDLE = "idle";
export const PENDING = "pending";
export const FULFILLED = "fulfilled";
export const REJECTED = "rejected";
export type RequestStatus = "idle" | "pending" | "fulfilled" | "rejected";

const initialState: Record<string, RequestStatus> = {};

interface RequestAction extends Action {
  meta: {
    requestId: string;
  };
}

export const requestSlice = createSlice({
  name: "request",
  initialState,
  selectors: {
    selectRequestStatus: (state, requestId) => state[requestId] || IDLE,
    selectIsLoding: (state, requestId) => state[requestId] === PENDING,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher<RequestAction>(
        ({ type }) => type.endsWith(PENDING),
        (state, { meta }) => {
          state[meta.requestId] = PENDING;
        }
      )
      .addMatcher<RequestAction>(
        ({ type }) => type.endsWith(FULFILLED),
        (state, { meta }) => {
          state[meta.requestId] = FULFILLED;
        }
      )
      .addMatcher<RequestAction>(
        ({ type }) => type.endsWith(REJECTED),
        (state, { meta }) => {
          state[meta.requestId] = REJECTED;
        }
      );
  },
});

export const { selectRequestStatus, selectIsLoding } = requestSlice.selectors;
