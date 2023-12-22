import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants/constants";

export const genresUserApi = createApi({
  reducerPath: "genresUserApi",
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
      getGenreByIdforUser: builder.query({
      query: (id) => ({ url: `/user/genres/${id}` }),
      providesTags: (_result, _err, id) => [{ type: "Genres", id }],
    }),
    getAllGenresForUser: builder.query({
     query: (page = "", limit = "") => ({
        url: `/user/genres/all?${page && `page=${page}`} & ${
          limit && `limit=${limit}`
        }`,
      }),
      providesTags: (_result, _err, id) => [{ type: "Genres", id }],
    }),
  }),
});

export const {
  useGetGenreByIdforUserQuery,
  useGetAllGenresForUserQuery,
} = genresUserApi;
