import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants/constants";

export const shopsUserApi = createApi({
  reducerPath: "shopsUserApi",
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
    getAllShopsUser: builder.query({
      query: (page = "", limit = "") => ({
        url: `/user/shops/all?${page && `page=${page}`} & ${
          limit && `limit=${limit}`
        }`,
      }),
      providesTags: ["Shops"],
    }),
      }),
});

export const { useGetAllShopsUserQuery } = shopsUserApi;
