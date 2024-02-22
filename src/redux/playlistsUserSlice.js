import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants/constants";

export const playlistsUserApi = createApi({
  reducerPath: "playlistsUserApi",
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
  tagTypes: ["Playlists"],

  endpoints: (builder) => ({
    createPlaylistForUser: builder.mutation({
      query: (body) => ({
        url: "/user/playlist/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Playlists"],
    }),

    getPlaylistByIdForUser: builder.query({
      query: ({ playlistId: id, page = "", limit = "" }) => ({
        url: `/user/playlist/${id}?${page && `page=${page}`} ${
          limit && `&limit=${limit}`
        }`,
      }),

      providesTags: (_result, _err, id) => [{ type: "Playlists", id }],
    }),

    getLatestPlaylistsForUser: builder.query({
      query: (page = "", limit = "") => ({
        url: `/user/playlist/latest?${page && `page=${page}`} & ${
          limit && `limit=${limit}`
        }`,
      }),

      providesTags: (_result, _err, id) => [{ type: "Playlists", id }],
    }),

    deletePlaylistForUser: builder.mutation({
      query: (id) => ({
        url: `/editor/playlist/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Playlists"],
    }),

    favoritePlaylistForUser: builder.query({
      query: () => ({ url: `/user/playlist/favorites` }),

      providesTags: ["PlaylistsFavorite"],
    }),
    updateFavoriteStatusApi: builder.mutation({
      query: (playlistId) => ({
        url: `/user/playlist/favorites/${playlistId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["PlaylistsFavorite"],
    }),

    addPlaylistForUser: builder.query({
      query: () => ({ url: `/user/playlist/add` }),

      providesTags: ["PlaylistsAdd"],
    }),

    updateAddStatusApi: builder.mutation({
      query: (playlistId) => ({
        url: `/user/playlist/add/${playlistId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["PlaylistsAdd"],
    }),

    deleteTrackInPlaylist: builder.mutation({
      query: (trackId) => ({
        url: `/user/tracks/delete/${trackId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Playlists", "Tracks"],
    }),
  }),
});

export const {
  useGetLatestPlaylistsForUserQuery,
  useGetPlaylistByIdForUserQuery,
  useCreatePlaylistForUserMutation,
  useDeletePlaylistForUserMutation,
  useUpdateFavoriteStatusApiMutation,
  useFavoritePlaylistForUserQuery,
  useAddPlaylistForUserQuery,
  useUpdateAddStatusApiMutation,
  useDeleteTrackInPlaylistMutation,
} = playlistsUserApi;
