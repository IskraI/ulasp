import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = `http://localhost:8000`;

export const statisticApi = createApi({
  reducerPath: "statisticApi",
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
    getPlaylistsCount: builder.query({
      query: () => ({
        url: "/editor/playlist/count",
      }),
    }),
    getTracksCount: builder.query({
      query: () => ({
        url: "/editor/tracks/count",
      }),
    }),
  }),
});

export const { useGetPlaylistsCountQuery, useGetTracksCountQuery } = statisticApi;
