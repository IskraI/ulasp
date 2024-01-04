import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";
import { useState, useEffect } from "react";
import { useUpdateFavoriteStatusApiMutation, useFavoritePlaylistForUserQuery } from "../../../redux/playlistsUserSlice";
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


const PlayListItem = ({ id, title, icon, isFavorite: initialFavorite, genre,
  placeListCardInfo,
  countTracks, }) => {

  const location = useLocation();
  const navigate = useNavigate();

// { _id, title, icon, isFavorite: initialFavorite }
  const [toggleFavorite] = useUpdateFavoriteStatusApiMutation(id);
  const { data: favoriteStatus } = useFavoritePlaylistForUserQuery(id);
    const [isFavorite, setIsFavorite] = useState(favoriteStatus || false);
    
    // const handleToggleFavorite = (playlistId) => {
    //   toggleFavorite(playlistId)
     
  //   };
  
   const mediaLibrary = `/user/medialibrary`;
  const newPlaylists = `/user/medialibrary/newplaylists/${id}/tracks`;

 

  const handleToggleFavorite = async () => {
     console.log('playlistId:', id);
    try {
      // Call the API to update the favorite status
      await toggleFavorite(id);
      // Update the local state after a successful API call
      setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    } catch (error) {
      console.error('Error updating favorite status:', error);
    }
  };

  useEffect(() => {
    // Fetch initial favorite status from the backend when the component mounts
    if (!favoriteStatus) {
      // Use your API call to get the favorite status from the backend
      // For example: fetchFavoriteStatusFromBackend(id).then(response => setIsFavorite(response));
    }
  }, [favoriteStatus, id]);


  return (
    <>
      <MediaItem>
        {!placeListCardInfo ? (
          <Link
            key={id}
            to={
              location.pathname === mediaLibrary
                ? `newplaylists/${id}/tracks`
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
            </Link>):(<>
            <PlaylistImg src={BASE_URL + "/" + icon} alt={title} />
            <PlaylistInfoWrapper>
              <PlaylistItemText>{title}</PlaylistItemText>
              <PlaylistCountTracks>
                {countTracks + `${" "}` + "пісень"}
              </PlaylistCountTracks>
            </PlaylistInfoWrapper>
          </>
        )}
        <IconsWrapper>
          <svg
            width="24"
            height="24"
            fill={isFavorite ? "#17161C" : "none"}
            stroke="#17161C"
             onClick={()=>handleToggleFavorite(id)}
            //  onClick={handleToggleFavorite}
            style={{ cursor: "pointer" }}
          >
            <use href={`${symbol}#icon-heart-empty`}></use>
          </svg>

          <svg width="24" height="24">
            <use href={`${symbol}#icon-check`}></use>
          </svg>
        </IconsWrapper>
      </MediaItem>
    </>
  );
};

export default PlayListItem;