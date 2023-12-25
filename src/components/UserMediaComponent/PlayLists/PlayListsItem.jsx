import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";
import { useState } from "react";
import { useUpdateFavoriteStatusApiMutation } from "../../../redux/playlistsUserSlice";
import {
  MediaItem,
  IconsWrapper,
  MediaItemText,
  MediaImg,
} from "./MediaList.styled";


const PlayListItem = ({ id, title, icon, isFavorite: initialFavorite }) => {


// { _id, title, icon, isFavorite: initialFavorite }
const [toggleFavorite] = useUpdateFavoriteStatusApiMutation(id);
    const [isFavorite, setIsFavorite] = useState(initialFavorite);
    
    // const handleToggleFavorite = (playlistId) => {
    //   toggleFavorite(playlistId)
     
    //   };
 

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