import { useParams } from "react-router-dom";
import { useState } from "react";

import Playlists from "../../../components/UserMediaComponent/PlayLists/PlayListsShop";
import { formDataFunction } from "../../../helpers/helpers";

import {
 useGetSubShopCategoryByIdUserQuery
 } from "../../../redux/shopsUserSlice";

const PlaylistInShopSubCategoryPage = () => {
  const { shopSubCategoryId: idShopLibrary } = useParams();

    const valueMediaLibrary = "subCategoryShop";

  const {
    data: shopSubCategory,
    isFetching: isFetchingShopSubCategory,
    isError: isErrorShopSubCategory,
    error: errorShopSubCategory,
    isSuccess: isSuccessShopSubCategory,
  } = useGetSubShopCategoryByIdUserQuery(idShopLibrary);

 

  return (
    <>
      {isSuccessShopSubCategory && !isErrorShopSubCategory && (
        <Playlists
          title={`Плейлисти підкатегорії "${shopSubCategory.shopSubTypeName}"`}
          data={shopSubCategory.playList}
          isFetchingPlaylist={isFetchingShopSubCategory}
          showNavigationLink={false}
                    typeMediaLibrary={"subCategoryShop"}
          idTypeOfMediaLibrary={idShopLibrary}
          
        />
      )}
    </>
  );
};

export default PlaylistInShopSubCategoryPage;
