import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants/constants";



export const tracksUserApi = createApi({
  reducerPath: "tracksApi",
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
    getAllTracks: builder.query({
      query: () => ({
        url: "/editor/tracks/latestTracks",
        provideTags: ["Tracks"],
      }),
    }),
    getAllTracksforUser: builder.query({
      query: () => ({
        url: "/user/tracks/latestTracks",
        provideTags: ["Tracks"],
      }),
    }),
    // getTracksCount: builder.query({
    //   query: () => ({
    //     url: "/editor/tracks/count",
    //   }),
    // }),
  }),
});

export const { useGetAllTracksQuery, useGetAllTracksforUserQuery} = tracksUserApi;
