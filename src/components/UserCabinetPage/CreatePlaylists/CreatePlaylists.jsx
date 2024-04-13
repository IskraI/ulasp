import { useState } from "react";

import CreatePlayListItem from "./CreatePlaylistItem";
import MediaNavigationLink from "../../NavigationLink/NavigationLink";

import {
  TitleWrapper,
  ControlWrapper,
  MediaList,
  TitleContainer,
} from "../../UserMediaComponent/PlayLists/MediaList.styled";
import {
  useFavoritePlaylistForUserQuery,
  useCreatePlaylistForUserMutation,
} from "../../../redux/playlistsUserSlice";
import symbol from "../../../assets/symbol.svg";
import ControlMyplaylists from "../ControlMyplaylists/ControlMyplaylists";
import { Modal } from "../../Modal/Modal";
import { ModalInfoText } from "../../Modal/Modal.styled";
import { ErrorNotFound, NoData } from "../../Errors/Errors";
import ModalFormMyplaylist from "../ControlMyplaylists/ModalFormMyplaylist";

import useChooseAvatar from "../../../hooks/useChooseAvatar";

const CreatePlaylists = ({
  title,
  showNavigationLink,
  data: createPlaylists,
  dataFavorite,
  isFetching,
  error,

  //   genre,
  // shopCategoryName,
}) => {
  const minLengthInput = 1;
  const maxLengthInput = 29;

  const [showModal, setShowModal] = useState(false);
  const [showModalErrorCreate, setShowModalErrorCreate] = useState(false);

  // const {
  //   data: dataFavorite,
  //   isLoading: isLoadingFavoritePlaylist,
  // } = useFavoritePlaylistForUserQuery();

  const [
    createPlaylist,
    {
      isSuccess,
      isLoading: isLoadingCreatePlaylist,
      isError: isErrorCreatePlaylist,
      error: errorCreatePlaylist,
    },
  ] = useCreatePlaylistForUserMutation();

  const [avatar, chooseAvatar, resetAvatar] = useChooseAvatar();

  const formDataFunction = (data) => {
    const formData = new FormData();

    formData.append("playListName", data.playListName),
      formData.append("type", data.type),
      formData.append("picsURL", avatar);

    return formData;
  };

  const handleSubmitPlaylist = async (data) => {
    try {
      await createPlaylist(formDataFunction(data)).unwrap();

      closeModal();
    } catch (error) {
      console.log(error);
      setShowModalErrorCreate(true);
    }
  };

  const clearImageCover = () => resetAvatar(null);
  const closeModal = () => {
    clearImageCover();
    return setShowModal(false);
  };

  const toogleModal = () => setShowModal(() => !showModal);
  return (
    <>
      <ControlMyplaylists
        title={title}
        iconButton={`${symbol}#icon-playlist-add`}
        textButton={"Плейлист"}
        onClick={toogleModal}
      />
      {createPlaylists.length === 0 && (
        <NoData
          text={"Ви ще не створили жодного плейлиста"}
          textColor={"grey"}
        />
      )}
      {!error && (
        <>
          <MediaList>
            {createPlaylists?.map(
              ({ _id, playListName, playListAvatarURL }) => {
                return (
                  <CreatePlayListItem
                    key={_id}
                    id={_id}
                    favoriteStatus={dataFavorite.favorites.some(
                      (item) => item._id === _id
                    )}
                    title={playListName}
                    icon={playListAvatarURL}
                    minLength={minLengthInput}
                    maxLength={maxLengthInput}
                    createPlaylists={createPlaylists}
                  />
                );
              }
            )}
          </MediaList>
          <MediaNavigationLink
            link={"createplaylists"}
            showNavigationLink={showNavigationLink}
          />
        </>
      )}
      {showModal && (
        <Modal width={"814px"} onClose={closeModal} showCloseButton={true}>
          <ModalFormMyplaylist
            onSubmit={handleSubmitPlaylist}
            changePlayListAvatar={chooseAvatar}
            img={avatar}
            clearImageCover={clearImageCover}
            idInputImg={"picsURL"}
            idInputFirst={"playListName"}
            idInputSecond={"type"}
            marginTopInputFirst="24px"
            valueInputSecond={"playlist"}
            placeholderFirst={`Назва плейлисту*`}
            cover={true}
            minLength={minLengthInput}
            maxLength={maxLengthInput}
          />
        </Modal>
      )}
      {showModalErrorCreate && (
        <Modal
          width={"25vw"}
          height={"25vh"}
          onClose={() => setShowModalErrorCreate(false)}
          showCloseButton={true}
        >
          <ModalInfoText fontSize={"20px"} marginBottom={"34px"}>
            {isErrorCreatePlaylist &&
            errorCreatePlaylist.data?.code === "4091" ? (
              <ErrorNotFound
                error={`Плейлист "${errorCreatePlaylist.data?.object}" вже використовується`}
              />
            ) : (
              <ErrorNotFound error={errorCreatePlaylist.data?.message} />
            )}
          </ModalInfoText>
        </Modal>
      )}
    </>
  );
};

export default CreatePlaylists;
