import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants/constants";

export const genresApi = createApi({
  reducerPath: "genresApi",

  tagTypes: ["Genres"],
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
    getAllGenres: builder.query({
      query: (page = "", limit = "") => ({
        url: `/editor/genres/all?${page && `page=${page}`} & ${
          limit && `limit=${limit}`
        }`,
      }),
      providesTags: (_result, _err, id) => [{ type: "Genres", id }],
    }),
    getGenreById: builder.query({
      query: (id) => ({ url: `/editor/genres/${id}` }),
      providesTags: (_result, _err, id) => [{ type: "Genres", id }],
    }),
    getAllGenresForUser: builder.query({
      query: () => ({
        url: "/user/genres/all",
      }),

      provideTags: ["Genres"],
    }),
    createGenre: builder.mutation({
      query: (body) => ({
        url: "/editor/genres/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Genres"],
    }),

    createPlaylistInGenre: builder.mutation({
      query: ({ genreId, formData }) => ({
        url: `editor/genre/playlist/create/${genreId}`,
        method: "POST",
        body: formData,
        formData: true,
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
    updateGenreById: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/editor/genres/update/${id}`,
        method: "PATCH",
        body: formData,
        formData: true,
      }),
      invalidatesTags: ["Genres"],
    }),

    deletePlaylistInGenre: builder.mutation({
      query: (id) => ({
        url: `/editor/playlist/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Genres"],
    }),
    deletePlaylistInGenreOne: builder.mutation({
      query: (id) => ({
        url: `/editor/playlist/delete/${id}`,
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
  useUpdateGenreByIdMutation,
  useDeleteGenreMutation,
  useGetAllGenresForUserQuery,
  useCreatePlaylistInGenreMutation,
  useDeletePlaylistInGenreMutation,
} = genresApi;
