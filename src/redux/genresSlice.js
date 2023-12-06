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
      query: () => "/editor/genres/all",
      providesTags: ["Genres"],
    }),
    getGenreById: builder.query({
      query: (id) => ({ url: `/editor/genres/${id}` }),
      providesTags: ["Genres"],
    }),
     getAllGenresForUser: builder.query({
      query: () => ({
        url: "/user/genres/all",
        provideTags: ["Genres"],
      }),
    }),
    createGenre: builder.mutation({
      query: (body) => ({
        url: "/editor/genres/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Genres"],
    }),

    deleteGenre: builder.mutation({
      query: (id) => ({
        url: `/editor/genres/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Genres"],
    }),
  }),
});


export const {
  useGetAllGenresQuery,
  useGetGenreByIdQuery,
  useCreateGenreMutation,
  useDeleteGenreMutation,
  useGetAllGenresForUserQuery
} = genresApi;


