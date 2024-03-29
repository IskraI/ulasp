import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  resetUser,
  setAvatar,
  setAdmin,
  setCurrent,
  setUserisLoggedIn,
} from "./userSlice";

import { BASE_URL } from "../constants/constants";

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
      query: ({ login, password }) => ({
        url: "/admin/signin",
        method: "POST",
        body: { login, password },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        dispatch(resetUser());
        dispatch(setAdmin((await queryFulfilled).data));
      },
      async onQueryError(arg, { dispatch, error, queryFulfilled }) {
        // allert;
        console.log("error", error);
      },
      invalidatesTags: ["auth"],
    }),

    currentUser: builder.query({
      query: () => ({
        url: "/admin/current",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled, queryRejected }) {
        try {
          const response = await queryFulfilled;
          dispatch(setCurrent(response.data));
        } catch (error) {
          dispatch(setUserisLoggedIn()); // Устанавливаем isLoggedIn в false при ошибке
          console.error("Ошибка при получении текущего пользователя:", error);
        }
      },
      // async onQueryStarted(arg, { dispatch, queryFulfilled }) {
      //   console.log("await queryFulfilled).data", (await queryFulfilled).data);
      //   dispatch(setCurrent((await queryFulfilled).data));
      // },
      async onQueryError(arg, { dispatch, error, queryFulfilled }) {
        console.log("error", error);
        dispatch(resetUser()); // Сбросить состояние до значения по умолчанию
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
    updateAdminAvatar: builder.mutation({
      query: (body) => ({
        url: "/admin/avatars",
        method: "PATCH",
        body,
        formData: true,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        dispatch(setAvatar((await queryFulfilled).data));
      },
      invalidatesTags: ["auth"],
    }),
  }),
});

export const {
  useSigninMutation,
  useCurrentUserQuery,
  useLogoutMutation,
  // useUpdateUserMutation,
  useUpdateAdminAvatarMutation,
} = authApi;
