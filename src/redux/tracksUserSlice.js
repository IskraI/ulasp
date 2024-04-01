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
  tagTypes: ["Tracks", "AddTrackByUsers", "TracksByUser"],

  endpoints: (builder) => ({
    getAllTracksforUser: builder.query({
      query: ({ page = "", limit = "", query = "" }) => ({
        url: `/user/tracks/latestTracks?${page && `page=${page}`} ${
          limit && `&limit=${limit}`
        }${`&query=${query}`}`,
      }),

      providesTags: (_result, _err, id) => [{ type: "Tracks", id }],
    }),

    getAllTracksForUsersPlaylist: builder.query({
      query: ({ page = "", limit = "", query = "", id }) => ({
        url: `/user/tracks/tracksForUserPlaylists?${page && `page=${page}`} ${
          limit && `&limit=${limit}`
        }${`&query=${query}`}${`&id=${id}`}`,
      }),
      keepUnusedDataFor: 0,
      providesTags: ["Tracks"],
    }),

    getTracksByGenreId: builder.query({
      query: ({ genreId, page = "", limit = "" }) => (
        console.log(genreId, page, limit),
        {
          url: `user/genre/${genreId}/tracks?${page && `page=${page}`} ${
            limit && `&limit=${limit}`
          }`,
        }
      ),
      // invalidatesTags: ["Tracks"],
      providesTags: (_result, _error, genreId) => [{ type: "Tracks", genreId }],
    }),
    deleteTrackFromAdd: builder.mutation({
      query: (id) => ({
        url: `/user/tracks/removeFromAdd/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["TracksByUser"],
    }),

    addTrackToAdd: builder.mutation({
      query: (id) => ({
        url: `/user/tracks/add/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["TracksByUser"],
    }),
    deleteTrack: builder.mutation({
      query: (id) => ({
        url: `/user/tracks/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tracks"],
    }),

    getAllAddTrackByUser: builder.query({
      query: ({ page = "", limit = "" }) => ({
        url: `user/tracks/add?${page && `page=${page}`} ${
          limit && `&limit=${limit}`
        }`,
      }),
      providesTags: ["TracksByUser"],
    }),

    updateListenCountTrackById: builder.mutation({
      query: (id) => ({
        url: `user/tracks/countlisten/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["ListenCountTrack"],
    }),
  }),
});

export const {
  useGetAllAddTrackByUserQuery,
  useAddTrackToAddMutation,
  useDeleteTrackFromAddMutation,
  useGetAllTracksforUserQuery,
  useGetAllTracksForUsersPlaylistQuery,
  useGetTracksByGenreIdQuery,
  useDeleteTrackMutation,
  useUpdateListenCountTrackByIdMutation,
} = tracksUserApi;
