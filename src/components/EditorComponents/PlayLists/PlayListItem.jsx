/* eslint-disable react/prop-types */
import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";
import { useDeletePlaylistMutation } from "../../../redux/playlistsSlice";
import { useDeletePlaylistInGenreMutation } from "../../../redux/genresSlice";

import {
  PlaylistItem,
  PlaylistImg,
  PlaylistInfoWrapper,
  PlaylistItemText,
  PlaylistCountTracks,
  PlaylistIconsWrapper,
  PlaylistDeleteButton,
  PlaylistCardInfo,
  LinkToTracks,
} from "./PlayLists.styled";

import { Modal } from "../../Modal/Modal";
import { getNoun } from "../../../helpers/helpers";

import { useLocation, useNavigate } from "react-router-dom";

const PlaylistListItem = ({
  id,
  title,
  icon,
  genre,
  placeListCardInfo,
  countTracks,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const tracksCount = getNoun(countTracks, "пісня", "пісні", "пісень");

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

  if (
    location.pathname === newPlaylists &&
    isSuccessDeletePlaylist &&
    !isErrorDeletePlaylist
  ) {
    navigate(`${mediaLibrary}/newplaylists`);
  }

  const deleteMediaItem = () => {
    if (genre) {
      deletePlaylistInGenre(id);
    }

    deletePlaylist(id);
  };

  const PropsPlayListItem = {
    marginRight: placeListCardInfo ? "16px" : "auto",
  };

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
            <svg width="24" height="24">
              <use href={`${symbol}#icon-pen`}></use>
            </svg>

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
            <PlaylistCountTracks>
              {countTracks + `${" "}` + tracksCount}
            </PlaylistCountTracks>
          </PlaylistInfoWrapper>
          <PlaylistIconsWrapper>
            <svg width="24" height="24">
              <use href={`${symbol}#icon-pen`}></use>
            </svg>

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
        </PlaylistCardInfo>
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
