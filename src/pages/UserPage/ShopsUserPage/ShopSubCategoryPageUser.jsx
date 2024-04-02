import { useState } from "react";
import { useParams } from "react-router-dom";

import ControlMediateca from "../../../components/UserMediaComponent/ControlMediatecaUser/ControlMediatecaUser";
import MediaListItemShop from "../../../components/UserMediaComponent/MediaList/MediaListShop";
import { Loader } from "../../../components/Loader/Loader";
import symbol from "../../../assets/symbol.svg";
import Playlists from "../../../components/UserMediaComponent/PlayLists/PlayListsShop";
import { formDataFunction } from "../../../helpers/helpers";

import {
  Error500,
  ErrorNotFound,
  NoData,
} from "../../../components/Errors/Errors";

import { useGetShopCategoryByIdUserQuery } from "../../../redux/shopsUserSlice";

import { ShopsList } from "./Shops.styled";

const ShopSubCategoryPage = () => {
  const valueMediaLibrary = "shopItem";

  const { shopItemId: idShopLibrary } = useParams();

  const {
    data: shopCategory,
    isFetching: isFetchingShopCategory,
    isError: isErrorShopCategory,
    error: errorShopCategory,
    isSuccess: isSuccessShopCategory,
  } = useGetShopCategoryByIdUserQuery(idShopLibrary);

  return (
    <>
      {isFetchingShopCategory && !isSuccessShopCategory && <Loader />}
      {errorShopCategory?.status === "500" && <Error500 />}
      {errorShopCategory && <ErrorNotFound />}
      {isSuccessShopCategory && !isErrorShopCategory && (
        <>
          <ControlMediateca title={shopCategory.shop.shopItemName} />

          {shopCategory.shop.shopChildSubType.length === 0 ? (
            <NoData text={"На данний час, ще не додано жодної підкатегорії."} />
          ) : (
            <ShopsList>
              {shopCategory.shop.shopChildSubType.map(
                ({ _id, shopSubTypeName, shopSubTypeAvatarURL }) => (
                  <MediaListItemShop
                    key={_id}
                    id={_id}
                    title={shopSubTypeName}
                    icon={shopSubTypeAvatarURL}
                    typeMediaLibrary={"subCategoryShop"}
                    fieldForUpdate={"shopSubTypeName"}
                    typeCover={"shop"}
                    // linkToPage={linkToPage}
                  />
                )
              )}
            </ShopsList>
          )}
          <Playlists
            title={`Плейлисти категорії "${shopCategory.shop.shopItemName}"`}
            data={shopCategory.allPlaylistsInShopCategory}
            isFetching={isFetchingShopCategory}
            showNavigationLink={false}
            typeMediaLibrary={valueMediaLibrary}
            idTypeOfMediaLibrary={idShopLibrary}
          />
          {/* parts Modal for create Shop SubType   */}
        </>
      )}
    </>
  );
};

export default ShopSubCategoryPage;
