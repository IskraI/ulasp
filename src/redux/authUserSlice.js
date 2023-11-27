import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { resetUser, setUser, setAdmin } from "./userSlice";

const BASE_URL = `http://localhost:8000`;

export const signInClient = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (credentials ) => (
        console.log(credentials),
        {
          url: "/user/signin",
          method: "POST",
          body: credentials, //  данные для входа (номер договора и идентификационный номер)
        }
      ),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
       console.log('(await queryFulfilled).data', (await queryFulfilled).data)

        dispatch(setUser((await queryFulfilled).data));
      },
      invalidatesTags: ["auth"],
    }),
  }),
});

export const { useSignInMutation } = signInClient;
