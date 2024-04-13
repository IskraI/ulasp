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
import {
  useFavoritePlaylistForUserQuery,
  useCreatePlaylistForUserMutation,
  useGetCreatePlaylistsForUserQuery,
} from "../../../redux/playlistsUserSlice";
import symbol from "../../../assets/symbol.svg";
import ControlMyplaylists from "../ControlMyplaylists/ControlMyplaylists";
import { Modal } from "../../Modal/Modal";
import ModalFormMyplaylist from "../ControlMyplaylists/ModalFormMyplaylist";
import CreatePlaylists from "./CreatePlaylists";
// import AddPlaylists from "../AddPlaylists/AddPlaylists";

const CreateAllPlaylists = ({}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlaylistAvatar, setSelectedPlaylistAvatar] = useState(null);

  const { data: dataFavorite, isLoading: isLoadingFavoritePlaylist } =
    useFavoritePlaylistForUserQuery();

  const {
    data: createPlaylists,
    isFetching: isFetchingGetCreatePlaylists,
    isSuccess: isSuccesCreatePlaylists,
    isError: isErrorCreatePlaylists,
  } = useGetCreatePlaylistsForUserQuery({ page: 1 });
  const [
    createPlaylist,
    {
      isSuccess,
      isLoading: isLoadingCreatePlaylist,
      isError,
      isFetching: isFetchingCreatePlaylists,
    },
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

  console.log("createPlaylists", createPlaylists);

  if (isFetchingCreatePlaylists) {
    return <div style={{ width: "100%" }}>Хуй на на </div>;
  }

  return (
    <>
      {isSuccesCreatePlaylists && !isError && !isLoadingFavoritePlaylist && (
        <CreatePlaylists
          title={"Cтворені плейлисти"}
          dataFavorite={dataFavorite}
          data={createPlaylists}
          isFetching={isFetchingCreatePlaylists}
          error={isError}
          showNavigationLink={false}
        />
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
