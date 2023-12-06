import MediaNavigationLink from "../../NavigationLink/NavigationLink";
import ControlMediateca from "../ControlMediateca/ControlMediaTeca";
import ModalForm from "../ControlMediateca/ModalForm";
import PlaylistListItem from "./PlayListItem";
import { Modal } from "../../Modal/Modal";

import { MockPlayer } from "../TracksTable/TracksTable.styled";
import { Button } from "../../Button/Button";
import symbol from "../../../assets/symbol.svg";

import { PlaylistWrapper, PlaylistList } from "./PlayLists.styled";
import { useCreatePlaylistMutation } from "../../../redux/playlistsSlice";

import { useState } from "react";

const LatestPlaylists = ({
  title,
  displayPlayer,
  display,
  data: playlists,
  isFetching,
  error,
}) => {
  const [showModal, setShowModal] = useState(false);

  const [createPlaylist, { isSuccess, isLoading, isError }] =
    useCreatePlaylistMutation();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // e.currentTarget.reset();
      const content = e.currentTarget.elements.playlist.value;
      closeModal();
      await createPlaylist(content);
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    return setShowModal(false);
  };

  const toogleModal = () => {
    return setShowModal((prevsetShowModal) => !showModal);
  };
  return (
    <>
      <ControlMediateca
        title={title}
        iconButton={`${symbol}#icon-playlist-add`}
        textButton={"Плейлист"}
        onClick={toogleModal}
      />
      {!isFetching && !error && !playlists.length && (
        <p>Плейлисти ще не додані</p>
      )}
      {!isFetching && !error && playlists.length !== 0 && (
        <PlaylistWrapper>
          <PlaylistList>
            {playlists.map(({ _id, playListName, playListAvatarURL }) => (
              <PlaylistListItem
                key={_id}
                id={_id}
                title={playListName}
                icon={playListAvatarURL}
              />
            ))}
          </PlaylistList>
          <MediaNavigationLink link={"newplaylists"} display={display} />
          <MockPlayer style={{ display: displayPlayer }}>
            Тут будет плеер
          </MockPlayer>
        </PlaylistWrapper>
      )}
      {showModal && (
        <Modal width={"814px"} onClose={toogleModal}>
          <ModalForm
            handleSubmit={handleSubmit}
            idInput={"playlist"}
            placeholder={"Назва плейлисту*"}
          />
        </Modal>
      )}
    </>
  );
};

export default LatestPlaylists;
