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
  tagTypes: [
    "Playlists",
    "PlaylistsForAdd",
    "PlaylistsAdd",
    "PlaylistsUser",
    "PlaylistsFavorite",
  ],

  endpoints: (builder) => ({
    createPlaylistForUser: builder.mutation({
      query: (body) => ({
        url: "/user/userPlaylist/create",
        method: "POST",
        body,
        formData: true,
      }),
      invalidatesTags: ["Playlists", "PlaylistsForAdd"],
    }),

    getPlaylistByIdForUser: builder.query({
      query: ({ playlistId: id, page = "", limit = "", sort = "" }) => ({
        url: `/user/playlist/${id}?${page && `page=${page}`} ${
          limit && `&limit=${limit}`
        }${sort && `&sort=${sort}`}`,
      }),

      providesTags: (_result, _err, id) => [{ type: "Playlists", id }],
    }),

    getCreatePlaylistByIdForUser: builder.query({
      query: ({ playlistId: id, page = "", limit = "", sort = "" }) => ({
        url: `/user/userPlaylist/${id}?${page && `page=${page}`} ${
          limit && `&limit=${limit}`
        }${sort && `&sort=${sort}`}`,
      }),
      providesTags: ["PlaylistsUser"],
    }),

    getCreatePlaylistsForUser: builder.query({
      query: (page = "", limit = "") => ({
        url: `/user/userPlaylist/all?${page && `page=${page}`} & ${
          limit && `limit=${limit}`
        }`,
      }),

      providesTags: (_result, _err, id) => [{ type: "PlaylistsUser", id }],
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
        url: `/user/userPlaylist/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["PlaylistsUser", "PlaylistsForAdd"],
    }),

    updatePlaylistById: builder.mutation({
      query: ({ id, formData }) => (
        console.log(formData.getAll("playListName")),
        {
          url: `/user/userPlaylist/update/${id}`,
          method: "PATCH",
          body: formData,
          formData: true,
        }
      ),
      invalidatesTags: ["PlaylistsUser", "PlaylistsForAdd"],
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

    updateCabinetPlaylistStatusApi: builder.mutation({
      query: (playlistId) => ({
        url: `/user/userPlaylist/favorites/${playlistId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["PlaylistsFavorite"],
    }),

    addPlaylistForUser: builder.query({
      query: () => ({ url: `/user/playlist/add` }),

      providesTags: ["PlaylistsAdd"],
    }),

    //    addPlaylistForUser: builder.query({
    //       query: (page = "", limit = "") => ({ url: `/user/playlist/add?${page && `page=${page}`} & ${
    //           limit && `limit=${limit}`
    //         }`, }),

    //     //  providesTags: ["PlaylistsAdd"],
    //        providesTags: (_result, _err, id) => [{ type: "PlaylistsAdd", id }],
    //    }),
    uploadTracksInPlaylist: builder.mutation({
      query: ({ playlistId, formData }) => ({
        url: `/user/tracks/upload/${playlistId}`,
        method: "POST",
        body: formData,
        formData: true,
      }),
      invalidatesTags: ["Playlists", "PlaylistsUser"],
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
      invalidatesTags: ["Playlists"],
    }),
    updatePlaylistSort: builder.mutation({
      query: ({ playlistId, data }) => ({
        url: `/user/playlist/sortupdate/${playlistId}`,
        method: "PATCH",
        body: {
          data,
        },
      }),
      invalidatesTags: ["Playlists"],
    }),

    addTrackToPlaylistUser: builder.mutation({
      query: ({ playListId, tracksIdList }) => ({
        url: `/user/userPlaylist/addTracks`,
        method: "PATCH",
        body: {
          id: playListId,
          tracksIdArray: tracksIdList,
        },
      }),
      invalidatesTags: ["PlaylistsUser"],
    }),

    removeTrackFromPlaylistUser: builder.mutation({
      query: ({ playListId, tracksIdList }) => ({
        url: `/user/userPlaylist/removeTracks`,
        method: "PATCH",
        body: {
          id: playListId,
          tracksIdArray: tracksIdList,
        },
      }),
      invalidatesTags: ["PlaylistsUser"],
    }),
    //получение плейлистов юзера в которых нет заданной песни
    getPlaylistCreatedUserWithoutTrackId: builder.query({
      query: (trackId, page = "", limit = "") => ({
        url: `/user/userPlaylist/nonTrack/${trackId}?${
          page && `page=${page}`
        } & ${limit && `limit=${limit}`}`,
      }),
      providesTags: ["PlaylistsForAdd"],
    }),
    addTrackByIdToPlaylistUser: builder.mutation({
      query: ({ id, trackId }) => ({
        url: `/user/userPlaylist/addTrack`,
        method: "POST",
        body: {
          id: id,
          trackId: trackId,
        },
      }),
      invalidatesTags: ["PlaylistsUser"],
    }),
  }),
});

export const {
  useAddTrackByIdToPlaylistUserMutation,
  useGetPlaylistCreatedUserWithoutTrackIdQuery,
  useGetLatestPlaylistsForUserQuery,
  useGetPlaylistByIdForUserQuery,
  useCreatePlaylistForUserMutation,
  useGetCreatePlaylistsForUserQuery,
  useDeletePlaylistForUserMutation,
  useUpdateFavoriteStatusApiMutation,
  useUpdateCabinetPlaylistStatusApiMutation,
  useFavoritePlaylistForUserQuery,
  useAddPlaylistForUserQuery,
  useUpdateAddStatusApiMutation,
  useDeleteTrackInPlaylistMutation,
  useGetCreatePlaylistByIdForUserQuery,
  useUploadTracksInPlaylistMutation,
  useUpdatePlaylistSortMutation,
  useUpdatePlaylistByIdMutation,
  useAddTrackToPlaylistUserMutation,
  useRemoveTrackFromPlaylistUserMutation,
} = playlistsUserApi;
