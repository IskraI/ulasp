import { useState, useMemo } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";
import CountTracks from "../../EditorComponents/CountTracks/CountTracks";

import {
  useUpdateFavoriteStatusApiMutation,
  useUpdateAddStatusApiMutation,
  useFavoritePlaylistForUserQuery,
  useUpdateFavoriteStatusPlaylistUserMutation,
} from "../../../redux/playlistsUserSlice";
import { getUserState } from "../../../redux/userSelectors";
import { PlaylistInfoWrapper } from "./PlayLists.styled";

import {
  MediaItem,
  MediaImg,
  MediaItemText,
  MediaIconsWrapper,
} from "../MediaList/MediaList.styled";
import { LoaderButton } from "../../Loader/Loader";

const PlayListItem = ({
  id,
  title,
  icon,
  genre,
  favoriteStatus,
  addStatus,
  placeListCardInfo,
  countTracks,
  showPlusBtn = true,
  owner,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id: userID } = useSelector(getUserState);
  // { _id, title, icon, isFavorite: initialFavorite }
  const [toggleFavorite, { isLoading: isLoadingFavoriteStatus }] =
    useUpdateFavoriteStatusApiMutation(id);
  const [
    toggleFavoritePlaylistUser,
    { isLoading: isLoadingFavoriteStatusPlaylistUser },
  ] = useUpdateFavoriteStatusPlaylistUserMutation(id);
  const [toggleAdd] = useUpdateAddStatusApiMutation(id);
  // const [favoriteStatus] = useFavoritePlaylistForUserQuery();

  // const { data: dataFavorites } = useFavoritePlaylistForUserQuery();

  // console.log("favoriteStatus item", favoriteStatus);

  const [isFavorite, setIsFavorite] = useState(favoriteStatus || false);

  const [isAdd, setIsAdd] = useState(addStatus || false);
  // const handleToggleFavorite = (playlistId) => {
  //   toggleFavorite(playlistId)

  //   };

  const cabinet = `/user/cabinet/myplaylists/createplaylists`;
  const newPlaylists = `/user/medialibrary/newplaylists/${id}/tracks`;

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
      // Call the API to update the favorite status
      if (itsMy) {
        await toggleFavoritePlaylistUser(id);
      } else {
        await toggleFavorite(id);
      }
      // Update the local state after a successful API call
      setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    } catch (error) {
      console.error("Error updating favorite status:", error);
    }
  };

  const handleToggleAdd = async () => {
    console.log("playlistId:", id);
    try {
      // Call the API to update the favorite status
      await toggleAdd(id);
      // Update the local state after a successful API call
      setIsAdd((prevIsAdd) => !prevIsAdd);
    } catch (error) {
      console.error("Error updating add status:", error);
    }
  };

  // useEffect(() => {
  //   // Fetch initial favorite status from the backend when the component mounts
  //   if (!favoriteStatus) {
  //     // Use your API call to get the favorite status from the backend
  //     // For example: fetchFavoriteStatusFromBackend(id).then(response => setIsFavorite(response));
  //   }
  // }, [favoriteStatus, id]);

  // console.log("isLoadingeFavoriteStatus", isLoadingFavoriteStatus);
  return (
    <MediaItem>
      {!placeListCardInfo ? (
        <Link
          key={id}
          to={
            location.pathname === cabinet
              ? `myplaylists/createplaylists/${id}/tracks`
              : `${id}/tracks`
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
      <MediaIconsWrapper>
        {isLoadingFavoriteStatus && <LoaderButton width={"24"} height={"24"} />}
        {isLoadingFavoriteStatusPlaylistUser && (
          <LoaderButton width={"24"} height={"24"} />
        )}

        {!isLoadingFavoriteStatus && !isLoadingFavoriteStatusPlaylistUser && (
          <svg
            width="24"
            height="24"
            fill={isFavorite ? "#17161C" : "none"}
            stroke="#17161C"
            onClick={() => handleToggleFavorite(id)}
            style={{ cursor: "pointer" }}
          >
            <use href={`${symbol}#icon-heart-empty`}></use>
          </svg>
        )}

        {showPlusBtn && (
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

export default PlayListItem;
