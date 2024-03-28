/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";
import { Modal } from "../../Modal/Modal";
import {
  ModalInfoText,
  ModalInfoTextBold,
  ButtonsModalWrapper,
} from "../../Modal/Modal.styled";
import { Button } from "../../Button/Button";
import { ErrorNotFound, NoData } from "../../Errors/Errors";

import {
  useDeletePlaylistInShopMutation,
  useDeletePlaylistInShopSubCategoryMutation,
  useDeletePlaylistInShopItemMutation,
} from "../../../redux/shopsSlice";
import { useDeletePlaylistMutation } from "../../../redux/playlistsSlice";
import { useDispatch } from "react-redux";
import { shopsApi } from "../../../redux/shopsSlice";

import { PlaylistCardInfo, LinkToTracks } from "./PlayLists.styled";

import {
  MediaItem,
  MediaImg,
  MediaItemText,
  MediaIconsWrapper,
  SvgMedia,
  MediaButton,
} from "../MediaList/MediaList.styled";

const PlaylistListItem = ({
  id: idPlaylist,
  title,
  icon,
  placeListCardInfo,
  countTracks,
  typeMediaLibrary,
  idTypeOfMediaLibrary,
  mediaLibraryName,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showModalError, setShowModalError] = useState(false);
  const [showModalSuccess, setShowModalSuccess] = useState(false);
  const [showModalSuccessDelete, setShowModalSuccessDelete] = useState(false);
  const [showModalDeletePlaylist, setShowModalDeletePlaylist] = useState(false);

  // const [deletePlaylistInShop, { isLoading: isLoadingDelete }] =
  //   useDeletePlaylistInShopMutation();

  const [
    deletePlaylistInShopSubCategory,
    {
      isLoading: isLoadingDeleteInShopSubCategory,
      isSuccess: isSuccessDeleteInShopSubCategory,
      error: errorDeletePlaylistInShopSubCategory,
      isError: isErrorDeletePlaylistInShopSubCategory,
    },
  ] = useDeletePlaylistInShopSubCategoryMutation();

  const [
    deletePlaylistInShopItem,
    {
      isLoading: isLoadingDeletePlaylistInShopItem,
      isSuccess: isSuccessDeletePlaylistInShopItem,
      error: errorDeletePlaylistInShopItem,
      isError: isErrorDeletePlaylistInShopItem,
    },
  ] = useDeletePlaylistInShopItemMutation();

  const [deletePlayList, { isSuccess: isSuccessDeletePlaylist }] =
    useDeletePlaylistMutation();

  const mediaLibrary = `/editor/medialibrary`;
  const newPlaylists = `/editor/medialibrary/newplaylists/${idPlaylist}/tracks`;

  let isLoadingDelete;
  let errorDelete;
  let isErrorDelete;
  let isSuccessDelete;
  let shopType;
  switch (typeMediaLibrary) {
    case "subCategoryShop":
      isLoadingDelete = isLoadingDeleteInShopSubCategory;
      isSuccessDelete = isSuccessDeleteInShopSubCategory;
      errorDelete = errorDeletePlaylistInShopSubCategory;
      isErrorDelete = isErrorDeletePlaylistInShopSubCategory;
      shopType = "Підкатегорія";

      break;
    case "shopItem":
      isLoadingDelete = isLoadingDeletePlaylistInShopItem;
      isSuccessDelete = isSuccessDeletePlaylistInShopItem;
      errorDelete = errorDeletePlaylistInShopItem;
      isErrorDelete = isErrorDeletePlaylistInShopItem;
      shopType = "Категорія";
      break;
    case "shop":
      isLoadingDelete = isLoadingDeletePlaylistInShopItem;
      isSuccessDelete = isSuccessDeletePlaylistInShopItem;
      errorDelete = errorDeletePlaylistInShopItem;
      isErrorDelete = isErrorDeletePlaylistInShopItem;
      shopType = "Категорія";
      break;
    default:
      return console.log("Нету такого типа, иди нахуй");
  }

  const deleteMediaItem = () => {
    switch (typeMediaLibrary) {
      case "subCategoryShop":
        deletePlaylistInShopSubCategory({ idTypeOfMediaLibrary, idPlaylist })
          .unwrap()
          .then(() => setShowModalSuccessDelete(true))
          .catch(() => setShowModalError(true));

        break;
      case "shopItem":
        deletePlaylistInShopItem({ idTypeOfMediaLibrary, idPlaylist })
          .unwrap()
          .then(setShowModalSuccessDelete(true))
          .catch((e) => {
            if (e.status === 404) {
              setShowModalError(true);
            } else {
              console.log("Заебал, пошел нахуй");
            }
          });
        break;
      default:
        return console.log("Нету такого типа, иди нахуй");
    }
  };

  const PropsPlayListItem = {
    marginRight: placeListCardInfo ? "16px" : "auto",
  };

  const closeModalError = () => {
    return setShowModalError(false);
  };

  const closeModalSuccess = () => {
    return setShowModalSuccessDelete(false);
  };

  return (
    <>
      <MediaItem>
        <LinkToTracks
          key={idPlaylist}
          to={
            location.pathname === mediaLibrary
              ? `newplaylists/${idPlaylist}/tracks`
              : `${idPlaylist}/tracks`
          }
          state={{ from: location }}
          disabled={placeListCardInfo ? true : false}
        >
          <MediaImg
            marginRight={PropsPlayListItem.marginRight}
            src={BASE_URL + "/" + icon}
            alt={title}
          />
          <MediaItemText>{title}</MediaItemText>
        </LinkToTracks>
        <MediaIconsWrapper>
          <SvgMedia width="24" height="24">
            <use href={`${symbol}#icon-pen`}></use>
          </SvgMedia>

          <MediaButton
            type="button"
            onClick={() => setShowModalDeletePlaylist(true)}
            disabled={isLoadingDelete}
          >
            {isLoadingDelete ? (
              <SvgMedia width="24" height="24" stroke="#888889">
                <use href={`${symbol}#icon-del-basket`}></use>
              </SvgMedia>
            ) : (
              <SvgMedia width="24" height="24">
                <use href={`${symbol}#icon-del-basket`}></use>
              </SvgMedia>
            )}
          </MediaButton>
        </MediaIconsWrapper>
      </MediaItem>
      {showModalDeletePlaylist && (
        <Modal
          width={"567px"}
          onClose={() => setShowModalDeletePlaylist(false)}
          showCloseButton={true}
          flexDirection={"column"}
        >
          <ModalInfoText>
            Видалити тільки з
            <ModalInfoTextBold>{mediaLibraryName}</ModalInfoTextBold> ?
          </ModalInfoText>
          <ButtonsModalWrapper>
            <Button
              type={"button"}
              text={"Так"}
              showIcon={false}
              padding={"12px 26px"}
              onClick={() => {
                setShowModalDeletePlaylist(false);
                deleteMediaItem();
              }}
            />
            <Button
              type={"button"}
              text={"Ні"}
              showIcon={false}
              padding={"12px 26px"}
              onClick={() => {
                setShowModalDeletePlaylist(false);
                deletePlayList({idPlaylist}).then(() => {
                  setShowModalSuccessDelete(true);
                  dispatch(
                    shopsApi.util.invalidateTags([
                      "Shops",
                      "ShopItem",
                      "SubShopItem",
                    ])
                  );
                });
              }}
            />
          </ButtonsModalWrapper>
        </Modal>
      )}
      {showModalSuccessDelete && isSuccessDelete && (
        <Modal width={"394px"} onClose={closeModalSuccess}>
          <ModalInfoText marginBottom={"34px"}>
            Плейлист
            <ModalInfoTextBold>&quot;{title}&quot;</ModalInfoTextBold>
            був видалений
          </ModalInfoText>
        </Modal>
      )}
      {showModalSuccessDelete && isSuccessDeletePlaylist && (
        <Modal width={"394px"} onClose={closeModalSuccess}>
          <ModalInfoText marginBottom={"34px"}>
            Плейлист
            <ModalInfoTextBold>&quot;{title}&quot;</ModalInfoTextBold>
            був видалений
          </ModalInfoText>
        </Modal>
      )}
      {showModalError && (
        <Modal width={"694px"} onClose={closeModalError} showCloseButton={true}>
          <ModalInfoText marginBottom={"34px"}>
            {typeMediaLibrary === "shopItem" ? (
              <ErrorNotFound
                error={`Упссс... Але Ви не можете видалити плейлист "${title}".`}
              >
                <p
                  style={{
                    fontSmooth: "auto",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  Скоріш за всього, він є в інших категоріях/підкатегоріях, але
                  ми точно цього ще не знаємо 😞
                </p>
              </ErrorNotFound>
            ) : (
              <ErrorNotFound />
            )}
          </ModalInfoText>
        </Modal>
      )}
      {/* {data && (
        <Modal width={"814px"}>
          <p>{data.message}</p>
        </Modal>
      )} */}
    </>
  );
};

export default PlaylistListItem;
