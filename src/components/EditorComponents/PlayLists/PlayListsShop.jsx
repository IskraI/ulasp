/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import MediaNavigationLink from "../../NavigationLink/NavigationLink";
import ControlMediateca from "../ControlMediateca/ControlMediaTeca";
import ModalForm from "../ControlMediateca/ModalForm";
import PlaylistListItem from "./PlayListItemShop";
import { Modal } from "../../Modal/Modal";
import symbol from "../../../assets/symbol.svg";
import { ErrorNotFound } from "../../Errors/Errors";
import useChooseAvatar from "../../../hooks/useChooseAvatar";

import { PlaylistWrapper, PlaylistList } from "./PlayLists.styled";
import { ModalInfoText } from "../../Modal/Modal.styled";
import { LoaderButton } from "../../Loader/Loader";
import { MediaItem } from "../MediaList/MediaList.styled";

const Playlists = ({
  title,
  data: playlists = [],
  ownShopPlaylists = [],
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
  minLengthInput = 2,
  maxLengthInput = 29,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalSuccess, setShowModalSuccess] = useState(false);
  const [showModalError, setShowModalError] = useState(false);

  const [avatar, setAvatar, clearAvatar] = useChooseAvatar();

  useEffect(() => {
    if (avatar !== undefined || null) {
      onChangePlaylistAvatar(avatar);
    }
  }, [avatar, onChangePlaylistAvatar]);

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
    clearAvatar(null);
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
                minLengthInput={minLengthInput}
                maxLengthInput={maxLengthInput}
                ownShopPlaylists={ownShopPlaylists}
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
            changePlayListAvatar={setAvatar}
            img={avatar}
            clearImageCover={clearImageCover}
            idInputImg={"picsURL"}
            idInputFirst={"playListName"}
            idInputSecond={"type"}
            valueInputSecond={"playlist"}
            placeholderFirst={"Назва плейлисту*"}
            cover={true}
            marginTopInputFirst="24px"
            minLength={minLengthInput}
            maxLength={maxLengthInput}
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
              Плейлист &#32; &quot;{newPlaylistName}&quot;&#32; був створений
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
