import { createApi } from '@reduxjs/toolkit/query/react';

import baseQueryWithReauth from './userAuthBaseQuery';

export const shopsUserApi = createApi({
  reducerPath: 'shopsUserApi',
  tagTypes: ['Shops'],
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getAllShopsUser: builder.query({
      query: (page = '', limit = '') => ({
        url: `/user/shops/all?${page && `page=${page}`} & ${
          limit && `limit=${limit}`
        }`
      }),
      providesTags: ['Shops']
    }),
    getShopByIdforUser: builder.query({
      query: (id) => ({ url: `/user/shops/${id}` }),
      providesTags: (_result, _err, id) => [{ type: 'Shops', id }]
    }),
    getShopCategoryByIdUser: builder.query({
      query: (id) => ({ url: `/user/shops/shopitem/${id}` }),

      providesTags: (_result, _err, id) => [{ type: 'ShopItem', id }]
    }),
    getSubShopCategoryByIdUser: builder.query({
      query: (id) => ({ url: `/user/shops/shopitem/subcategory/${id}` }),

      providesTags: (_result, _err, id) => [{ type: 'SubShopItem', id }]
    })
  })
});

export const {
  useGetAllShopsUserQuery,
  useGetShopByIdforUserQuery,
  useGetShopCategoryByIdUserQuery,
  useGetSubShopCategoryByIdUserQuery
} = shopsUserApi;
