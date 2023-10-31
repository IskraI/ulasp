import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { resetUser, setUser, setAdmin, setCurrent } from "./userSlice";
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
        console.log("await queryFulfilled).data", (await queryFulfilled).data);
        dispatch(setCurrent((await queryFulfilled).data));
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: `/admin/logout`,
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(resetUser());
      },
      invalidatesTags: ["auth"],
    }),
    // updateUser: builder.mutation({
    //   query: (body) => ({
    //     url: "/admin/",
    //     method: "PATCH",
    //     body,
    //     formData: true,
    //   }),
    //   async onQueryStarted(arg, { dispatch, queryFulfilled }) {
    //     dispatch(setAdmin((await queryFulfilled).data));
    //   },
    //   invalidatesTags: ["auth"],
    // }),
    updateUserAvatar: builder.mutation({
      query: (body) => ({
        url: "/admin/avatars",
        method: "PATCH",
        body,
        formData: true,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        dispatch(setUser((await queryFulfilled).data));
      },
      invalidatesTags: ["auth"],
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
