import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = `http://localhost:8000`;

export const signInClient = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }), 
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (credentials) => ({
        url: '/ulasp/signin',
        method: 'POST', 
        body: credentials, //  данные для входа (номер договора и идентификационный номер)
      }),
    }),
  }),
});

export const { useSignInMutation } = signInClient;