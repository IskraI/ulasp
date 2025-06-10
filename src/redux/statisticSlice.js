import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../constants/constants';

export const statisticApi = createApi({
  reducerPath: 'statisticApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getTracksCountAdmin: builder.query({
      query: () => ({
        url: '/admin/tracks/count'
      })
    }),

    getNewClientsCount: builder.query({
      query: () => ({
        url: '/admin/newclients/count'
      })
    }),
    getClientsCount: builder.query({
      query: () => ({
        url: '/admin/users/count'
      })
    }),
    getOnlineClientsCount: builder.query({
      query: () => ({
        url: '/admin/onlineclients/count'
      })
    }),
    getNewClientsByMonthCount: builder.query({
      query: () => ({
        url: '/admin/newclientsbymonth/count'
      })
    }),
    getFreeSpaceOnDisk: builder.query({
      query: () => ({
        url: '/editor/freeDiskSpace'
      })
    }),
    getUserListenCount: builder.query({
      query: () => ({
        url: '/admin/recalculate'
      })
    })
  })
});

export const {
  useGetNewClientsByMonthCountQuery,
  useGetOnlineClientsCountQuery,
  useGetNewClientsCountQuery,
  useGetClientsCountQuery,
  useGetTracksCountAdminQuery,
  useGetFreeSpaceOnDiskQuery,
  useLazyGetUserListenCountQuery
} = statisticApi;
