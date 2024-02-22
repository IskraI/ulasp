import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";
import { useState, useEffect } from "react";
import { useUpdateFavoriteStatusApiMutation, useUpdateAddStatusApiMutation } from "../../../redux/playlistsUserSlice";
import {
  MediaItem,
  IconsWrapper,
  MediaItemText,
  MediaImg,
  PlaylistCountTracks,
   PlaylistImg,
  PlaylistInfoWrapper,
  PlaylistItemText,
} from "../../UserMediaComponent/PlayLists/MediaList.styled";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";


const FavoritePlaylistsItem = ({ id, title, icon, genre, favoriteStatus, addStatus,
  placeListCardInfo,
  countTracks, }) => {

  const location = useLocation();
  const navigate = useNavigate();

// { _id, title, icon, isFavorite: initialFavorite }
  const [toggleFavorite] = useUpdateFavoriteStatusApiMutation(id);
  const [toggleAdd] = useUpdateAddStatusApiMutation(id);

  // const { data: dataFavorites } = useFavoritePlaylistForUserQuery();
 
  // console.log('favoriteStatus item', favoriteStatus)



  const [isFavorite, setIsFavorite] = useState(favoriteStatus || false);
  
  const [isAdd, setIsAdd] = useState(addStatus || false);
    // const handleToggleFavorite = (playlistId) => {
    //   toggleFavorite(playlistId)
     
  //   };
  
   const cabinet = `/user/cabinet/myplaylists/favoriteplaylists`;
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

  const handleToggleAdd = async () => {
     console.log('playlistId:', id);
    try {
      // Call the API to update the favorite status
      await toggleAdd(id);
      // Update the local state after a successful API call
      setIsAdd((prevIsAdd) => !prevIsAdd);
    } catch (error) {
      console.error('Error updating add status:', error);
    }
  };

  // useEffect(() => {
  //   // Fetch initial favorite status from the backend when the component mounts
  //   if (!favoriteStatus) {
  //     // Use your API call to get the favorite status from the backend
  //     // For example: fetchFavoriteStatusFromBackend(id).then(response => setIsFavorite(response));
  //   }
  // }, [favoriteStatus, id]);

// console.log('isFavorite', isFavorite)
  return (
   
      <MediaItem>
        {!placeListCardInfo ? (
          <Link
            key={id}
            to={
              location.pathname === cabinet
                ? `myplaylists/addplaylists/${id}/tracks`
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

         </IconsWrapper>
      </MediaItem>
    
  );
};

export default FavoritePlaylistsItem ;