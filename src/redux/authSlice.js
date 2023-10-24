import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { resetUser, setUser, setAdmin } from "./userSlice";
// import { setUserRole } from "./roleSlice";

const BASE_URL = `http://localhost:8000`;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      console.log("headers", headers);
      return headers;
    },
  }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: ({ login, password }) => ({
        url: "/admin/signin",
        method: "POST",
        body: { login, password },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        dispatch(setAdmin((await queryFulfilled).data));
      },
      invalidatesTags: ["auth"],
    }),
    currentUser: builder.query({
      query: () => ({
        url: "/admin/current",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        dispatch(setAdmin((await queryFulfilled).data));
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: `/admin/logout`,
        method: "POST",
      }),
    }),
    updateUser: builder.mutation({
      query: (body) => ({
        url: "/admin/",
        method: "PATCH",
        body,
        formData: true,
      }),
    }),
    updateUserAvatar: builder.mutation({
  query: (formData) => ({
    url: "/admin/update-avatar",
    method: "POST",
    body: formData,
  }),
}),
  }),
});

export const {
  useSigninMutation,
  useCurrentUserQuery,
  useLogoutMutation,
  useUpdateUserMutation,
  useUpdateUserAvatarMutation,
} = authApi;
