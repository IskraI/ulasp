import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";
import { useDeletePlaylistMutation } from "../../../redux/playlistsSlice";
import { useDeletePlaylistInGenreMutation } from "../../../redux/genresSlice";
import { useLocation } from "react-router-dom";

import {
  PlaylistItem,
  PlaylistImg,
  PlaylistItemText,
  PlaylistIconsWrapper,
  PlaylistDeleteButton,
} from "./PlayLists.styled";

import { Link } from "react-router-dom";
import { Modal } from "../../Modal/Modal";

const PlaylistListItem = ({ id, title, icon, genre, placeListCardInfo }) => {
  const location = useLocation();

  const mediaLibrary = `/editor/medialibrary`;

  console.log(location.pathname === mediaLibrary);

  const [deletePlaylist, { isLoading }] = useDeletePlaylistMutation();
  const [deletePlaylistInGenre, { isSuccess }] =
    useDeletePlaylistInGenreMutation();

  const deleteMediaItem = () => {
    if (genre) {
      deletePlaylistInGenre(id);
    }

    deletePlaylist(id);
  };
  return (
    <>
      <PlaylistItem>
        <Link
          key={id}
          to={
            location.pathname === mediaLibrary
              ? `playlists/${id}/tracks`
              : `${id}/tracks`
          }
          state={{ from: location }}
          disabled={!placeListCardInfo ? true : false}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <PlaylistImg src={BASE_URL + "/" + icon} alt={title} />
          <PlaylistItemText>{title}</PlaylistItemText>
        </Link>

        {/* {!placeListCardInfo ? (
          <Link
            key={id}
            // to={placeListCardInfo ? `${id}/tracks` : null}
            to={`${id}/tracks`}
            state={{ from: location }}
            // disabled={!placeListCardInfo ? true : false}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <PlaylistImg src={BASE_URL + "/" + icon} alt={title} />
            <PlaylistItemText>{title}</PlaylistItemText>
          </Link>
        ) : (
          <>
            <PlaylistImg src={BASE_URL + "/" + icon} alt={title} />
            <PlaylistItemText>{title}</PlaylistItemText>
          </>
        )} */}
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
      {/* {data && (
        <Modal width={"814px"}>
          <p>{data.message}</p>
        </Modal>
      )} */}
    </>
  );
};

export default PlaylistListItem;
