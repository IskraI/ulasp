/* eslint-disable react/prop-types */
import MediaNavigationLink from "../../NavigationLink/NavigationLink";
import ControlMediateca from "../ControlMediateca/ControlMediaTeca";
import ModalForm from "../ControlMediateca/ModalForm";
import PlaylistListItem from "./PlayListItem";
import { Modal } from "../../Modal/Modal";

import { MockPlayer } from "../TracksTable/TracksTable.styled";
import symbol from "../../../assets/symbol.svg";

import { PlaylistWrapper, PlaylistList } from "./PlayLists.styled";
import {
  useCreatePlaylistMutation,
  useCreatePlaylistInGenreMutation,
} from "../../../redux/playlistsSlice";

import { useState } from "react";

import { useParams } from "react-router-dom";

const LatestPlaylists = ({
  title,
  displayPlayer,
  display,
  data: playlists,
  genre,
  isFetching,
  error,
  refetch,
}) => {
  const [showModal, setShowModal] = useState(false);

  const { id } = useParams();

  const [createPlaylist, { isSuccess, isLoading, isError }] =
    useCreatePlaylistMutation();

  const [createPlaylistInGenre, result] = useCreatePlaylistInGenreMutation();

  const handleSubmitPlaylist = async (data) => {
    try {
      closeModal();
      await createPlaylist(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitInGenre = async (data) => {
    try {
      const formData = {
        id,
        ...data,
      };

      console.log(formData);

      closeModal();
      await createPlaylistInGenre(formData);
      // refetch();
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
                refetch={ refetch}
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
        <Modal width={"814px"} onClose={closeModal}>
          {genre ? (
            <ModalForm
              onSubmit={handleSubmitInGenre}
              genre={`${genre}`}
              idInputFirst={"playListName"}
              idInputSecond={"type"}
              placeholderFirst={`Назва плейлисту у жанрі ${genre}*`}
            />
          ) : (
            <ModalForm
              onSubmit={handleSubmitPlaylist}
              idInputFirst={"playListName"}
              idInputSecond={"type"}
              placeholderFirst={"Назва плейлисту*"}
            />
          )}
        </Modal>
      )}
    </>
  );
};

export default LatestPlaylists;
