import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// import { setUserRole } from "./roleSlice";


const BASE_URL = `http://localhost:8000`;


export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      console.log("зашли на запрос", headers);
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
      async onQueryFulfilled(data) {
        //   const userRole = data.role;
        //   dispatch(setUserRole(userRole));
        console.log("data", data);
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
  useCurrentUserQuery,
  useLogoutMutation,
  useUpdateUserMutation,
} = authApi;
export const authReducer = authApi.reducer;
