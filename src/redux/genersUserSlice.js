import { createApi } from '@reduxjs/toolkit/query/react';

import baseQueryWithReauth from './userAuthBaseQuery';

export const genresUserApi = createApi({
  reducerPath: 'genresUserApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Genres'],

  endpoints: (builder) => ({
    getGenreByIdforUser: builder.query({
      query: (id) => ({ url: `/user/genres/${id}` }),
      providesTags: (_result, _err, id) => [{ type: 'Genres', id }]
    }),
    getAllGenresForUser: builder.query({
      query: (page = '', limit = '') => ({
        url: `/user/genres/all?${page && `page=${page}`} & ${
          limit && `limit=${limit}`
        }`
      }),
      providesTags: (_result, _err, id) => [{ type: 'Genres', id }]
    })
  })
});

export const { useGetGenreByIdforUserQuery, useGetAllGenresForUserQuery } =
  genresUserApi;
