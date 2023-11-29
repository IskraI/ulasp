import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants/constants";

export const playlistsApi = createApi({
  reducerPath: "playlistsApi",
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
        provideTags: ["Playlists"],
      }),
    }),
  }),
});

export const { useGetLatestPlaylistsQuery } = playlistsApi;
