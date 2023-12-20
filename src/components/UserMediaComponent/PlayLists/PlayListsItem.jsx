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

const PlayListItem = ({ playlistId, title, icon, isFavorite: initialFavorite }) => {
// { _id, title, icon, isFavorite: initialFavorite }
const [toggleFavorite] = useUpdateFavoriteStatusApiMutation();
    const [isFavorite, setIsFavorite] = useState(initialFavorite);
    
    // const handleToggleFavorite = () => {
    //           setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    // }
    const handleToggleFavorite = (playlistId) => {
      toggleFavorite(playlistId)
     
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
            fill={isFavorite ? "#17161C" : "#1dca57"}
            stroke="#17161C"
            onClick={()=>handleToggleFavorite(playlistId)}
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