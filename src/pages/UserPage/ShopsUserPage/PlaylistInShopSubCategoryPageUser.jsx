import { useParams } from "react-router-dom";

import LatestPlaylists from "../../../components/UserMediaComponent/PlayLists/PlayLists";

import { useGetSubShopCategoryByIdUserQuery } from "../../../redux/shopsUserSlice";

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
        <LatestPlaylists
          title={`Плейлисти підкатегорії "${shopSubCategory.shopSubTypeName}"`}
          data={shopSubCategory.playList}
          isFetchingPlaylist={isFetchingShopSubCategory}
        />
      )}
    </>
  );
};

export default PlaylistInShopSubCategoryPage;
