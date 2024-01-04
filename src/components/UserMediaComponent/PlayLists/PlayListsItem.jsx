import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";
import { useState, useEffect } from "react";
import { useUpdateFavoriteStatusApiMutation, useFavoritePlaylistForUserQuery } from "../../../redux/playlistsUserSlice";
import {
  MediaItem,
  IconsWrapper,
  MediaItemText,
  MediaImg,
} from "./MediaList.styled";

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
        <MediaImg src={BASE_URL + "/" + icon} alt={title} />
        <MediaItemText>{title}</MediaItemText>
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