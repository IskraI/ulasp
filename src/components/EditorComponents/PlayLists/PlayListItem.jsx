/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";
import CountTracks from "../CountTracks/CountTracks";
import { Modal } from "../../Modal/Modal";
import { ModalInfoText, ModalInfoTextBold } from "../../Modal/Modal.styled";

import useValidateInput from "../../../hooks/useValidateInput";
import AddCover from "../../AddCover/AddCover";
import { isEmptyMediaUpdateData } from "../../../helpers/helpers";
import { ErrorNotFound } from "../../Errors/Errors";

import {
  useDeletePlaylistMutation,
  useUpdatePlayListByIdMutation,
} from "../../../redux/playlistsSlice";
import { useDeletePlaylistInGenreMutation } from "../../../redux/genresSlice";
import { useDeletePlaylistInShopMutation } from "../../../redux/shopsSlice";

import { genresApi } from "../../../redux/genresSlice";

import {
  PlaylistInfoWrapper,
  PlaylistCardInfo,
  LinkToTracks,
} from "./PlayLists.styled";

import {
  MediaItem,
  MediaImg,
  MediaItemText,
  MediaIconsWrapper,
  MediaButton,
  SvgMedia,
  EditWrapper,
  EditCardWrapper,
  EditInputText,
} from "../MediaList/MediaList.styled";

import { ErrorValidateText } from "../../Errors/errors.styled";
import { useDispatch } from "react-redux";

const PlaylistListItem = ({
  id,
  title,
  icon,
  genre,
  placeListCardInfo,
  countTracks,
  subCategory,
  minLengthInput,
  maxLengthInput,
}) => {
  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();
  const [showModalSuccess, setShowModalSuccess] = useState(false);
  const [showModalError, setShowModalError] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [playlistTitle, setPlaylistTitle] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const ref = useRef(null);

  const [errorValidateMessage, isError, setIsError] = useValidateInput(
    playlistTitle,
    minLengthInput,
    maxLengthInput
  );

  useEffect(() => {
    if (isEditing) {
      ref.current.focus();
    }
  }, [isEditing]);

  const mediaLibrary = `/editor/medialibrary`;
  const newPlaylists = `/editor/medialibrary/newplaylists/${id}/tracks`;

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
    deletePlaylist,
    {
      isLoading,
      isSuccess: isSuccessDeletePlaylist,
      isError: isErrorDeletePlaylist,
      error: errorDeletePlaylist,
    },
  ] = useDeletePlaylistMutation();

  const [deletePlaylistInGenre, { isSuccess }] =
    useDeletePlaylistInGenreMutation();

  const [deletePlaylistInShop] = useDeletePlaylistInShopMutation();

  if (
    location.pathname === newPlaylists &&
    isSuccessDeletePlaylist &&
    !isErrorDeletePlaylist
  ) {
    navigate(`${mediaLibrary}/newplaylists`);
  }

  useEffect(() => {
    setTimeout(() => {
      if (showModalSuccess) {
        setShowModalSuccess(false);
      }
    }, 2000);
  }, [showModalSuccess]);

  const deleteMediaItem = () => {
    if (genre) {
      deletePlaylistInGenre(id).unwrap();
      setShowModalSuccess(true);
      return;
    }

    if (subCategory) {
      deletePlaylistInShop(id).unwrap();
      setShowModalSuccess(true);
      return;
    }

    deletePlaylist(id).unwrap();
    setShowModalSuccess(true);
  };

  const editPlaylist = () => {
    setIsEditing(true);
    setPlaylistTitle(title);
  };

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
      await updatePlaylist({ id, formData }).unwrap();

      handleCloseEdit();

      if (genre) {
        dispatch(genresApi.util.invalidateTags(["Genres"]));
      }
    } catch (error) {
      setShowModalError(true);
      handleCloseEdit();
    }
  };

  if (isEditing) {
    return (
      <>
        <MediaItem isError={isError} isEditing={isEditing}>
          {/* <EditCardWrapper> */}
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
          {/* </EditCardWrapper> */}
        </MediaItem>
        {showModalError && (
          <Modal
            width={"394px"}
            onClose={() => setShowModalError(false)}
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
  }

  return (
    <>
      {!placeListCardInfo ? (
        <MediaItem isError={isError}>
          <LinkToTracks
            key={id}
            to={
              location.pathname === mediaLibrary
                ? `newplaylists/${id}/tracks`
                : `${id}/tracks`
            }
            state={{ from: location }}
            disabled={placeListCardInfo ? true : false}
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
              onClick={deleteMediaItem}
              disabled={isLoading}
            >
              {isLoading ? (
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
      ) : (
        <PlaylistCardInfo>
          <MediaImg src={BASE_URL + "/" + icon} alt={title} />
          <PlaylistInfoWrapper>
            <MediaItemText>{title}</MediaItemText>
            <CountTracks countTracks={countTracks} />
          </PlaylistInfoWrapper>
          <MediaIconsWrapper>
            <MediaButton type="button" onClick={editPlaylist}>
              <SvgMedia width="24" height="24">
                <use href={`${symbol}#icon-pen`}></use>
              </SvgMedia>
            </MediaButton>

            <MediaButton
              type="button"
              onClick={deleteMediaItem}
              // disabled={isLoading}
              disabled={false}
            >
              {isLoading ? (
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
        </PlaylistCardInfo>
      )}
      {showModalSuccess && (
        <Modal width={"394px"} onClose={() => setShowModalSuccess(false)}>
          <ModalInfoText fontSize={"20px"} marginBottom={"34px"}>
            Плейлист <ModalInfoTextBold>&quot;{title}&quot;</ModalInfoTextBold>{" "}
            був видалений
          </ModalInfoText>
        </Modal>
      )}
      {showModalError && (
        <Modal
          width={"394px"}
          onClose={() => setShowModalError(false)}
          showCloseButton={true}
        >
          <ModalInfoText fontSize={"20px"} marginBottom={"34px"}>
            {isErrorDeletePlaylist &&
              (<ErrorNotFound error={errorDeletePlaylist.data.message} /> ?? (
                <ErrorNotFound />
              ))}

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
