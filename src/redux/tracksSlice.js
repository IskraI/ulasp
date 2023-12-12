import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants/constants";

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
  tagTypes: ["Tracks"],

  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: (page = "", limit = "") => ({
        url: `/editor/tracks/latestTracks?${page && `page=${page}`} & ${
          limit && `limit=${limit}`
        }`,
      }),
      provideTags: ["Tracks"],
    }),
    getAllTracksforUser: builder.query({
      query: () => ({
        url: "/user/tracks/latestTracks",
        provideTags: ["Tracks"],
      }),
    }),
  }),
});

export const { useGetAllTracksQuery, useGetAllTracksforUserQuery } = tracksApi;
