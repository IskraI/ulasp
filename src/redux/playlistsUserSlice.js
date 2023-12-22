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
      query: (id) => ({ url: `/user/playlist/${id}` }),

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
   updateFavoriteStatusApi: builder.mutation({
      query: ({ playlistId }) => ({
        url: `/user/playlist/favorites/${playlistId}`,
           method: "PATCH",
      
      }),
      invalidatesTags: ["Playlists"],
    }),
  }),
});

export const {
   useGetLatestPlaylistsForUserQuery,
  useGetPlaylistByIdForUserQuery,
  useCreatePlaylistForUserMutation,
    useDeletePlaylistForUserMutation,
   useUpdateFavoriteStatusApiMutation,
} = playlistsUserApi;
