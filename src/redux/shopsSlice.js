import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants/constants";

export const shopsApi = createApi({
  reducerPath: "shopsApi",

  tagTypes: ["Shops", "ShopItem", "SubShopItem"],
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
  endpoints: (builder) => ({
    getAllShops: builder.query({
      query: (page = "", limit = "") => ({
        url: `/editor/shops/all?${page && `page=${page}`} & ${
          limit && `limit=${limit}`
        }`,
      }),
      providesTags: ["Shops"],
    }),
    getShopById: builder.query({
      query: (id) => ({ url: `/editor/shops/${id}` }),

      providesTags: (_result, _err, id) => [{ type: "Shops", id }],
    }),
    createShop: builder.mutation({
      query: (body) => ({
        url: "/editor/shops/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Shops"],
    }),
    updateShopById: builder.mutation({
      query: ({ idMediaItem, formData }) => ({
        url: `/editor/shops/update/${idMediaItem}`,
        method: "PATCH",
        body: formData,
        formData: true,
      }),
      invalidatesTags: ["Shops"],
    }),

    deleteShop: builder.mutation({
      query: (id) => ({
        url: `/editor/shops/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Shops"],
    }),

    getShopCategoryById: builder.query({
      query: (id) => ({ url: `/editor/shops/shopitem/${id}` }),

      providesTags: (_result, _err, id) => [{ type: "ShopItem", id }],
    }),
    createShopCategory: builder.mutation({
      query: ({ idShopLibrary, data }) => ({
        url: `/editor/shop/shopitem/create/${idShopLibrary}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Shops", "ShopItem"],
    }),
    updateShopCategoryById: builder.mutation({
      query: ({ idMediaItem, formData }) => ({
        url: `/editor/shops/shopitem/update/${idMediaItem}`,
        method: "PATCH",
        body: formData,
        formData: true,
      }),
      invalidatesTags: ["Shops", "ShopItem"],
    }),
    deleteShopCategory: builder.mutation({
      query: (id) => ({
        url: `/editor/shop/shopitem/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Shops", "ShopItem"],
    }),
    createShopSubCategory: builder.mutation({
      query: ({ idShopLibrary, data }) => ({
        url: `/editor/shop/shopitem/subcategory/create/${idShopLibrary}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ShopItem"],
    }),
    getSubShopCategoryById: builder.query({
      query: (id) => ({ url: `/editor/shops/shopitem/subcategory/${id}` }),

      providesTags: (_result, _err, id) => [{ type: "SubShopItem", id }],
    }),
    updateShopSubCategoryById: builder.mutation({
      query: ({ idMediaItem, formData }) => ({
        url: `/editor/shops/shopitem/subcategory/update/${idMediaItem}`,
        method: "PATCH",
        body: formData,
        formData: true,
      }),
      invalidatesTags: ["SubShopItem", "ShopItem"],
    }),
    deleteShopSubCategory: builder.mutation({
      query: (id) => ({
        url: `/editor/shop/shopitem/subcategory/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ShopItem", "SubShopItem"],
    }),
    createPlayListInShopLibrary: builder.mutation({
      query: ({ idShopLibrary, formData }) => (
        console.log(formData),
        {
          url: `editor/shoplibrary/playlist/create/${idShopLibrary}`,
          method: "POST",
          body: formData,
          formData: true,
        }
      ),
      invalidatesTags: ["Shops", "ShopItem", "SubShopItem"],
    }),
    deletePlaylistInShop: builder.mutation({
      query: (id) => ({
        url: `/editor/playlist/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["SubShopItem", "ShopItem"],
    }),
    deletePlaylistInShopSubCategory: builder.mutation({
      query: ({ idTypeOfMediaLibrary, idPlaylist }) => ({
        url: `/editor/shopsubcategory/${idTypeOfMediaLibrary}/delete/${idPlaylist}`,
        method: "DELETE",
      }),
      invalidatesTags: ["SubShopItem", "ShopItem"],
    }),
    deletePlaylistInShopItem: builder.mutation({
      query: ({ idTypeOfMediaLibrary, idPlaylist }) => ({
        url: `/editor/shopitem/${idTypeOfMediaLibrary}/delete/${idPlaylist}`,
        method: "DELETE",
      }),
      invalidatesTags: ["SubShopItem", "ShopItem"],
    }),
  }),
});

export const {
  useGetAllShopsQuery,
  useGetShopByIdQuery,
  useCreateShopMutation,
  useUpdateShopByIdMutation,
  useDeleteShopMutation,
  useGetShopCategoryByIdQuery,
  useCreateShopCategoryMutation,
  useUpdateShopCategoryByIdMutation,
  useDeleteShopCategoryMutation,
  useCreateShopSubCategoryMutation,
  useGetSubShopCategoryByIdQuery,
  useUpdateShopSubCategoryByIdMutation,
  useDeleteShopSubCategoryMutation,
  useCreatePlayListInShopLibraryMutation,
  useDeletePlaylistInShopMutation,
  useDeletePlaylistInShopSubCategoryMutation,
  useDeletePlaylistInShopItemMutation,
} = shopsApi;
