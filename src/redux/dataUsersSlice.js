import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { resetUser, setUser, setAdmin, setCurrent } from "./userSlice";

import { BASE_URL } from "../constants/constants";

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
  tagTypes: ["dataUsers", "dataAdmins", "dataUser", "reportUser"],
  endpoints: (builder) => ({
    getUsersList: builder.query({
      query: (admin = false) => {
        const url = admin ? "admin/" : "admin/users";
        return { url };
      },
      providesTags: ["dataUsers"],
    }),

    delUserById: builder.mutation({
      query: ({ id, admin = false }) => ({
        url: admin ? `admin/${id}` : `admin/users/${id}`,
        method: "DELETE",
      }),
      // async onQueryError(arg, { dispatch, error, queryFulfilled }) {
      //   console.error("Query failed", error);
      //   dispatch(resetUser()); //?????? Сбросить состояние до значения по умолчанию
      // },
      invalidatesTags: ["dataUsers"],
    }),
    sendMailUserById: builder.mutation({
      query: (id) => ({
        url: `admin/users/${id}/accessemail`,
        method: "POST",
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
    editorLoginPasswordUpdate: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `admin/editors/login/${id}`,
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: ["dataUsers", "dataUser"],
    }),
    unblockEditorById: builder.mutation({
      query: (id) => ({
        url: `admin/editors/status/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["dataUsers", "dataUser"],
    }),
    accessEditorById: builder.mutation({
      query: (id) => ({
        url: `admin/editors/access/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["dataUsers", "dataUser"],
    }),
    accessUserUpdateById: builder.mutation({
      query: (id) => ({
        url: `admin/users/access/${id}`,
        method: "PATCH",
      }),

      invalidatesTags: ["dataUsers", "dataUser"],
    }),

    getAdminById: builder.query({
      query: (id) => ({ url: `admin/${id}` }),
      providesTags: ["dataUser"],
    }),
    getUserById: builder.query({
      query: (id) => ({ url: `admin/users/${id}` }),
      providesTags: ["dataUser"],
      // async onQueryError(arg, { dispatch, error, queryFulfilled }) {
      //   console.error("Query failed", error);
      //   dispatch(resetUser()); // Сбросить состояние до значения по умолчанию
      // },
    }),
    countListensByUserById: builder.mutation({
      query: (userData) => ({
        url: `admin/users/countlistens`,
        method: "POST",
        body: userData, // Здесь передается объект userData с данными из формы
      }),
      providesTags: ["reportUser"], // При успешном выполнении инвалидирует тег "reportUser"
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
      query: ({ id, ...body }) => ({
        url: `/admin/${id}`,
        method: "PATCH",
        body,
      }),

      invalidatesTags: ["dataUsers", "dataUser"],
    }),

    updateFopUser: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `admin/users/${id}`,
        method: "PATCH",
        body,
      }),

      invalidatesTags: ["dataUsers", "dataUser"],
    }),
    updateCompanyUser: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `admin/users/${id}`,
        method: "PATCH",
        body,
      }),

      invalidatesTags: ["dataUsers", "dataUser"],
    }),

    getUserByIdTrackCount: builder.query({
      query: (id) => ({ url: `admin/users/${id}/trackcount` }),
      providesTags: ["dataUser"],
    }),
    getUserByIdPlaylistCount: builder.query({
      query: (id) => ({ url: `admin/users/${id}/playlistcount` }),
      providesTags: ["dataUser"],
    }),
  }),
});

export const {
  useSendMailUserByIdMutation,
  useGetAdminByIdQuery,
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
  useAccessUserUpdateByIdMutation,
  useGetUserByIdTrackCountQuery,
  useGetUserByIdPlaylistCountQuery,
  useCountListensByUserByIdMutation,
  useUnblockEditorByIdMutation,
  useEditorLoginPasswordUpdateMutation,
} = dataUsersApi;
