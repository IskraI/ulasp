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
      query: ({ page = "", limit = "", sort = "", query = "" }) => ({
        url: `/editor/tracks/latestTracks?${page && `page=${page}`} ${
          limit && `&limit=${limit}`
        }${sort && `&sort=${sort}`}${`&query=${query}`}`,
      }),
      // provideTags: ["Tracks"],
      providesTags: (_result, _err, id) => [{ type: "Tracks", id }],
    }),
    uploadTrack: builder.mutation({
      query: (body) => ({
        url: "/editor/tracks/upload",
        method: "POST",
        body,
        formData: true,
      }),
      invalidatesTags: ["Tracks"],
    }),
    deleteTrack: builder.mutation({
      query: (id) => ({
        url: `/editor/tracks/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tracks"],
    }),
    updateTrack: builder.mutation({
      query: (id) => ({
        url: `/editor/tracks/updateTrackCover/`,
        method: "PATCH",
        body: {
          id,
        },
      }),
      invalidatesTags: ["Tracks"],
    }),
  }),
});

export const {
  usePrefetch,
  useGetAllTracksQuery,
  useUploadTrackMutation,
  useDeleteTrackMutation,
  useUpdateTrackMutation,
} = tracksApi;
