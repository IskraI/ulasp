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
  PlaylistItem,
  PlaylistImg,
  PlaylistInfoWrapper,
  PlaylistItemText,
  PlaylistIconsWrapper,
  PlaylistDeleteButton,
  PlaylistCardInfo,
  LinkToTracks,
  EditWrapper,
  EditCardWrapper,
  EditInputText,
  PlaylistButton,
  SvgPlaylist,
} from "./PlayLists.styled";

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

  const PropsPlayListItem = {
    marginRight: placeListCardInfo ? "16px" : "auto",
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
      <PlaylistItem>
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
          <PlaylistIconsWrapper>
            <PlaylistButton
              type="button"
              // onClick={() => updateGenreItem(title)}
              // disabled={isEmptyGenreUpdateData(genreTitle, title)}
            >
              <SvgPlaylist width="24" height="24">
                <use href={`${symbol}#icon-check-in`}></use>
              </SvgPlaylist>
            </PlaylistButton>
            <PlaylistButton type="button" onClick={handleCloseEdit}>
              <SvgPlaylist width="24" height="24">
                <use href={`${symbol}#icon-close`}></use>
              </SvgPlaylist>
            </PlaylistButton>
          </PlaylistIconsWrapper>
        </EditCardWrapper>
      </PlaylistItem>
    );
  }

  return (
    <>
      {!placeListCardInfo ? (
        <PlaylistItem>
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
            <PlaylistImg
              marginRight={PropsPlayListItem.marginRight}
              src={BASE_URL + "/" + icon}
              alt={title}
            />
            <PlaylistItemText>{title}</PlaylistItemText>
          </LinkToTracks>
          <PlaylistIconsWrapper>
            <PlaylistButton type="button" onClick={editPlaylist}>
              <svg width="24" height="24">
                <use href={`${symbol}#icon-pen`}></use>
              </svg>
            </PlaylistButton>

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
        </PlaylistItem>
      ) : (
        <PlaylistCardInfo>
          <PlaylistImg
            marginRight={PropsPlayListItem.marginRight}
            src={BASE_URL + "/" + icon}
            alt={title}
          />
          <PlaylistInfoWrapper>
            <PlaylistItemText>{title}</PlaylistItemText>
            <CountTracks countTracks={countTracks} />
          </PlaylistInfoWrapper>
          <PlaylistIconsWrapper>
            <svg width="24" height="24">
              <use href={`${symbol}#icon-pen`}></use>
            </svg>

            <PlaylistDeleteButton
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
            </PlaylistDeleteButton>
          </PlaylistIconsWrapper>
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
