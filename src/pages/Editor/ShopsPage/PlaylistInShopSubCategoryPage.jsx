import { useParams } from "react-router-dom";
import { useState } from "react";

import BackButton from "../../../components/EditorComponents/BackButton/BackButton";
import Playlists from "../../../components/EditorComponents/PlayLists/PlayListsShop";
import { formDataFunction } from "../../../helpers/helpers";

import {
  useGetSubShopCategoryByIdQuery,
  useCreatePlayListInShopLibraryMutation,
} from "../../../redux/shopsSlice";

const PlaylistInShopSubCategoryPage = () => {
  const { shopSubCategoryId: idShopLibrary } = useParams();

  const [selectedPlaylistAvatar, setSelectedPlaylistAvatar] = useState(null);

  const valueMediaLibrary = "subCategoryShop";

  const {
    data: shopSubCategory,
    isFetching: isFetchingShopSubCategory,
    isError: isErrorShopSubCategory,
    error: errorShopSubCategory,
    isSuccess: isSuccessShopSubCategory,
  } = useGetSubShopCategoryByIdQuery(idShopLibrary);

  const [
    createPlayListInShopLibrary,
    {
      data: dataCreatePlaylist,
      isSuccess: isSuccessCreatePlaylist,
      isLoading: isLoadingCreatePlaylist,
      isError: isErrorCreatePlaylist,
      error: errorCreatePlaylist,
    },
  ] = useCreatePlayListInShopLibraryMutation();

  const closeModalCreatePlaylist = () => {
    if (isLoadingCreatePlaylist) {
      return true;
    }
    if (!isLoadingCreatePlaylist) {
      return false;
    }
    return false;
  };

  const handleSubmitPlayListInShopLibrary = async (data) => {
    try {
      const formData = formDataFunction(
        data,
        selectedPlaylistAvatar,
        valueMediaLibrary
      );
      await createPlayListInShopLibrary({
        idShopLibrary,
        formData,
      }).unwrap();
      closeModalCreatePlaylist();
    } catch (error) {
      console.log(error);
    }
  };

  const handleAvatarChange = (avatar) => setSelectedPlaylistAvatar(avatar);
  const newPlaylistName =
    dataCreatePlaylist?.playListName ??
    "Назва нового плейлиста не була введена";

  const minLengthInput = 2;
  const maxLengthInput = 29;

  return (
    <>
      {isSuccessShopSubCategory && !isErrorShopSubCategory && (
        <>
          <BackButton />
          <Playlists
            title={`Плейлисти підкатегорії "${shopSubCategory.shopSubTypeName}"`}
            data={shopSubCategory.playList}
            isFetchingPlaylist={isFetchingShopSubCategory}
            showNavigationLink={false}
            handleCreatePlaylist={handleSubmitPlayListInShopLibrary}
            onChangePlaylistAvatar={handleAvatarChange}
            closeCreatePlaylistModal={closeModalCreatePlaylist}
            typeMediaLibrary={"subCategoryShop"}
            idTypeOfMediaLibrary={idShopLibrary}
            isSuccessCreatePlaylist={isSuccessCreatePlaylist}
            isLoadingCreatePlaylist={isLoadingCreatePlaylist}
            isErrorCreatePlaylist={isErrorCreatePlaylist}
            errorCreatePlaylist={errorCreatePlaylist}
            newPlaylistName={newPlaylistName}
            minLengthInput={minLengthInput}
            maxLengthInput={maxLengthInput}
          />
        </>
      )}
    </>
  );
};

export default PlaylistInShopSubCategoryPage;
