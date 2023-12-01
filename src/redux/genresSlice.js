import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants/constants";

export const genresApi = createApi({
  reducerPath: "genresApi",
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
  tagTypes: ["Genres"],

  endpoints: (builder) => ({
    getAllGenres: builder.query({
      query: () => ({
        url: "/editor/genres/all",
        provideTags: ["Genres"],
      }),
    }),
  }),
});

export const { useGetAllGenresQuery } = genresApi;