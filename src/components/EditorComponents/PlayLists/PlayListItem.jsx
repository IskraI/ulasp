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

import { useDeletePlaylistMutation } from "../../../redux/playlistsSlice";
import { useDeletePlaylistInGenreMutation } from "../../../redux/genresSlice";
import { useDeletePlaylistInShopMutation } from "../../../redux/shopsSlice";

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

const PlaylistListItem = ({
  id,
  title,
  icon,
  genre,
  placeListCardInfo,
  countTracks,
  subCategory,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showModalSuccess, setShowModalSuccess] = useState(false);
  const [showModalError, setShowModalError] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [playlistTitle, setPlaylistTitle] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const ref = useRef(null);

  //прокинуть пропсами
  const minLengthInput = 2;
  const maxLengthInput = 20;
  ////////////
  const [errorValidateMessage, isError, setIsError] = useValidateInput(
    title,
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
    deletePlaylist,
    {
      isLoading,
      isSuccess: isSuccessDeletePlaylist,
      isError: isErrorDeletePlaylist,
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

  if (isEditing) {
    return (
      <MediaItem>
        <EditCardWrapper>
          {isError && (
            <ErrorValidateText>{errorValidateMessage}</ErrorValidateText>
          )}
          <EditWrapper>
            <AddCover
              cover={icon}
              coverAlt={title}
              // handleChooseCover={handleChooseCover}
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
              // onClick={() => updateGenreItem(title)}
              // disabled={isEmptyGenreUpdateData(genreTitle, title)}
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
        </EditCardWrapper>
      </MediaItem>
    );
  }

  return (
    <>
      {!placeListCardInfo ? (
        <MediaItem>
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
              <svg width="24" height="24">
                <use href={`${symbol}#icon-pen`}></use>
              </svg>
            </MediaButton>

            <MediaButton
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
            </MediaButton>
          </MediaIconsWrapper>
        </MediaItem>
      ) : (
        <PlaylistCardInfo>
          <MediaImg
            marginRight={"16px"}
            src={BASE_URL + "/" + icon}
            alt={title}
          />
          <PlaylistInfoWrapper>
            <MediaItemText>{title}</MediaItemText>
            <CountTracks countTracks={countTracks} />
          </PlaylistInfoWrapper>
          <MediaIconsWrapper>
            <svg width="24" height="24">
              <use href={`${symbol}#icon-pen`}></use>
            </svg>

            <MediaButton
              type="button"
              onClick={deleteMediaItem}
              // disabled={isLoading}
              disabled={false}
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
    </>
  );
};

export default PlaylistListItem;
