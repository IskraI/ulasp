import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = `http://localhost:8000`;

export const dataUsersApi = createApi({
  reducerPath: 'dataUsersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        console.log('getState().user.token', getState().user.token)
      const token = getState().user.token;
      console.log('token', token)
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['dataUsers'],
  endpoints: builder => ({
    getUsersList: builder.query({
        query: () => ({ url: '/user' }),
        providesTags: ['dataUsers'],
      }),
    getAdminCabinet: builder.query({
      query: () => ({ url: '/user' }),
      providesTags: ['dataUsers'],
    }),
    
  }),
});

export const {
  useGetUsersListQuery,
  useGetAdminCabinetQuery,

} = dataUsersApi;