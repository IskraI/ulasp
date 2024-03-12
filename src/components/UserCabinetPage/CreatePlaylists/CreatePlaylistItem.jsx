import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";
import { useState, useEffect } from "react";
import { useUpdateFavoriteStatusApiMutation, useDeletePlaylistForUserMutation, useUpdateAddStatusApiMutation,  useUpdateCabinetPlaylistStatusApiMutation, useUpdatePlaylistTitleMutation } from "../../../redux/playlistsUserSlice";
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
import {
  PlaylistIconsWrapper,
  PlaylistDeleteButton,
} from "./CreatePlaylistItem.syled";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal } from "../../../components/Modal/Modal";
import { ModalInfoText, ModalInfoTextBold } from "../../Modal/Modal.styled";
import { ErrorNotFound } from "../../Errors/Errors";


const CreatePlayListItem = ({ id, title, icon, favoriteStatus, addStatus,
  placeListCardInfo,
  countTracks, }) => {

  const location = useLocation();
  const navigate = useNavigate();

// { _id, title, icon, isFavorite: initialFavorite }
  // const [toggleFavorite] = useUpdateFavoriteStatusApiMutation(id);
//   const [toggleAdd] = useUpdateAddStatusApiMutation(id);
const [toggleFavorite] =  useUpdateCabinetPlaylistStatusApiMutation(id);
  // const { data: dataFavorites } = useFavoritePlaylistForUserQuery();
  const [isEditing, setIsEditing] = useState(false);
  const [playlistTitle, setPlaylistTitle] = useState(title);
  // console.log('favoriteStatus item', favoriteStatus)
 const [
    deletePlaylist,
    {
      isLoading,
      isSuccess: isSuccessDeletePlaylist,
      isError: isErrorDeletePlaylist,
     error: errorDeletePlaylist,
    },
  ] = useDeletePlaylistForUserMutation();

 const [updatePlaylistTitle] = useUpdatePlaylistTitleMutation();
 const [showModalSuccess, setShowModalSucces] = useState(false);
  const [showModalError, setShowModalError] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favoriteStatus || false);
  
  const deleteMediaItem = () => {
   try {
      deletePlaylist(id).unwrap();
  setShowModalSucces(true);
   } catch (error) {
      setShowModalError(true);
    }
  };

   const closeModalSuccess = () => {
    return setShowModalSucces(false);
  };

  const closeModalError = () => {
    return setShowModalError(false);
  };

 const handleUpdatePlaylistTitle = async () => {
    try {
     
      await updatePlaylistTitle({ title: playlistTitle });
       setIsEditing(false);
    } catch (error) {
      console.error("Error updating playlist title:", error);
    }
  };

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
        {!placeListCardInfo ? (
          <Link
            key={id}
            to={`${id}/tracks`}
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
        
       <PlaylistIconsWrapper>
            <svg width="24" height="24"  style={{  marginRight: "4px"}}>
              <use href={`${symbol}#icon-pen`} onClick={() => setIsEditing(true)}></use>
        </svg>
        <IconsWrapper>
          <svg
            width="24"
            height="24"
            fill={isFavorite ? "#17161C" : "none"}
            stroke="#17161C"
             onClick={()=>handleToggleFavorite(id)}
            //  onClick={handleToggleFavorite}
            style={{ cursor: "pointer" , marginRight: "4px"}}
          >
            <use href={`${symbol}#icon-heart-empty`}></use>
          </svg>
      </IconsWrapper>

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
      </MediaItem>
    
     {showModalSuccess &&  isSuccessDeletePlaylist && !isErrorDeletePlaylist && (
        <Modal width={"394px"} onClose={closeModalSuccess}>
          <ModalInfoText marginBottom={"34px"}>
            Плейлист <ModalInfoTextBold>&quot;{title}&quot;</ModalInfoTextBold> був
            видалений
          </ModalInfoText>
        </Modal>
  )
      }
      {showModalError && (
        <Modal width={"394px"} onClose={closeModalError} showCloseButton={true}>
          <ModalInfoText marginBottom={"34px"}>
            {isErrorDeletePlaylist &&
              (<ErrorNotFound error={ errorDeletePlaylist.data.message} /> ?? (
                <ErrorNotFound />
              ))}
                       
          </ModalInfoText>
        </Modal>
      )}
  </>
  );
};

export default CreatePlayListItem;