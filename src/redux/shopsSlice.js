import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants/constants";

export const shopsApi = createApi({
  reducerPath: "shopsApi",
  tagTypes: ["Shops"],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllShops: builder.query({
      query: (page = "", limit = "") => ({
        url: `/editor/shops/all?${page && `page=${page}`} & ${
          limit && `limit=${limit}`
        }`,
      }),
      providesTags: ["Shops"],
    }),
    createShop: builder.mutation({
      query: (body) => ({
        url: "/editor/shops/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Shops"],
    }),
    deleteShop: builder.mutation({
      query: (id) => ({
        url: `/editor/shops/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Shops"],
    }),
  }),
});

export const { useGetAllShopsQuery, useCreateShopMutation, useDeleteShopMutation } = shopsApi;
