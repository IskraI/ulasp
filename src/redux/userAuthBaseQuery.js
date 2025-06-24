import { fetchBaseQuery } from '@reduxjs/toolkit/query';

import { setUser, resetUser } from './userSlice';

import { BASE_URL } from '../constants/constants';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().user.token;
    if (token) headers.set('authorization', `Bearer ${token}`);
    return headers;
  }
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 401) {
    const refreshToken = api.getState().user.refreshToken;
    const token = api.getState().user.token;
    const refreshResult = await baseQuery(
      {
        url: '/user/refresh',
        method: 'POST',
        body: { token, refreshToken }
      },
      api,
      extraOptions
    );

    console.log('refreshResult.data', refreshResult.data);

    if (refreshResult.data) {
      api.dispatch(setUser(refreshResult.data));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(resetUser());
    }
  }
  return result;
};

export default baseQueryWithReauth;

// baseQuery: fetchBaseQuery({
//   baseUrl: BASE_URL,
//   prepareHeaders: (headers, { getState }) => {
//     const token = getState().user.token;
//     if (token) {
//       headers.set('authorization', `Bearer ${token}`);
//     }
//     return headers;
//   }
// }),
