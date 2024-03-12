import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants/constants";

export const playlistsApi = createApi({
  reducerPath: "playlistsApi",
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
    getLatestPlaylists: builder.query({
      query: (page = "", limit = "") => ({
        url: `/editor/playlist/latest?${page && `page=${page}`} & ${
          limit && `limit=${limit}`
        }`,
      }),

      providesTags: (_result, _err, id) => [{ type: "Playlists", id }],
    }),
    getPlaylistById: builder.query({
      query: ({ playlistId: id, page = "", limit = "", sort = "" }) => ({
        url: `/editor/playlist/${id}?${page && `page=${page}`}${
          limit && `&limit=${limit}`
        }${sort && `&sort=${sort}`}`,
      }),

      providesTags: (_result, _err, id) => [{ type: "Playlists", id }],
    }),
    createPlaylist: builder.mutation({
      query: (body) => ({
        url: "/editor/playlist/create",
        method: "POST",
        body,
        formData: true,
      }),
      invalidatesTags: ["Playlists"],
    }),

    deletePlaylist: builder.mutation({
      query: (id) => ({
        url: `/editor/playlist/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Playlists"],
    }),

    uploadTracksInPlaylist: builder.mutation({
      query: ({ playlistId, formData }) => ({
        url: `/editor/tracks/upload/${playlistId}`,
        method: "POST",
        body: formData,
        formData: true,
      }),
      invalidatesTags: ["Playlists"],
    }),
    deleteTrackInPlaylist: builder.mutation({
      query: ({ playListId, idTrack }) => ({
        url: `/editor/playlist/${playListId}/tracks/delete/${idTrack}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Playlists"],
    }),
    updatePlaylist: builder.mutation({
      query: ({ playlistId, body }) => ({
        url: `/editor/playlist/update/${playlistId}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Playlists"],
    }),
    updatePlaylistSort: builder.mutation({
      query: ({ playlistId, data }) => ({
        url: `/editor/playlist/sortupdate/${playlistId}`,
        method: "PATCH",
        body: {
          data,
        },
      }),
      invalidatesTags: ["Playlists"],
    }),
  }),
});

export const {
  useGetLatestPlaylistsQuery,
  useGetPlaylistByIdQuery,
  useCreatePlaylistMutation,
  useDeletePlaylistMutation,
  useUploadTracksInPlaylistMutation,
  useDeleteTrackInPlaylistMutation,
  useUpdatePlaylistMutation,
  useUpdatePlaylistSortMutation,
} = playlistsApi;
