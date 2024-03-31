/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MediaNavigationLink from "../../NavigationLink/NavigationLink";
import ControlMediateca from "../ControlMediateca/ControlMediaTeca";
import ModalForm from "../ControlMediateca/ModalForm";
import PlaylistListItem from "./PlayListItem";
import { Modal } from "../../Modal/Modal";
import symbol from "../../../assets/symbol.svg";
import { ErrorNotFound, NoData } from "../../Errors/Errors";
import { ModalInfoText } from "../../Modal/Modal.styled";

import { useCreatePlaylistMutation } from "../../../redux/playlistsSlice";
import { useCreatePlaylistInGenreMutation } from "../../../redux/genresSlice";

import { PlaylistWrapper, PlaylistList } from "./PlayLists.styled";

const LatestPlaylists = ({
  title,
  data: playlists,
  genre,
  isFetching,
  isLoading,
  error,
  showNavigationLink,
  subCategory,
  minLengthInput = 2,
  maxLengthInput = 29,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalSuccess, setShowModalSuccess] = useState(false);

  const [showModalError, setShowModalError] = useState(false);

  const [selectedPlaylistAvatar, setSelectedPlaylistAvatar] = useState(null);

  const { genreId, shopSubCategoryId } = useParams();

  const [
    createPlaylist,
    {
      data: dataCreatePlaylist,
      isSuccess: isSuccessCreatePlaylist,
      isLoading: isLoadingCreatePlaylist,
      isError: isErrorCreatePlaylist,
      error: errorCreatePlaylist,
    },
  ] = useCreatePlaylistMutation();

  const [
    createPlaylistInGenre,
    {
      data: dataCreatePlaylistInGenre,
      isSuccess: isSuccessCreatePlaylistInGenre,
      isError: isErrorCreatePlaylistInGenre,
      error: errorCreatePlaylistInGenre,
    },
  ] = useCreatePlaylistInGenreMutation();

  const dataCreate = dataCreatePlaylist
    ? dataCreatePlaylist
    : dataCreatePlaylistInGenre;

  const isSuccessCreate = isSuccessCreatePlaylist
    ? isSuccessCreatePlaylist
    : isSuccessCreatePlaylistInGenre;

  const isErrorCreate = isErrorCreatePlaylist
    ? isErrorCreatePlaylist
    : isErrorCreatePlaylistInGenre;

  const errorCreate = isErrorCreatePlaylist
    ? errorCreatePlaylist
    : errorCreatePlaylistInGenre;

  useEffect(() => {
    setTimeout(() => {
      if (isSuccessCreate) {
        setShowModalSuccess(false);
      }
    }, 2000);
  }, [isSuccessCreate]);

  const handleChoosePlaylistAvatar = (event) => {
    let file;

    if (event.target.files[0] !== undefined) {
      file = event.target.files[0];
    }
    if (file) {
      setSelectedPlaylistAvatar(file);
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
      const formData = formDataFunction(data);
      await createPlaylist(formData).unwrap();
      closeModal();
      setShowModalSuccess(true);
    } catch (error) {
      console.log(error);
      setShowModalError(true);
    }
  };

  const handleSubmitInGenre = async (data) => {
    try {
      const formData = formDataFunction(data);
      await createPlaylistInGenre({ genreId, formData }).unwrap();
      closeModal();
      setShowModalSuccess(true);
    } catch (error) {
      console.log(error);
      setShowModalError(true);
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
      {error && <ErrorNotFound error={error?.data?.message} />}
      {!isFetching && !error && playlists?.length === 0 && (
        <NoData text={"Плейлисти ще не додані"} textColor={"grey"} />
      )}

      {!error && (
        <PlaylistWrapper>
          <PlaylistList>
            {playlists.map(({ _id, playListName, playListAvatarURL }) => (
              <PlaylistListItem
                key={_id}
                id={_id}
                title={playListName}
                icon={playListAvatarURL}
                genre={genre}
                subCategory={subCategory}
                minLengthInput={minLengthInput}
                maxLengthInput={maxLengthInput}
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
                minLength={minLengthInput}
                maxLength={maxLengthInput}
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
                minLength={minLengthInput}
                maxLength={maxLengthInput}
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
      {showModalSuccess && isSuccessCreate && !isErrorCreate && (
        <Modal
          width={"394px"}
          onClose={() => setShowModalSuccess(false)}
          showCloseButton={true}
        >
          <ModalInfoText fontSize={"20px"} marginBottom={"34px"}>
            Новий плейлист був створений
          </ModalInfoText>
        </Modal>
      )}
      {showModalError && isErrorCreate && (
        <Modal
          width={"394px"}
          onClose={() => setShowModalError(false)}
          showCloseButton={true}
        >
          <ModalInfoText>
            {(
              <ErrorNotFound
                error={`Плейлист ${errorCreate.data.object} вже використовується`}
              />
            ) ?? <ErrorNotFound />}
          </ModalInfoText>
        </Modal>
      )}
    </>
  );
};

export default LatestPlaylists;
