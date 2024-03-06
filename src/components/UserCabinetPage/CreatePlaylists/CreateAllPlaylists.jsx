import CreatePlayListItem from "./CreatePlaylistItem";
import MediaNavigationLink from "../../NavigationLink/NavigationLink";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  TitleWrapper,
  ControlWrapper,
  MediaList,
  TitleContainer,
} from "../../UserMediaComponent/PlayLists/MediaList.styled";
import { useFavoritePlaylistForUserQuery, useCreatePlaylistForUserMutation, useGetCreatePlaylistsForUserQuery } from "../../../redux/playlistsUserSlice";
import symbol from "../../../assets/symbol.svg";
import ControlMyplaylists from "../ControlMyplaylists/ControlMyplaylists"
import { Modal } from "../../Modal/Modal";
import ModalFormMyplaylist from "../ControlMyplaylists/ModalFormMyplaylist";
import CreatePlaylists from "./CreatePlaylists";

const CreateAllPlaylists = ({
  title,
  displayPlayer,
 showNavigationLink,
//  data:createPlaylists,
   isFetching,
  error,
//   genre,
  // shopCategoryName,
}) => {

  const [showModal, setShowModal] = useState(false);
  const [selectedPlaylistAvatar, setSelectedPlaylistAvatar] = useState(null);

  const {
    data: dataFavorite,
    isLoading: isLoadingFavoritePlaylist,
  } = useFavoritePlaylistForUserQuery();

     const {
    data: createPlaylists,
    // isFetching: isFetchingCreatePlaylists,
    // isSuccess: isSuccesCreatePlaylists,
    // isError: isErrorCreatePlaylists,
  } = useGetCreatePlaylistsForUserQuery();
   const [
    createPlaylist,
    { isSuccess, isLoading: isLoadingCreatePlaylist, isError, isFetching:isFetchingCreatePlaylists },
  ] = useCreatePlaylistForUserMutation();

 

 const handleChoosePlaylistAvatar = (event) => {
    console.log("event", event);
    let file;

    if (event.target.files[0] !== undefined) {
      file = event.target.files[0];
    }
    if (file) {
      setSelectedPlaylistAvatar(file);
      console.log("file", file);
    }
  };

   const formDataFunction = (data) => {
    const formData = new FormData();

    formData.append("playListName", data.playListName),
      formData.append("type", data.type),
      formData.append("picsURL", selectedPlaylistAvatar);

    return formData;
  };

  const handleSubmitPlaylist = async (data) => {
    try {
      await createPlaylist(formDataFunction(data)).unwrap();
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };
  
  const clearImageCover = () => {
    setSelectedPlaylistAvatar(null);
  };
  
  const closeModal = () => {
    clearImageCover();
    return setShowModal(false);
  };
  
  const toogleModal = () => {
    return setShowModal(() => !showModal);
    };
    
  console.log("createPlaylists", createPlaylists)

  return (
    <>
      {/* <TitleContainer>
        <TitleWrapper>{title}</TitleWrapper>
      </TitleContainer> */}
       <ControlMyplaylists
        title={title}
        iconButton={`${symbol}#icon-playlist-add`}
        textButton={"Плейлист"}
        onClick={toogleModal}
      />
      {!isFetching && !error && !isLoadingFavoritePlaylist  && (
        <>
          {/* <ControlWrapper> */}
          {/* <TitleWrapper>Нові плейлисти</TitleWrapper> */}

          {/* </ControlWrapper> */}
          {/* <MediaList>
           
            {createPlaylists?.map(({ _id, playListName, playListAvatarURL }) => {
              // console.log(
              //   "dataFavorite.favorites.includes(_id)",
              //   dataFavorite.favorites.some((item) => item._id === _id)
              // );

              return (

                    <CreatePlayListItem
                      key={_id}
                      id={_id}
                      favoriteStatus={dataFavorite.favorites.some((item) => item._id === _id)}
                       title={playListName}
                      icon={playListAvatarURL}
                      //  shopCategoryName={shopCategoryName}
                    />
                                     
            );

            })}

          </MediaList> */}
                  <CreatePlaylists
                       title={"Cтворені плейлисти"}
            displayPlayer={"none"}
            data={createPlaylists}
            isFetching={isFetchingCreatePlaylists}
            error={isError}
            showNavigationLink={false}
                  />
          {/* <MediaNavigationLink link={"createplaylists"} showNavigationLink={showNavigationLink} /> */}
                  </>
      )}
      {showModal && (
        <Modal width={"814px"} onClose={closeModal} showCloseButton={true}>
             <ModalFormMyplaylist
                onSubmit={handleSubmitPlaylist}
                changePlayListAvatar={handleChoosePlaylistAvatar}
                img={selectedPlaylistAvatar}
                clearImageCover={clearImageCover}
                idInputImg={"picsURL"}
                idInputFirst={"playListName"}
                idInputSecond={"type"}
                marginTopInputFirst="24px"
                valueInputSecond={"playlist"}
                placeholderFirst={`Назва плейлисту*`}
                cover={true}
              />
           </Modal>
      )}
    </>
  );
};

export default CreateAllPlaylists;