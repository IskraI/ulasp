/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import MediaNavigationLink from "../../NavigationLink/NavigationLink";
import ControlMediateca from "../ControlMediateca/ControlMediaTeca";
import ModalForm from "../ControlMediateca/ModalForm";
import PlaylistListItem from "./PlayListItemShop";
import { Modal } from "../../Modal/Modal";
import symbol from "../../../assets/symbol.svg";
import { ErrorNotFound } from "../../Errors/Errors";

import { PlaylistWrapper, PlaylistList } from "./PlayLists.styled";
import { ModalInfoText, ModalInfoTextBold } from "../../Modal/Modal.styled";
import { LoaderButton } from "../../Loader/Loader";
import { MediaItem } from "../MediaList/MediaList.styled";

const Playlists = ({
  title,
  data: playlists = [],
  isFetchingPlaylist,
  error,
  showNavigationLink,
  handleCreatePlaylist,
  onChangePlaylistAvatar,
  closeCreatePlaylistModal,
  typeMediaLibrary,
  idTypeOfMediaLibrary,
  isLoadingCreatePlaylist,
  isSuccessCreatePlaylist,
  isErrorCreatePlaylist,
  errorCreatePlaylist,
  newPlaylistName,
}) => {
  console.log(playlists);

  const [showModal, setShowModal] = useState(false);
  const [showModalSuccess, setShowModalSuccess] = useState(false);
  const [showModalError, setShowModalError] = useState(false);

  const [selectedPlaylistAvatar, setSelectedPlaylistAvatar] = useState(null);

  const handleChoosePlaylistAvatar = (event) => {
    let file;

    if (event.target.files[0] !== undefined) {
      file = event.target.files[0];
    }
    if (file) {
      setSelectedPlaylistAvatar(file);
    }
  };

  useEffect(
    () => onChangePlaylistAvatar(selectedPlaylistAvatar),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedPlaylistAvatar]
  );

  useEffect(() => {
    if (closeCreatePlaylistModal() === true) {
      closeCreatePlaylistModal(closeModal()), console.log("Сработал еффект");
    } else {
      return;
    }
  });

  useEffect(() => {
    if (isSuccessCreatePlaylist && !isErrorCreatePlaylist) {
      setShowModalSuccess(true);
    }
    if (isErrorCreatePlaylist) {
      setShowModalError(true);
    }
  }, [isErrorCreatePlaylist, isSuccessCreatePlaylist]);

  useEffect(() => {
    if (showModalSuccess) {
      setTimeout(() => setShowModalSuccess(false), 2000);
    }
  }, [showModalSuccess]);

  const clearImageCover = () => {
    setSelectedPlaylistAvatar(null);
  };

  const closeModal = () => {
    clearImageCover();
    return setShowModal(false);
  };

  const toogleModal = () => {
    return setShowModal(!showModal);
  };

  const closeModalSuccess = () => {
    return setShowModalSuccess(false);
  };

  const closeModalError = () => {
    return setShowModalError(false);
  };

  console.log(error);

  return (
    <>
      <ControlMediateca
        title={title}
        iconButton={`${symbol}#icon-playlist-add`}
        textButton={"Плейлист"}
        onClick={toogleModal}
      />
      {!isFetchingPlaylist &&
        !error &&
        !playlists.length &&
        !isLoadingCreatePlaylist && <p>Плейлисти ще не додані</p>}

      {!error && (
        <PlaylistWrapper>
          <PlaylistList>
            {isLoadingCreatePlaylist && (
              <MediaItem>
                <LoaderButton />
                <p>Playlist creating...</p>
              </MediaItem>
            )}
            {playlists.map(({ _id, playListName, playListAvatarURL }) => (
              <PlaylistListItem
                key={_id}
                id={_id}
                mediaLibraryName={title}
                title={playListName}
                icon={playListAvatarURL}
                typeMediaLibrary={typeMediaLibrary}
                idTypeOfMediaLibrary={idTypeOfMediaLibrary}
                isLoadingCreatePlaylist={isLoadingCreatePlaylist}
              />
            ))}
          </PlaylistList>
          <MediaNavigationLink
            link={"newplaylists"}
            showNavigationLink={showNavigationLink}
          />
        </PlaylistWrapper>
      )}
      {showModal && (
        <Modal width={"814px"} onClose={closeModal} showCloseButton={true}>
          <ModalForm
            onSubmit={handleCreatePlaylist}
            changePlayListAvatar={handleChoosePlaylistAvatar}
            img={selectedPlaylistAvatar}
            clearImageCover={clearImageCover}
            idInputImg={"picsURL"}
            idInputFirst={"playListName"}
            idInputSecond={"type"}
            valueInputSecond={"playlist"}
            placeholderFirst={"Назва плейлисту*"}
            cover={true}
            marginTopInputFirst="24px"
          />
        </Modal>
      )}
      {showModalSuccess &&
        isSuccessCreatePlaylist &&
        !isErrorCreatePlaylist && (
          <Modal
            width={"394px"}
            onClose={closeModalSuccess}
            showCloseButton={true}
          >
            <ModalInfoText marginBottom={"34px"}>
              Плейлист
              <ModalInfoTextBold>
                &quot;{newPlaylistName}&quot;
              </ModalInfoTextBold>
              був створений
            </ModalInfoText>
          </Modal>
        )}
      {showModalError && isErrorCreatePlaylist && (
        <Modal width={"494px"} onClose={closeModalError} showCloseButton={true}>
          <ModalInfoText>
            {errorCreatePlaylist.data.code === "4091" ? (
              <ErrorNotFound
                error={`Плейлист ${errorCreatePlaylist.data.object} вже використовується`}
              />
            ) : errorCreatePlaylist.data ? (
              <ErrorNotFound error={`${errorCreatePlaylist.data.message}`} />
            ) : (
              <ErrorNotFound />
            )}
          </ModalInfoText>
        </Modal>
      )}
    </>
  );
};

export default Playlists;
