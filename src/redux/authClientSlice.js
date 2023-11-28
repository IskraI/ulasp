import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { resetUser, setUser, setCurrent } from "./userSlice";

const BASE_URL = `http://localhost:8000`;

export const authClientApi = createApi({
  reducerPath: "authClientApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      // console.log("headers", headers);
      return headers;
    },
  }),
  tagTypes: ["authClient"],
  // signinUser: builder.mutation({
  //   query: ({ contractNumber, password }) => ({
  //     url: "/user/signin",
  //     method: "POST",
  //     body: { contractNumber, password },
  //   }),
  //   async onQueryStarted(arg, { dispatch, queryFulfilled }) {
  //     dispatch(setUser((await queryFulfilled).data));
  //   },
  //   invalidatesTags: ["auth"],
  // }),

  endpoints: (builder) => ({
    signInClient: builder.mutation({
      query: (credentials) => (
        console.log(credentials),
        {
          url: "/user/signin",
          method: "POST",
          body: credentials, //  данные для входа (номер договора и идентификационный номер)
        }
      ),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        dispatch(setUser((await queryFulfilled).data));
      },
      invalidatesTags: ["authClient"],
    }),

    currentClient: builder.query({
      query: () => ({
        url: "/user/current",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        dispatch(setCurrent((await queryFulfilled).data));
      },
    }),

    logoutClient: builder.mutation({
      query: () => ({
        url: `/user/logout`,
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(resetUser());
      },
      invalidatesTags: ["authClient"],
    }),
  }),
});

export const {
  useSignInClientMutation,
  useCurrentClientQuery,
  useLogoutClientMutation,
} = authClientApi;
