import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = `http://localhost:8000`;

export const dataUsersApi = createApi({
  reducerPath: "dataUsersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // console.log('getState().user.token', getState().user.token)
      const token = getState().user.token;
      // console.log('token', token)
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["dataUsers", "dataAdmins", "dataUser"],
  endpoints: (builder) => ({
    // getAdminList: builder.query({
    //   query: (admin:false) => ({ url: 'admin' }),
    //   providesTags: ['dataAdmins'],
    // }),
    getUsersList: builder.query({
      query: (admin = false) => {
        const url = admin ? "admin/" : "admin/users";
        return { url };
      },
      providesTags: ["dataUsers"],
    }),

    delUserById: builder.mutation({
      query: (id) => ({
        url: `admin/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["dataUsers", "dataUser"],
    }),

    unblockUserById: builder.mutation({
      query: (id) => ({
        url: `admin/users/status/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["dataUsers", "dataUser"],
    }),

    getUserById: builder.query({
      query: (id) => ({ url: `admin/users/${id}` }),
      providesTags: ["dataUser"],
    }),
    createFopUser: builder.mutation({
      query: (body) => ({
        url: "/admin/create-fop",
        method: "POST",
        body,
      }),
      invalidatesTags: ["dataUsers"],
    }),
    createCompanyUser: builder.mutation({
      query: (body) => ({
        url: "/admin/create-company",
        method: "POST",
        body,
      }),
      invalidatesTags: ["dataUsers"],
    }),
    createEditorUser: builder.mutation({
      query: (body) => ({
        url: "/admin/create-editor",
        method: "POST",
        body,
      }),
      invalidatesTags: ["dataUsers"],
    }),
    updateEditorUser: builder.mutation({
      query: (id, data) => ({
        url: `/admin/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["dataUsers"],
    }),

    updateFopUser: builder.mutation({
      query: (id, data) => ({
        url: `admin/users/${id}`,
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ["dataUsers"],
    }),
    updateCompanyUser: builder.mutation({
      query: (id, data) => ({
        url: `admin/users/${id}`,
        method: "PATCH",
        body: data,
       
      }),
      invalidatesTags: ["dataUsers"],
    }),


    onQueryCompleted: (data) => {
      // Add logic here to close the modal
      // For example, dispatch an action to update the modal state in your store.
    },
    invalidatesTags: ["dataUsers"],
  }),
});

export const {
  // useGetAdminListQuery,
  useGetUsersListQuery,
  useDelUserByIdMutation,
  useUnblockUserByIdMutation,
  useGetUserByIdQuery,
  useCreateCompanyUserMutation,
  useCreateFopUserMutation,
  useCreateEditorUserMutation,
  useUpdateEditorUserMutation,
  useUpdateFopUserMutation,
  useUpdateCompanyUserMutation,
  
  
} = dataUsersApi;
