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
      query: () => "/editor/shops/all",
      providesTags: ["Shops"],
    }),
  }),
});

export const { useGetAllShopsQuery } = shopsApi;
