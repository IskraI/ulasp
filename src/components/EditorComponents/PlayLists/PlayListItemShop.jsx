/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";
import { Modal } from "../../Modal/Modal";
import { ModalInfoText, ButtonsModalWrapper } from "../../Modal/Modal.styled";
import { Button } from "../../Button/Button";
import { ErrorNotFound } from "../../Errors/Errors";
import AddCover from "../../AddCover/AddCover";
import useValidateInput from "../../../hooks/useValidateInput";
import { isEmptyMediaUpdateData } from "../../../helpers/helpers";

import {
  useDeletePlaylistInShopMutation,
  useDeletePlaylistInShopSubCategoryMutation,
  useDeletePlaylistInShopItemMutation,
} from "../../../redux/shopsSlice";
import { useUpdatePlayListByIdMutation } from "../../../redux/playlistsSlice";
import { useDeletePlaylistMutation } from "../../../redux/playlistsSlice";
import { useDispatch } from "react-redux";
import { shopsApi } from "../../../redux/shopsSlice";

import { LinkToTracks } from "./PlayLists.styled";

import {
  MediaItem,
  MediaImg,
  MediaItemText,
  MediaIconsWrapper,
  SvgMedia,
  MediaButton,
  EditWrapper,
  EditInputText,
} from "../MediaList/MediaList.styled";

import { ErrorValidateText } from "../../Errors/errors.styled";

const PlaylistListItem = ({
  id: idPlaylist,
  title,
  icon,
  typeMediaLibrary,
  idTypeOfMediaLibrary,
  mediaLibraryName,
  minLengthInput,
  maxLengthInput,
  ownShopPlaylists = [],
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showModalError, setShowModalError] = useState(false);
  const [showModalSuccess, setShowModalSuccess] = useState(false);
  const [showModalSuccessDelete, setShowModalSuccessDelete] = useState(false);
  const [showModalDeletePlaylist, setShowModalDeletePlaylist] = useState(false);
  const [showModalErrorUpdate, setShowModalErrorUpdate] = useState(false);

  const [disableDeleteBtn, setDisableDeleteBtn] = useState(true);

  const [isEditing, setIsEditing] = useState(false);
  const [playlistTitle, setPlaylistTitle] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const [errorValidateMessage, isError, setIsError] = useValidateInput(
    playlistTitle,
    minLengthInput,
    maxLengthInput
  );

  useEffect(() => {
    if (!ownShopPlaylists.length) {
      setDisableDeleteBtn(false);
      return;
    }
    ownShopPlaylists.map((item) => {
      if (item._id === idPlaylist) {
        setDisableDeleteBtn(false);
      }
    });
  }, [idPlaylist, ownShopPlaylists]);

  const [
    updatePlaylist,
    {
      isLoading: isLoadingUpdatePlaylist,
      isSuccess: isSuccessUpdatePlaylist,
      isError: isErrorUpdatePlaylist,
      error: errorUpdatePlaylist,
    },
  ] = useUpdatePlayListByIdMutation();

  const [
    deletePlaylistInShop,
    {
      isLoading: isLoadingDeletePlaylistInShop,
      isSuccess: isSuccessDeletePlaylistInShop,
      error: errorDeletePlaylistInShop,
      isError: isErrorDeletePlaylistInShop,
    },
  ] = useDeletePlaylistInShopMutation();

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
      isLoadingDelete = isLoadingDeletePlaylistInShop;
      isSuccessDelete = isSuccessDeletePlaylistInShop;
      errorDelete = errorDeletePlaylistInShop;
      isErrorDelete = isErrorDeletePlaylistInShop;
      shopType = "Категорія";
      break;
    default:
      return console.log("Нету такого типа");
  }

  const invalidateShopsTag = () => {
    dispatch(
      shopsApi.util.invalidateTags(["Shops", "ShopItem", "SubShopItem"])
    );
  };

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
              console.log("Нету такого типа");
            }
          });
        break;
      case "shop":
        deletePlaylistInShop({ idTypeOfMediaLibrary, idPlaylist })
          .unwrap()
          .then(() => setShowModalSuccessDelete(true))
          .catch(() => setShowModalError(true));
        break;
      default:
        return console.log("Нету такого типа");
    }
  };

  const closeModalError = () => setShowModalError(false);

  const closeModalSuccess = () => setShowModalSuccessDelete(false);

  const handleCloseEdit = () => {
    setSelectedImage(null);
    setIsEditing(false);
    setIsError(false);
  };
  const handleChooseCover = (data) => setSelectedImage(data);

  const updatePlaylistItem = async (title) => {
    const formData = new FormData();

    if (!selectedImage) {
      formData.append("playListName", playlistTitle);
    }

    if (playlistTitle === title) {
      formData.append("picsURL", selectedImage);
      formData.append("type", "playlist");
    }

    if (selectedImage && playlistTitle !== title && playlistTitle !== "") {
      formData.append("playListName", playlistTitle);
      formData.append("picsURL", selectedImage);
      formData.append("type", "playlist");
    }

    try {
      await updatePlaylist({ id: idPlaylist, formData }).unwrap();

      handleCloseEdit();

      invalidateShopsTag();
    } catch (error) {
      setShowModalErrorUpdate(true);
      handleCloseEdit();
    }
  };

  const editPlaylist = () => {
    setIsEditing(true);
    setPlaylistTitle(title);
  };

  if (isEditing) {
    return (
      <>
        <MediaItem isError={isError} isEditing={isEditing}>
          {isError && (
            <ErrorValidateText>{errorValidateMessage}</ErrorValidateText>
          )}
          <EditWrapper>
            <AddCover
              cover={icon}
              coverAlt={title}
              handleChooseCover={handleChooseCover}
            />
          </EditWrapper>
          <EditInputText
            type="text"
            size={17}
            minLength={minLengthInput}
            maxLength={maxLengthInput}
            value={playlistTitle}
            onChange={(e) => setPlaylistTitle(e.target.value)}
            autoFocus={true}
          />
          <MediaIconsWrapper>
            <MediaButton
              type="button"
              onClick={() => updatePlaylistItem(title)}
              disabled={isEmptyMediaUpdateData(
                playlistTitle,
                title,
                isError,
                selectedImage
              )}
            >
              <SvgMedia width="24" height="24">
                <use href={`${symbol}#icon-check-in`}></use>
              </SvgMedia>
            </MediaButton>
            <MediaButton type="button" onClick={handleCloseEdit}>
              <SvgMedia width="24" height="24">
                <use href={`${symbol}#icon-close`}></use>
              </SvgMedia>
            </MediaButton>
          </MediaIconsWrapper>
        </MediaItem>
      </>
    );
  }

  return (
    <>
      <MediaItem>
        <LinkToTracks
          key={idPlaylist}
          to={`${idPlaylist}/tracks`}
          state={{ from: location }}
        >
          <MediaImg src={BASE_URL + "/" + icon} alt={title} />
          <MediaItemText>{title}</MediaItemText>
        </LinkToTracks>
        <MediaIconsWrapper>
          <MediaButton type="button" onClick={editPlaylist}>
            <SvgMedia width="24" height="24">
              <use href={`${symbol}#icon-pen`}></use>
            </SvgMedia>
          </MediaButton>

          <MediaButton
            type="button"
            onClick={() => setShowModalDeletePlaylist(true)}
            disabled={isLoadingDelete || disableDeleteBtn}
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
          width={"900px"}
          onClose={() => setShowModalDeletePlaylist(false)}
          showCloseButton={true}
          flexDirection={"column"}
        >
          <ModalInfoText warning marginTop={"4px"} paddingBottom={"4px"}>
            Уважно!
          </ModalInfoText>
          <ModalInfoText
            marginTop={"0"}
            marginBottom={"6px"}
            paddingTop={"2px"}
            paddingBottom={"2px"}
          >
            Видалити тільки з підкатегорії? Плейлист залишиться в медіатеці.
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
          </ButtonsModalWrapper>
          <ModalInfoText
            marginTop={"0"}
            marginBottom={"6px"}
            paddingTop={"2px"}
            paddingBottom={"2px"}
          >
            Видалити з медіатеки? Пісні залишиться у медіатеці.
          </ModalInfoText>
          <ButtonsModalWrapper marginBottom={"6px"}>
            <Button
              type={"button"}
              text={"Так"}
              showIcon={false}
              padding={"12px 26px"}
              marginbottom={"0"}
              onClick={() => {
                setShowModalDeletePlaylist(false);
                deletePlayList({ id: idPlaylist }).then(() => {
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
          <hr style={{ width: "100%" }} />
          <ButtonsModalWrapper>
            <Button
              type={"button"}
              text={"Скасувати"}
              showIcon={false}
              padding={"12px 16px"}
              onClick={() => setShowModalDeletePlaylist(false)}
            />
          </ButtonsModalWrapper>
        </Modal>
      )}
      {showModalSuccessDelete &&
        (isSuccessDelete || isSuccessDeletePlaylist) && (
          <Modal width={"494px"} onClose={closeModalSuccess}>
            <ModalInfoText marginBottom={"34px"}>
              Плейлист &#32;&quot;{title}&quot;&#32; був видалений
            </ModalInfoText>
          </Modal>
        )}

      {showModalError && (
        <Modal width={"694px"} onClose={closeModalError} showCloseButton={true}>
          <ModalInfoText marginBottom={"34px"}>
            <ErrorNotFound />
          </ModalInfoText>
        </Modal>
      )}
      {showModalErrorUpdate && (
        <Modal
          width={"394px"}
          onClose={() => setShowModalErrorUpdate(false)}
          showCloseButton={true}
        >
          <ModalInfoText fontSize={"20px"} marginBottom={"34px"}>
            {isErrorUpdatePlaylist &&
            errorUpdatePlaylist.data?.code === "4091" ? (
              <ErrorNotFound
                error={`Плейлист ${errorUpdatePlaylist.data?.object} вже використовується`}
              />
            ) : (
              <ErrorNotFound error={errorUpdatePlaylist.data?.message} />
            )}
          </ModalInfoText>
        </Modal>
      )}
    </>
  );
};

export default PlaylistListItem;
