import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  type Dish,
  type RestaurantNormalized,
  type User,
  type ReviewNormalized,
} from "../../data/types";

export interface ReviewAction {
  restaurantId: string;
  review: ReviewNormalized;
}

const REVIEW_TAG_NAME = "Review";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: [REVIEW_TAG_NAME],
  endpoints: (builder) => ({
    getRestaurants: builder.query<RestaurantNormalized[], void>({
      query: () => "/restaurants",
    }),
    getRestaurantById: builder.query<RestaurantNormalized, string>({
      query: (id: string) => `/restaurant/${id}`,
    }),
    getDishesByRestId: builder.query<Dish[], string>({
      query: (id: string) => `/dishes?restaurantId=${id})`,
    }),
    getDishById: builder.query<Dish, string>({
      query: (id: string) => `/dish/${id}`,
    }),
    getReviewsByRestId: builder.query<ReviewNormalized[], string>({
      query: (id: string) => `/reviews?restaurantId=${id})`,
      providesTags: [{ type: REVIEW_TAG_NAME, id: "all" }],
    }),
    getUsers: builder.query<User[], void>({ query: () => "/users" }),
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => {
        return {
          url: `/review/${restaurantId}`,
          method: "POST",
          body: review,
        };
      },
      invalidatesTags: [{ type: REVIEW_TAG_NAME, id: "all" }],
    }),
    updateReview: builder.mutation({
      query: ({ review }) => {
        return {
          url: `/review/${review.id}`,
          method: "PATCH",
          body: review,
        };
      },
      invalidatesTags: [{ type: REVIEW_TAG_NAME, id: "all" }],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useGetDishesByRestIdQuery,
  useGetDishByIdQuery,
  useGetReviewsByRestIdQuery,
  useGetUsersQuery,
  useAddReviewMutation,
  useUpdateReviewMutation,
} = api;
