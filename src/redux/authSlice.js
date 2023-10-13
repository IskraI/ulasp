import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { setUserRole } from "./roleSlice";

const BASE_URL = `${process.env.REACT_APP_BASE_URL}/api`;

export const authApi = createApi({
  reducerPath: "authApi",
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
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: ({ email, password }) => ({
        url: "/auth/signin",
        method: "POST",
        body: { email, password },
      }),
      async onQueryFulfilled(data, { dispatch }) {
        const userRole = data.role;
        dispatch(setUserRole(userRole));
      },
    }),
    currentUser: builder.query({
      query: () => ({
        url: "/auth/current",
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `/auth/logout`,
        method: "POST",
      }),
    }),
    updateUser: builder.mutation({
      query: (body) => ({
        url: "/auth/user",
        method: "PATCH",
        body,
        formData: true,
      }),
    }),
  }),
});

export const {
  useSigninMutation,
  useSignupMutation,
  useCurrentUserQuery,
  useLogoutMutation,
  useUpdateUserMutation,
  useSubscribeMutation,
} = authApi;
