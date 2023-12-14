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
    getLatestPlaylists: builder.query({
      query: () => ({
        url: "/editor/playlist/latest",
      }),
      providesTags: ["Playlists"],
    }),
    getPlaylistById: builder.query({
      query: (id) => ({ url: `/editor/playlist/${id}` }),
      providesTags: ["Playlists"],
    }),
    createPlaylist: builder.mutation({
      query: (body) => ({
        url: "/editor/playlist/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Playlists"],
    }),
   
    
    getLatestPlaylistsForUser: builder.query({
      query: () => ({
        url: "/user/playlist/latest",
      }),
      provideTags: ["Playlists"],
    }),

//    updateFavoriteStatusApi: builder.mutation({
//       query: ({ id, isFavorite }) => ({
//         url: `/user/playlist/toggle-favorite/${id}`,
//            method: "PATCH",
//         body: { isFavorite },
//       }),
//       invalidatesTags: ["Playlists"],
//     }),
  }),
});

export const {
  useGetLatestPlaylistsQuery,
  useGetLatestPlaylistsForUserQuery,
  useGetPlaylistByIdQuery,
    useCreatePlaylistMutation,
   useUpdateFavoriteStatusApiMutation,
} = playlistsUserApi;
