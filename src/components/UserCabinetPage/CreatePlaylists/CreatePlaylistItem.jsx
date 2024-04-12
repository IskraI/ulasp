import { useLocation, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";

import {
  useUpdateFavoriteStatusApiMutation,
  useDeletePlaylistForUserMutation,
  useUpdateAddStatusApiMutation,
  useUpdateFavoriteStatusPlaylistUserMutation,
  useUpdatePlaylistByIdMutation,
} from "../../../redux/playlistsUserSlice";

import {
  PlaylistIconsWrapper,
  PlaylistDeleteButton,
} from "./CreatePlaylistItem.syled";

import { Modal } from "../../Modal/Modal";
import { ModalInfoText } from "../../Modal/Modal.styled";
import { ErrorNotFound } from "../../Errors/Errors";

import { ErrorValidateText } from "../../Errors/errors.styled";
import CountTracks from "../../EditorComponents/CountTracks/CountTracks";
import { isEmptyMediaUpdateData } from "../../../helpers/helpers";

import { PlaylistInfoWrapper } from "../../EditorComponents/PlayLists/PlayLists.styled";
import {
  MediaItem,
  MediaImg,
  MediaItemText,
  MediaIconsWrapper,
  EditWrapper,
  EditInputText,
  MediaButton,
  SvgMedia,
} from "../../UserMediaComponent/MediaList/MediaList.styled";

import useValidateInput from "../../../hooks/useValidateInput";

import AddCover from "../../AddCover/AddCover";

const CreatePlayListItem = ({
  id,
  title,
  icon,
  favoriteStatus,
  addStatus,
  placeListCardInfo,
  countTracks,
  minLength,
  maxLength,
}) => {
  const location = useLocation();
  const ref = useRef(null);

  const [toggleFavoritePlaylistUser] =
    useUpdateFavoriteStatusPlaylistUserMutation(id);
  const [isEditing, setIsEditing] = useState(false);
  const [playlistTitle, setPlaylistTitle] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const [
    deletePlaylist,
    {
      isLoading,
      isSuccess: isSuccessDeletePlaylist,
      isError: isErrorDeletePlaylist,
      error: errorDeletePlaylist,
    },
  ] = useDeletePlaylistForUserMutation();

  const [
    updatePlaylist,
    {
      isLoading: isLoadingUpdatePlaylist,
      isSuccess: isSuccessUpdatePlaylist,
      isError: isErrorUpdatePlaylist,
      error: errorUpdatePlaylist,
    },
  ] = useUpdatePlaylistByIdMutation();
  const [showModalSuccess, setShowModalSucces] = useState(false);
  const [showModalError, setShowModalError] = useState(false);
  const [showModalErrorUpdate, setShowModalErrorUpdate] = useState(false);

  const [isFavorite, setIsFavorite] = useState(() => favoriteStatus);
  // useEffect
  console.log("isFavorite :>> ", isFavorite);
  console.log("favoriteStatus :>> ", favoriteStatus);
  const [errorValidateMessage, isError, setIsError] = useValidateInput(
    playlistTitle,
    minLength,
    maxLength
  );

  useEffect(() => {
    if (isEditing) {
      ref.current.focus();
    }
  }, [isEditing]);

  const deleteMediaItem = async () => {
    try {
      await deletePlaylist(id);
      setShowModalSucces(true);
    } catch (error) {
      setShowModalError(true);
    }
  };

  const closeModalSuccess = () => {
    return setShowModalSucces(false);
  };

  const closeModalError = () => {
    return setShowModalError(false);
  };

  const handleToggleFavorite = async () => {
    try {
      console.log("playlistId:", id);
      // Call the API to update the favorite status
      await toggleFavoritePlaylistUser(id);
      // Update the local state after a successful API call
      setIsFavorite((prevIsFavorite) => !prevIsFavorite);
      console.log("toggleFavoritePlaylistUser ");
    } catch (error) {
      console.error("Error updating favorite status:", error);
    }
  };

  const handleChooseCover = (data) => setSelectedImage(data);

  const editPlaylist = () => {
    setIsEditing(true);
    setPlaylistTitle(title);
  };

  const handleCloseEdit = () => {
    setSelectedImage(null);
    setIsEditing(false);
    setIsError(false);
  };

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
      await updatePlaylist({ id, formData }).unwrap();

      handleCloseEdit();
    } catch (error) {
      setShowModalErrorUpdate(true);
      handleCloseEdit();
    }
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
            minLength={minLength}
            maxLength={maxLength}
            value={playlistTitle}
            onChange={(e) => setPlaylistTitle(e.target.value)}
            ref={ref}
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
        {!placeListCardInfo ? (
          <Link
            key={id}
            to={
              location.pathname.includes("createplaylists")
                ? `${id}/tracks`
                : `createplaylists/${id}/tracks`
            }
            state={{ from: location }}
            disabled={placeListCardInfo ? true : false}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <MediaImg src={BASE_URL + "/" + icon} alt={title} />
            <MediaItemText>{title}</MediaItemText>
          </Link>
        ) : (
          <>
            <MediaImg src={BASE_URL + "/" + icon} alt={title} />
            <PlaylistInfoWrapper>
              <MediaItemText>{title}</MediaItemText>
              <CountTracks countTracks={countTracks} />
            </PlaylistInfoWrapper>
          </>
        )}

        <PlaylistIconsWrapper>
          <svg width="24" height="24" style={{ marginRight: "4px" }}>
            <use href={`${symbol}#icon-pen`} onClick={editPlaylist}></use>
          </svg>
          <MediaIconsWrapper>
            <svg
              width="24"
              height="24"
              fill={isFavorite ? "#17161C" : "none"}
              stroke="#17161C"
              onClick={() => handleToggleFavorite(id)}
              style={{ cursor: "pointer", marginRight: "4px" }}
            >
              <use href={`${symbol}#icon-heart-empty`}></use>
            </svg>
          </MediaIconsWrapper>

          <PlaylistDeleteButton
            type="button"
            onClick={deleteMediaItem}
            disabled={isLoading}
          >
            {isLoading ? (
              <svg width="24" height="24" stroke="#888889">
                <use href={`${symbol}#icon-del-basket`}></use>
              </svg>
            ) : (
              <svg width="24" height="24">
                <use href={`${symbol}#icon-del-basket`}></use>
              </svg>
            )}
          </PlaylistDeleteButton>
        </PlaylistIconsWrapper>
      </MediaItem>

      {showModalSuccess &&
        isSuccessDeletePlaylist &&
        !isErrorDeletePlaylist && (
          <Modal width={"500px"} onClose={closeModalSuccess}>
            <ModalInfoText marginBottom={"34px"}>
              Плейлист &quot;{title}&quot; був видалений
            </ModalInfoText>
          </Modal>
        )}
      {showModalError && (
        <Modal width={"394px"} onClose={closeModalError} showCloseButton={true}>
          <ModalInfoText marginBottom={"34px"}>
            {isErrorDeletePlaylist &&
              (<ErrorNotFound error={errorDeletePlaylist.data.message} /> ?? (
                <ErrorNotFound />
              ))}
          </ModalInfoText>
        </Modal>
      )}
      {showModalErrorUpdate && (
        <Modal
          width={"20vw"}
          height={"25vh"}
          onClose={() => setShowModalErrorUpdate(false)}
          showCloseButton={true}
        >
          <ModalInfoText fontSize={"20px"} marginBottom={"34px"}>
            {isErrorUpdatePlaylist &&
            errorUpdatePlaylist.data?.code === "4091" ? (
              <ErrorNotFound
                error={`Плейлист "${errorUpdatePlaylist.data?.object}" вже використовується`}
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

export default CreatePlayListItem;
