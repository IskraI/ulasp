import { createApi } from '@reduxjs/toolkit/query/react';

import baseQueryWithReauth from './userAuthBaseQuery';

export const playlistsUserApi = createApi({
  reducerPath: 'playlistsUserApi',
  baseQuery: baseQueryWithReauth,

  tagTypes: [
    'Playlists',
    'PlaylistsForAdd',
    'PlaylistsAdd',
    'PlaylistsFavorite'
  ],

  endpoints: (builder) => ({
    createPlaylistForUser: builder.mutation({
      query: (body) => ({
        url: '/user/userPlaylist/create',
        method: 'POST',
        body,
        formData: true
      }),
      // invalidatesTags: ["Playlists", "PlaylistsForAdd"],
      invalidatesTags: ['PlaylistsForAdd']
    }),

    getPlaylistByIdForUser: builder.query({
      query: ({ playlistId: id, page = '', limit = '', sort = '' }) => ({
        url: `/user/playlist/${id}?${page && `page=${page}`} ${
          limit && `&limit=${limit}`
        }${sort && `&sort=${sort}`}`
      }),

      providesTags: (_result, _err, id) => [{ type: 'Playlists', id }]
    }),

    getCreatePlaylistByIdForUser: builder.query({
      query: ({ playlistId: id, page = '', limit = '', sort = '' }) => ({
        url: `/user/userPlaylist/${id}?${page && `page=${page}`} ${
          limit && `&limit=${limit}`
        }${sort && `&sort=${sort}`}`
      }),
      providesTags: ['Playlists']
    }),

    getCreatePlaylistsForUser: builder.query({
      query: ({ page = '', limit = '' }) => ({
        url: `/user/userPlaylist/all?${page && `page=${page}`}${
          limit && `&limit=${limit}`
        }`
      }),

      providesTags: ['Playlists', 'PlaylistsForAdd'] //добавил PlaylistsForAdd
    }),

    getLatestPlaylistsForUser: builder.query({
      query: (page = '', limit = '') => ({
        url: `/user/playlist/latest?${page && `page=${page}`} & ${
          limit && `limit=${limit}`
        }`
      }),

      providesTags: (_result, _err, id) => [{ type: 'Playlists', id }]
    }),

    deletePlaylistForUser: builder.mutation({
      query: (id) => ({
        url: `/user/userPlaylist/delete/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Playlists', 'PlaylistsForAdd']
    }),

    updatePlaylistById: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/user/userPlaylist/update/${id}`,
        method: 'PATCH',
        body: formData,
        formData: true
      }),
      invalidatesTags: ['Playlists', 'PlaylistsForAdd']
    }),

    favoritePlaylistForUser: builder.query({
      query: () => ({ url: `/user/playlist/favorites` }),

      providesTags: ['PlaylistsFavorite', 'PlaylistsForAdd']
    }),
    updateFavoriteStatusApi: builder.mutation({
      query: (playlistId) => ({
        url: `/user/playlist/favorites/${playlistId}`,
        method: 'PATCH'
      }),
      invalidatesTags: ['PlaylistsFavorite']
    }),

    updateFavoriteStatusPlaylistUser: builder.mutation({
      query: (playlistId) => ({
        url: `/user/userPlaylist/favorites/${playlistId}`,
        method: 'PATCH'
      }),
      invalidatesTags: ['PlaylistsFavorite']
    }),

    addPlaylistForUser: builder.query({
      query: () => ({
        url: `/user/playlist/add`
      }),

      providesTags: ['PlaylistsAdd']
    }),

    uploadTracksInPlaylist: builder.mutation({
      query: ({ playlistId, formData }) => ({
        url: `/user/tracks/upload/${playlistId}`,
        method: 'POST',
        body: formData,
        formData: true
      }),
      invalidatesTags: ['Playlists']
    }),

    updateAddStatusApi: builder.mutation({
      query: (playlistId) => ({
        url: `/user/playlist/add/${playlistId}`,
        method: 'PATCH'
      }),
      invalidatesTags: ['PlaylistsAdd']
    }),

    addTrackToPlaylistUser: builder.mutation({
      query: ({ playListId, tracksIdList }) => ({
        url: `/user/userPlaylist/addTracks`,
        method: 'PATCH',
        body: {
          id: playListId,
          tracksIdArray: tracksIdList
        }
      }),
      invalidatesTags: ['Playlists']
    }),

    removeTrackFromPlaylistUser: builder.mutation({
      query: ({ playListId, tracksIdList }) => ({
        url: `/user/userPlaylist/removeTracks`,
        method: 'PATCH',
        body: {
          id: playListId,
          tracksIdArray: tracksIdList
        }
      }),
      invalidatesTags: ['Playlists', 'PlaylistsForAdd']
    }),
    //получение плейлистов юзера в которых нет заданной песни
    getPlaylistCreatedUserWithoutTrackId: builder.query({
      query: (trackId, page = '', limit = '') => ({
        url: `/user/userPlaylist/nonTrack/${trackId}?${
          page && `page=${page}`
        } & ${limit && `limit=${limit}`}`
      }),
      providesTags: ['PlaylistsForAdd']
    }),
    addTrackByIdToPlaylistUser: builder.mutation({
      query: ({ id, trackId }) => ({
        url: `/user/userPlaylist/addTrack`,
        method: 'POST',
        body: {
          id: id,
          trackId: trackId
        }
      }),
      invalidatesTags: ['PlaylistsForAdd']
    })
  })
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
  useUpdateFavoriteStatusPlaylistUserMutation,
  useFavoritePlaylistForUserQuery,
  useAddPlaylistForUserQuery,
  useUpdateAddStatusApiMutation,
  useGetCreatePlaylistByIdForUserQuery,
  useUploadTracksInPlaylistMutation,
  useUpdatePlaylistByIdMutation,
  useAddTrackToPlaylistUserMutation,
  useRemoveTrackFromPlaylistUserMutation
} = playlistsUserApi;
