import { createApi } from '@reduxjs/toolkit/query/react';

import baseQueryWithReauth from './userAuthBaseQuery';

import {
  resetUser,
  setUser,
  setAvatar,
  setCurrent,
  setUserisLoggedIn
} from './userSlice';

export const authClientApi = createApi({
  reducerPath: 'authClientApi',
  baseQuery: baseQueryWithReauth,

  tagTypes: ['authClient'],

  endpoints: (builder) => ({
    signInClient: builder.mutation({
      query: (credentials) =>
        // console.log(credentials),
        ({
          url: '/user/signin',
          method: 'POST',
          body: credentials //  данные для входа (номер договора и идентификационный номер)
        }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        dispatch(resetUser());
        dispatch(setUser((await queryFulfilled).data));
      },
      invalidatesTags: ['authClient']
    }),

    currentClient: builder.query({
      query: () => ({
        url: '/user/current'
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled, queryRejected }) {
        try {
          const response = await queryFulfilled;
          dispatch(setCurrent(response.data));
        } catch (error) {
          dispatch(setUserisLoggedIn()); // Устанавливаем isLoggedIn в false при ошибке
          // console.error("Ошибка при получении текущего пользователя:", error);
        }
      }
    }),
    updateClientAvatar: builder.mutation({
      query: (body) => ({
        url: '/user/avatars',
        method: 'PATCH',
        body,
        formData: true
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        dispatch(setAvatar((await queryFulfilled).data));
      },
      invalidatesTags: ['auth']
    }),

    logoutClient: builder.mutation({
      query: () => ({
        url: `/user/logout`,
        method: 'POST'
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(resetUser());
      },
      invalidatesTags: ['authClient']
    })
  })
});

export const {
  useSignInClientMutation,
  useCurrentClientQuery,
  useUpdateClientAvatarMutation,
  useLogoutClientMutation
} = authClientApi;
