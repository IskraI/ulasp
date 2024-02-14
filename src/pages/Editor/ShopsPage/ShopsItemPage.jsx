import { useParams } from "react-router-dom";
import { useState } from "react";

import ControlMediateca from "../../../components/EditorComponents/ControlMediateca/ControlMediaTeca";
import MediaListItem from "../../../components/EditorComponents/MediaList/MediaList";
import { Loader } from "../../../components/Loader/Loader";
import {
  Error500,
  ErrorNotFound,
  NoData,
} from "../../../components/Errors/Errors";
import symbol from "../../../assets/symbol.svg";
import { Modal } from "../../../components/Modal/Modal";
import ModalForm from "../../../components/EditorComponents/ControlMediateca/ModalForm";
import Playlists from "../../../components/EditorComponents/PlayLists/PlayListsShop";
import { formDataFunction } from "../../../helpers/helpers";
import {
  useGetShopByIdQuery,
  useCreateShopCategoryMutation,
  useCreatePlayListInShopLibraryMutation,
} from "../../../redux/shopsSlice";

import { ShopsList } from "./Shops.styled";
import {
  ModalInfoText,
  ModalInfoTextBold,
} from "../../../components/Modal/Modal.styled";

const ShopsItemPage = () => {
  const valueMediaLibrary = "shop";

  const [showModal, setShowModal] = useState(false);
  const [showModalSuccessCreate, setShowModalSuccessCreate] = useState(false);

  const [showModalError, setShowModalError] = useState(false);
  const [selectedPlaylistAvatar, setSelectedPlaylistAvatar] = useState(null);

  const { shopId: idShopLibrary } = useParams();


  console.log(idShopLibrary);

  const {
    data: shopItem,
    isFetching: isFetchingShopItem,
    isError: isErrorShopItem,
    error: errorShopItem,
    isSuccess: isSuccessShopItem,
  } = useGetShopByIdQuery(idShopLibrary);

  const [
    createShopCategory,
    {
      data: dataCreateShopCategory,
      isSuccess: isSuccessCreateShopCategory,
      isLoading: isLoadingCreateShopCategory,
      isError: isErrorCreateShopCategory,
      error: errorCreateShopCategory,
    },
  ] = useCreateShopCategoryMutation();

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
      await createShopCategory({ idShopLibrary, data }).unwrap();
      setShowModalSuccessCreate(true);
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

  const closeModal = () => {
    return setShowModal(false);
  };

  const closeModalError = () => {
    return setShowModalError(false);
  };

  const closeModalSuccessCreate = () => {
    return setShowModalSuccessCreate(false);
  };

  const toogleModal = () => {
    return setShowModal(!showModal);
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
  const newPlaylistName =
    dataCreatePlaylist?.playListName ??
    "Назва нового плейлиста не була введена";
  const newCategory =
    dataCreateShopCategory?.shopItem?.shopItemName ??
    "Назва нової категорії не була введена";

  console.log(shopItem?.allPlaylistsInShopCategory);
  return (
    <>
      {isFetchingShopItem && !isSuccessShopItem && <Loader />}
      {errorShopItem?.status === "500" && <Error500 />}
      {errorShopItem && <ErrorNotFound />}
      {isSuccessShopItem && !isErrorShopItem && (
        <>
          <ControlMediateca
            title={shopItem.shop.shopCategoryName}
            iconButton={`${symbol}#icon-plus`}
            textButton={"Категорія"}
            onClick={toogleModal}
            disabled={isErrorShopItem}
          />

          {shopItem.shop.shopChildItems.length === 0 ? (
            <NoData text={"На данний час, ще не додано жодної категорії."} />
          ) : (
            <ShopsList>
              {shopItem.shop.shopChildItems.map(
                ({ _id, shopItemName, shopItemAvatarURL }) => (
                  <MediaListItem
                    key={_id}
                    id={_id}
                    title={shopItemName}
                    icon={shopItemAvatarURL}
                    typeMediaLibrary={"shopItem"}
                    fieldForUpdate={"shopItemName"}
                    typeCover={"shop"}

                    // linkToPage={linkToPage}
                  />
                )
              )}
            </ShopsList>
          )}
          <Playlists
            title={`Плейлисти категорії "${shopItem.shop.shopCategoryName}"`}
            data={shopItem.allPlaylistsInShopCategory}
            // isFetching={isFetchingShopCategory}
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
          {showModal && (
            <Modal width={"814px"} onClose={toogleModal} showCloseButton={true}>
              <ModalForm
                onSubmit={handleSubmitShop}
                idInputFirst={"shopItemName"}
                idInputSecond={"type"}
                valueInputSecond={"shop"}
                placeholderFirst={"Категорія закладу*"}
                cover={false}
              />
            </Modal>
          )}
          {showModalSuccessCreate &&
            isSuccessCreateShopCategory &&
            !isErrorCreateShopCategory && (
              <Modal
                width={"394px"}
                onClose={closeModalSuccessCreate}
                showCloseButton={true}
              >
                <ModalInfoText marginBottom={"34px"}>
                  Категорія
                  <ModalInfoTextBold>
                    &quot;{newCategory}&quot;
                  </ModalInfoTextBold>
                  була створена
                </ModalInfoText>
              </Modal>
            )}
          {showModalError && isErrorCreateShopCategory && (
            <Modal
              width={"494px"}
              onClose={closeModalError}
              showCloseButton={true}
            >
              <ModalInfoText>
                {errorCreateShopCategory.data.code === "4091" &&
                  ((
                    <ErrorNotFound
                      error={`Категорія ${errorCreateShopCategory?.data.object} вже використовується`}
                    />
                  ) ?? <ErrorNotFound />)}
              </ModalInfoText>
            </Modal>
          )}
        </>
      )}
    </>
  );
};

export default ShopsItemPage;
