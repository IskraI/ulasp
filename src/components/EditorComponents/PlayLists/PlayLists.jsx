/* eslint-disable react/prop-types */
import { useState } from "react";
import { useParams } from "react-router-dom";

import MediaNavigationLink from "../../NavigationLink/NavigationLink";
import ControlMediateca from "../ControlMediateca/ControlMediaTeca";
import ModalForm from "../ControlMediateca/ModalForm";
import PlaylistListItem from "./PlayListItem";
import { Modal } from "../../Modal/Modal";
import symbol from "../../../assets/symbol.svg";

import { useCreatePlaylistMutation } from "../../../redux/playlistsSlice";
import { useCreatePlaylistInGenreMutation } from "../../../redux/genresSlice";

import { PlaylistWrapper, PlaylistList } from "./PlayLists.styled";

const LatestPlaylists = ({
  title,
  data: playlists,
  genre,
  isFetching,
  error,
  showNavigationLink,
  subCategory,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlaylistAvatar, setSelectedPlaylistAvatar] = useState(null);

  const { genreId, shopSubCategoryId } = useParams();

  const [createPlaylist, { isSuccess, isLoading, isError }] =
    useCreatePlaylistMutation();

  const [createPlaylistInGenre, { isSuccess: success }] =
    useCreatePlaylistInGenreMutation();



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

  const handleSubmitInGenre = async (data) => {
    try {
      const formData = formDataFunction(data);
      await createPlaylistInGenre({ genreId, formData }).unwrap();
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  // const handleSubmitInSubCategoryShop = async (data) => {
  //   try {
  //     const formData = formDataFunction(data);
  //     await createPlaylistInSubCategoryShop({
  //       shopSubCategoryId,
  //       formData,
  //     }).unwrap();
  //     closeModal();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
      {!error && playlists.length !== 0 && (
        <PlaylistWrapper>
          <PlaylistList>
            {playlists.map(({ _id, playListName, playListAvatarURL }) => (
              <PlaylistListItem
                key={_id}
                id={_id}
                title={playListName}
                icon={playListAvatarURL}
                genre={genre}
                subCategory={true}
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
          {genre ? (
            <>
              <ModalForm
                onSubmit={handleSubmitInGenre}
                changePlayListAvatar={handleChoosePlaylistAvatar}
                img={selectedPlaylistAvatar}
                clearImageCover={clearImageCover}
                genre={`${genre}`}
                idInputImg={"picsURL"}
                idInputFirst={"playListName"}
                idInputSecond={"type"}
                marginTopInputFirst="24px"
                valueInputSecond={"playlist"}
                placeholderFirst={`Назва плейлисту у жанрі ${genre}*`}
                cover={true}
              />
            </>
          ) : (
            !subCategory && (
              <ModalForm
                onSubmit={handleSubmitPlaylist}
                changePlayListAvatar={handleChoosePlaylistAvatar}
                img={selectedPlaylistAvatar}
                clearImageCover={clearImageCover}
                idInputImg={"picsURL"}
                idInputFirst={"playListName"}
                marginTopInputFirst="24px"
                idInputSecond={"type"}
                valueInputSecond={"playlist"}
                placeholderFirst={"Назва плейлисту*"}
                cover={true}
              />
            )
          )}
          {/* {subCategory && (
            <ModalForm
              onSubmit={handleSubmitInSubCategoryShop}
              changePlayListAvatar={handleChoosePlaylistAvatar}
              img={selectedPlaylistAvatar}
              clearImageCover={clearImageCover}
              idInputImg={"picsURL"}
              idInputFirst={"playListName"}
              marginTopInputFirst="24px"
              idInputSecond={"type"}
              valueInputSecond={"playlist"}
              placeholderFirst={"Назва плейлисту*"}
              cover={true}
            />
          )} */}
        </Modal>
      )}
    </>
  );
};

export default LatestPlaylists;
