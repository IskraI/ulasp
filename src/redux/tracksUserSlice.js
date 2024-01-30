import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants/constants";



export const tracksUserApi = createApi({
  reducerPath: "tracksUserApi",
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
  tagTypes: ["Tracks"],

  endpoints: (builder) => ({
   
    getAllTracksforUser: builder.query({
       query: (page = "", limit = "") => ({
        url: `/user/tracks/latestTracks?${page && `page=${page}`} & ${
          limit && `limit=${limit}`
        }`,
      }),
     
      providesTags: (_result, _err, id) => [{ type: "Tracks", id },
        { type: "Playlists", id },],
    }),

     getTracksByGenreId: builder.query({
      query: (genreId) => ({
        url: `user/genre/${genreId}/tracks`,
      }),
      providesTags: (_result, _error, genreId) => [{ type: "Tracks", genreId }],
     }),
     
      deleteTrack: builder.mutation({
      query: (id) => ({
        url: `/user/tracks/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tracks"],
    }),
    
  }),
});

export const {  useGetAllTracksforUserQuery, useGetTracksByGenreIdQuery, useDeleteTrackMutation } = tracksUserApi;
