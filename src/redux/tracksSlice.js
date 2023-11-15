import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = `http://localhost:8000`;

export const tracksApi = createApi({
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
  tagTypes: ["LatestTracks"],
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => ({
        url: "/editor/tracks/latestTracks",
        provideTags: ["LatestTracks"],
      }),
    }),
    // getTracksCount: builder.query({
    //   query: () => ({
    //     url: "/editor/tracks/count",
    //   }),
    // }),
  }),
});

export const { useGetAllTracksQuery } = tracksApi;
