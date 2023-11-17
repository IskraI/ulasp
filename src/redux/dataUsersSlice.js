import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = `http://localhost:8000`;

export const dataUsersApi = createApi({
  reducerPath: 'dataUsersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        // console.log('getState().user.token', getState().user.token)
      const token = getState().user.token;
      // console.log('token', token)
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['dataUsers', 'dataAdmins'],
  endpoints: builder => ({
    // getAdminList: builder.query({
    //   query: (admin:false) => ({ url: 'admin' }),
    //   providesTags: ['dataAdmins'],
    // }),
    getUsersList: builder.query({
        query: (admin=false) => {
          const url = admin ? 'admin/' : 'admin/users';
          return { url };},
        providesTags: ['dataUsers'],
      }),
    
   delUserById: builder.mutation({
      query: (id) => ({
        url: `admin/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['dataUsers'], 
    }),

    
    getUserById:builder.query({
      query: (id) => ({ url: `admin/users/${id}` }),
      providesTags: ['dataUser'],
    }),
    createFopUser: builder.mutation({
      query: body => ({
        url: '/admin/create-fop',
        method: 'POST',
        body,      
      }),
      invalidatesTags: ['dataUsers'],
    }),
    createCompanyUser: builder.mutation({
      query: body => ({
        url: '/admin/create-company',
        method: 'POST',
        body,      
      }),
      onQueryCompleted: (data) => {
        // Add logic here to close the modal
        // For example, dispatch an action to update the modal state in your store.
      },
      invalidatesTags: ['dataUsers'],
    }),
    
  }),
});

export const {
  // useGetAdminListQuery,
  useGetUsersListQuery,
  useDelUserByIdMutation,
  useGetUserByIdQuery,
  useCreateCompanyUserMutation,
  useCreateFopUserMutation,
  
 


} = dataUsersApi;