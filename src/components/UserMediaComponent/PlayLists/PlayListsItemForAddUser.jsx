import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";
import { useState, useEffect } from "react";
import {
  useAddTrackByIdToPlaylistUserMutation,
  useUpdateFavoriteStatusApiMutation,
} from "../../../redux/playlistsUserSlice";
import { Button } from "../../Button/Button";
import {
  MediaItem,
  IconsWrapper,
  MediaItemText,
  MediaImg,
  PlaylistCountTracks,
  PlaylistImg,
  PlaylistInfoWrapper,
  PlaylistItemText,
} from "./MediaList.styled";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const PlayListItemForAdd = ({
  id,
  title,
  icon,
  countTracks,
  placeListCardInf,
  favoriteStatus,
  handleAddTrackInPlaylist,
  trackId,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [toggleFavorite] = useUpdateFavoriteStatusApiMutation(id);

  //хук который отправляет запрос на бек
  const [
    addTrackToPlaylist,
    { data: dataAddTrackToPlaylist, isLoading: isLoadingAddTrackToPlaylist },
  ] = useAddTrackByIdToPlaylistUserMutation();
  //функция которая вызывается при клике на плейлист и вызывает хук
  const addTrackInPlaylistUser = (id) => {
    console.log("playlistUserForAdd :>> ", id);
    console.log("trackId :>> ", trackId);

    addTrackToPlaylist({ id, trackId }).then(() => {
      console.log("добавили :>> ");
    });
  };

  return (
    <MediaItem width={"220px"} padding={"0px"}>
      {/* {!placeListCardInfo ? (
        <>
          <MediaImg src={BASE_URL + "/" + icon} alt={title} />
          <MediaItemText>{title}</MediaItemText>
        </>
      ) : ( */}
      <Button
        type="button"
        width={"inherit"}
        text={title}
        padding={"10px"}
        border={"none"}
        showImg={"true"}
        imgSrc={`${BASE_URL}/${icon}`}
        onClick={() => addTrackInPlaylistUser(id)}
        borderHover={"none"}
      >
        <PlaylistImg src={BASE_URL + "/" + icon} alt={title} />
        <PlaylistInfoWrapper>
          {/* <PlaylistItemText>{title}</PlaylistItemText> */}
          <PlaylistCountTracks>
            {countTracks + `${" "}` + "пісень"}
          </PlaylistCountTracks>
        </PlaylistInfoWrapper>
        rjvbvbvbb vcgg
      </Button>

      {/* )} */}
      {/* <IconsWrapper>
          <svg
            width="24"
            height="24"
            fill={favoriteStatus ? "#17161C" : "none"}
            stroke="#17161C"
            style={{ cursor: "pointer" }}
          >
            <use href={`${symbol}#icon-heart-empty`}></use>
          </svg>
        </IconsWrapper> */}
    </MediaItem>
  );
};

export default PlayListItemForAdd;
