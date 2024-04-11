import { useState } from "react";

import PlayListItemForAdd from "./PlayListsItemForAddUser";
import ModalFormMyplaylist from "../../UserCabinetPage/ControlMyplaylists/ModalFormMyplaylist";
import ControlMyplaylists from "../../UserCabinetPage/ControlMyplaylists/ControlMyplaylists";

import useChooseAvatar from "../../../hooks/useChooseAvatar";

import { Modal } from "../../Modal/Modal";

import { ErrorNotFound } from "../../Errors/Errors";

import { useCreatePlaylistForUserMutation } from "../../../redux/playlistsUserSlice";

import { ModalInfoText } from "../../Modal/Modal.styled";

import {
  TitleWrapperModal,
  MediaList,
  TitleContainer,
  ControlWrapper,
  PlaylistModalContainer,
} from "./MediaList.styled";

import symbol from "../../../assets/symbol.svg";

const PlaylistsForAdd = ({
  title,
  trackId,
  data: playlists,
  isFetching,
  error,
  handleCloseModal,
  addTrackInPlaylistUser,
}) => {
  const minLength = 1;
  const maxLength = 29;

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

  const [showModal, setShowModal] = useState(false);
  const [showModalErrorCreate, setShowModalErrorCreate] = useState(false);

  const closeModal = () => setShowModal(false);
  const toogleModal = () => setShowModal(() => !showModal);

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

  // console.log('dataAdd playlist', dataAdd.add )
  console.log("PlaylistsForAdd playlist", playlists);

  return (
    <PlaylistModalContainer>
      {/* {playlists.length === 0 && handleCloseModal()} */}

      <>
        <TitleWrapperModal>
          {playlists.length > 0 ? title : "Створіть свій плейлист"}
          <ControlMyplaylists
            iconButton={`${symbol}#icon-playlist-add`}
            textButton={"Плейлист"}
            onClick={toogleModal}
          />
        </TitleWrapperModal>

        {!isFetching && !error && (
          <>
            {playlists.length > 0 && (
              <MediaList>
                {playlists.map(({ _id, playListName, playListAvatarURL }) => {
                  return (
                    <PlayListItemForAdd
                      key={_id}
                      id={_id}
                      title={playListName}
                      icon={playListAvatarURL}
                      trackId={trackId}
                      addTrackInPlaylistUser={addTrackInPlaylistUser}
                    />
                  );
                })}
              </MediaList>
            )}
          </>
        )}
      </>
      {showModal && (
        <Modal width={"814px"} onClose={closeModal} showCloseButton={true}>
          <ModalFormMyplaylist
            onSubmit={handleSubmitPlaylist}
            changePlayListAvatar={chooseAvatar}
            img={avatar}
            clearImageCover={() => resetAvatar(null)}
            idInputImg={"picsURL"}
            idInputFirst={"playListName"}
            idInputSecond={"type"}
            marginTopInputFirst="24px"
            valueInputSecond={"playlist"}
            placeholderFirst={`Назва плейлисту*`}
            cover={true}
            minLength={minLength}
            maxLength={maxLength}
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
    </PlaylistModalContainer>
  );
};

export default PlaylistsForAdd;
