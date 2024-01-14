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

    getNewClientsCount: builder.query({
      query: () => ({
        url: "/admin/newclients/count",
      }),
    }),
    getClientsCount: builder.query({
      query: () => ({
        url: "/admin/clients/count",
      }),
    }),
    getOnlineClientsCount: builder.query({
      query: () => ({
        url: "/admin/onlineclients/count",
      }),
    }),
    getNewClientsByMonthCount: builder.query({
      query: () => ({
        url: "/admin/newclientsbymonth/count",
      }),
    }),
  }),
});

export const {
  useGetNewClientsByMonthCountQuery,
  useGetOnlineClientsCountQuery,
  useGetPlaylistsCountQuery,
  useGetTracksCountQuery,
  useGetNewClientsCountQuery,
  useGetClientsCountQuery,
} = statisticApi;
