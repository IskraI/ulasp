/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ControlMediateca from "../../../components/EditorComponents/ControlMediateca/ControlMediaTeca";
import MediaListItem from "../../../components/EditorComponents/MediaList/MediaList";
import { Loader } from "../../../components/Loader/Loader";
import { Modal } from "../../../components/Modal/Modal";
import ModalForm from "../../../components/EditorComponents/ControlMediateca/ModalForm";
import symbol from "../../../assets/symbol.svg";
import Playlists from "../../../components/EditorComponents/PlayLists/PlayListsShop";
import { formDataFunction } from "../../../helpers/helpers";

import {
  Error500,
  ErrorNotFound,
  NoData,
} from "../../../components/Errors/Errors";

import {
  useGetShopCategoryByIdQuery,
  useCreateShopSubCategoryMutation,
  useCreatePlayListInShopLibraryMutation,
} from "../../../redux/shopsSlice";

import { ShopsList } from "./Shops.styled";
import { ModalInfoText } from "../../../components/Modal/Modal.styled";

const ShopSubCategoryPage = () => {
  const valueMediaLibrary = "shopItem";

  const minLengthInput = 2;
  const maxLengthInput = 29;

  const { shopItemId: idShopLibrary } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [showModalSuccess, setShowModalSuccess] = useState(false);
  const [showModalError, setShowModalError] = useState(false);
  const [selectedPlaylistAvatar, setSelectedPlaylistAvatar] = useState(null);

  useEffect(() => {
    if (showModalSuccess) {
      setTimeout(() => {
        setShowModalSuccess(false);
      }, 2000);
    }
  }, [showModalSuccess]);

  const {
    data: shopCategory,
    isFetching: isFetchingShopCategory,
    isError: isErrorShopCategory,
    error: errorShopCategory,
    isSuccess: isSuccessShopCategory,
  } = useGetShopCategoryByIdQuery(idShopLibrary);

  const [
    createShopSubCategory,
    {
      data: dataCreateShopSubCategory,
      isSuccess: isSuccessCreateSubCategory,
      isLoading: isLoadingCreateSubCategory,
      isError: isErrorCreateSubCategory,
      error: errorCreateSubCategory,
    },
  ] = useCreateShopSubCategoryMutation();

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

  const handleSubmitShop = async (data) => {
    try {
      closeModal();
      await createShopSubCategory({ idShopLibrary, data })
        .unwrap()
        .then(setShowModalSuccess(true));
    } catch (error) {
      setShowModalError(true);
      console.log(error);
    }
  };

  const handleAvatarChange = (avatar) => {
    setSelectedPlaylistAvatar(avatar);
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
      setShowModalError(true);
      console.log(error);
    }
  };

  const closeModalCreatePlaylist = () => {
    if (isLoadingCreatePlaylist) {
      return true;
    }
    if (!isLoadingCreatePlaylist) {
      return false;
    }
    return false;
  };

  const closeModal = () => {
    return setShowModal(false);
  };

  const toogleModal = () => {
    return setShowModal(!showModal);
  };

  const closeModalSuccess = () => {
    return setShowModalSuccess(false);
  };

  const closeModalError = () => {
    return setShowModalError(false);
  };
  const newPlaylistName =
    dataCreatePlaylist?.playListName ??
    "Назва нового плейлиста не була введена";

  const newSubCategory =
    dataCreateShopSubCategory?.shopSubCategory?.shopSubTypeName ??
    "Назва нової категорії не була введена";

  console.log(shopCategory?.allPlaylistsInShopCategory);

  return (
    <>
      {isFetchingShopCategory && !isSuccessShopCategory && <Loader />}
      {errorShopCategory?.status === "500" && <Error500 />}
      {errorShopCategory && <ErrorNotFound />}
      {isSuccessShopCategory && !isErrorShopCategory && (
        <>
          <ControlMediateca
            title={shopCategory.shop.shopItemName}
            iconButton={`${symbol}#icon-plus`}
            textButton={"Підкатегорія"}
            onClick={toogleModal}
            disabled={isErrorShopCategory}
          />

          {shopCategory.shop.shopChildSubType.length === 0 ? (
            <NoData text={"На данний час, ще не додано жодної підкатегорії."} />
          ) : (
            <ShopsList>
              {shopCategory.shop.shopChildSubType.map(
                ({ _id, shopSubTypeName, shopSubTypeAvatarURL }) => (
                  <MediaListItem
                    key={_id}
                    id={_id}
                    title={shopSubTypeName}
                    icon={shopSubTypeAvatarURL}
                    typeMediaLibrary={"subCategoryShop"}
                    fieldForUpdate={"shopSubTypeName"}
                    typeCover={"shop"}
                    minLengthInput={minLengthInput}
                    maxLengthInput={maxLengthInput}
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
            handleCreatePlaylist={handleSubmitPlayListInShopLibrary}
            onChangePlaylistAvatar={handleAvatarChange}
            closeCreatePlaylistModal={closeModalCreatePlaylist}
            typeMediaLibrary={valueMediaLibrary}
            idTypeOfMediaLibrary={idShopLibrary}
            isLoadingCreatePlaylist={isLoadingCreatePlaylist}
            isSuccessCreatePlaylist={isSuccessCreatePlaylist}
            isErrorCreatePlaylist={isErrorCreatePlaylist}
            errorCreatePlaylist={errorCreatePlaylist}
            newPlaylistName={newPlaylistName}
          />
          {/* parts Modal for create Shop SubType   */}
          {showModal && (
            <Modal width={"814px"} onClose={toogleModal} showCloseButton={true}>
              <ModalForm
                onSubmit={handleSubmitShop}
                idInputFirst={"shopSubTypeName"}
                idInputSecond={"type"}
                valueInputSecond={"shop"}
                placeholderFirst={"Підкатегорія закладу*"}
                cover={false}
                minLength={minLengthInput}
                maxLength={maxLengthInput}
              />
            </Modal>
          )}
          {showModalSuccess &&
            isSuccessCreateSubCategory &&
            !isErrorCreateSubCategory && (
              <Modal
                width={"394px"}
                onClose={closeModalSuccess}
                showCloseButton={true}
              >
                <ModalInfoText marginBottom={"34px"}>
                  Підкатегорія &#32;&quot;{newSubCategory}&quot;&#32; була
                  створена
                </ModalInfoText>
              </Modal>
            )}
          {showModalError && isErrorCreateSubCategory && (
            <Modal
              width={"494px"}
              onClose={closeModalError}
              showCloseButton={true}
            >
              {isErrorCreateSubCategory && (
                <ModalInfoText>
                  {errorCreateSubCategory?.data.code === "4091" &&
                    ((
                      <ErrorNotFound
                        error={`Підкатегорія ${errorCreateSubCategory?.data.object} вже використовується`}
                      />
                    ) ?? <ErrorNotFound />)}
                </ModalInfoText>
              )}
            </Modal>
          )}
        </>
      )}
    </>
  );
};

export default ShopSubCategoryPage;
