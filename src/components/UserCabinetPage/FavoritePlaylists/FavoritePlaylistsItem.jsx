import { useLocation, Link, useHref } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";

import {
  useUpdateFavoriteStatusPlaylistUserMutation,
  useUpdateFavoriteStatusApiMutation,
  useUpdateAddStatusApiMutation,
} from "../../../redux/playlistsUserSlice";
import { getUserState } from "../../../redux/userSelectors";

import CountTracks from "../../EditorComponents/CountTracks/CountTracks";

import {
  MediaItem,
  MediaImg,
  MediaItemText,
  MediaIconsWrapper,
} from "../../UserMediaComponent/MediaList/MediaList.styled";
import { PlaylistInfoWrapper } from "../../UserMediaComponent/PlayLists/PlayLists.styled";
import { LoaderButton } from "../../Loader/Loader";

const FavoritePlaylistsItem = ({
  id,
  title,
  icon,
  genre,
  favoriteStatus,
  addStatus,
  placeListCardInfo,
  countTracks,
  owner,
}) => {
  const location = useLocation();

  const { id: userID } = useSelector(getUserState);
  const [
    toggleFavoritePlaylistUser,
    { isLoading: isLoadingFavoriteStatusPlaylistUser },
  ] = useUpdateFavoriteStatusPlaylistUserMutation(id);
  const [toggleFavorite, { isLoading: isLoadingFavoriteStatusPlaylist }] =
    useUpdateFavoriteStatusApiMutation(id);
  // const [toggleFavoriteUser] = useUp;
  const [toggleAdd] = useUpdateAddStatusApiMutation(id);

  // const [isFavorite, setIsFavorite] = useState(favoriteStatus);

  const [isAdd, setIsAdd] = useState(addStatus || false);

  const itsMy = useMemo(() => {
    if (userID === owner) {
      return true;
    } else {
      return false;
    }
  }, [owner, userID]);

  const handleToggleFavorite = async () => {
    console.log("playlistId:", id);

    try {
      if (itsMy) {
        await toggleFavoritePlaylistUser(id);
      } else {
        await toggleFavorite(id);
      }
      // Call the API to update the favorite status

      // Update the local state after a successful API call
      // setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    } catch (error) {
      console.error("Error updating favorite status:", error);
    }
  };

  const handleToggleAdd = async () => {
    // console.log("playlistId:", id);
    try {
      // Call the API to update the favorite status
      await toggleAdd(id);
      // Update the local state after a successful API call
      setIsAdd((prevIsAdd) => !prevIsAdd);
    } catch (error) {
      console.error("Error updating add status:", error);
    }
  };

  const selectLink = () => {
    if (itsMy) {
      if (location.pathname.includes("favoriteplaylists")) {
        return `/user/cabinet/myplaylists/createplaylists/${id}/tracks`;
      }
      return `createplaylists/${id}/tracks`;
    } else {
      return `${id}/tracks`;
    }
  };

  return (
    <MediaItem>
      {!placeListCardInfo ? (
        <Link
          key={id}
          to={selectLink()}
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
      <MediaIconsWrapper>
        {isLoadingFavoriteStatusPlaylist && (
          <LoaderButton width={"24"} height={"24"} />
        )}
        {isLoadingFavoriteStatusPlaylistUser && (
          <LoaderButton width={"24"} height={"24"} />
        )}
        {!isLoadingFavoriteStatusPlaylist &&
          !isLoadingFavoriteStatusPlaylistUser && (
            <svg
              width="24"
              height="24"
              fill={"#17161C"}
              stroke="#17161C"
              onClick={() => handleToggleFavorite(id)}
              style={{ cursor: "pointer" }}
            >
              <use href={`${symbol}#icon-heart-empty`}></use>
            </svg>
          )}
        {!itsMy && (
          <>
            {!isAdd ? (
              <svg
                width="24"
                height="24"
                onClick={async () => {
                  await handleToggleAdd();
                  setIsAdd(true);
                }}
                style={{ cursor: "pointer" }}
              >
                <use href={`${symbol}#icon-plus`}></use>
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                onClick={async () => {
                  await handleToggleAdd();
                  setIsAdd(false);
                }}
                style={{ cursor: "pointer" }}
              >
                <use href={`${symbol}#icon-check`}></use>
              </svg>
            )}
          </>
        )}
      </MediaIconsWrapper>
    </MediaItem>
  );
};

export default FavoritePlaylistsItem;
