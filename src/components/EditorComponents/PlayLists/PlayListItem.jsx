import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";
import { useDeletePlaylistMutation } from "../../../redux/playlistsSlice";
import { useLocation } from "react-router-dom";

import {
  PlaylistItem,
  PlaylistImg,
  PlaylistItemText,
  PlaylistIconsWrapper,
  PlaylistDeleteButton,
} from "./PlayLists.styled";

import { Link } from "react-router-dom";

const PlaylistListItem = ({ id, title, icon, refetch }) => {
  const location = useLocation();

  const [deletePlaylist, { isLoading }] = useDeletePlaylistMutation();
  const deleteMediaItem = () => {
    deletePlaylist(id);
    // refetch();
  };
  return (
    <>
      <PlaylistItem>
        <Link
          key={id}
          to={`${id}/tracks`}
          state={{ from: location }}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <PlaylistImg src={BASE_URL + "/" + icon} alt={title} />
          <PlaylistItemText>{title}</PlaylistItemText>
        </Link>
        <PlaylistIconsWrapper>
          <svg width="24" height="24">
            <use href={`${symbol}#icon-pen`}></use>
          </svg>

          <PlaylistDeleteButton
            type="button"
            onClick={deleteMediaItem}
            // disabled={isLoading}
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
    </>
  );
};

export default PlaylistListItem;
