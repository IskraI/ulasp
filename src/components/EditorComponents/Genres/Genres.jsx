/* eslint-disable react/prop-types */
import { GenresWrapper } from "./Genres.styled";
import GenreListItem from "./GenresItem";
import { MockPlayer } from "../TracksTable/TracksTable.styled";
import MediaNavigationLink from "../../NavigationLink/NavigationLink";
import { GenresList } from "./Genres.styled";
import ControlMediateca from "../ControlMediateca/ControlMediaTeca";
import symbol from "../../../assets/symbol.svg";
import { Modal } from "../../../components/Modal/Modal";
import ModalForm from "../../../components/EditorComponents/ControlMediateca/ModalForm";
import { useCreateGenreMutation } from "../../../redux/genresSlice";

import { useState } from "react";

const Genres = ({
  display,
  displayPlayer,
  data: genres,
  isFetching,
  error,
  isLoadingCreateGenre,
}) => {
  const [showModal, setShowModal] = useState(false);

  const [createGenre, { isSuccess, isLoading, isError }] =
    useCreateGenreMutation();

  const handleSubmitGenre = async (data) => {
    try {
      closeModal();
      await createGenre(data);
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
        title={"Жанри"}
        iconButton={`${symbol}#icon-music-album`}
        textButton={"Жанр"}
        onClick={toogleModal}
      />
      {!error && !isLoadingCreateGenre && (
        <GenresWrapper>
          <GenresList>
            {genres.map(({ _id, genre, genreAvatarURL }) => (
              <GenreListItem
                key={_id}
                id={_id}
                title={genre}
                icon={genreAvatarURL}
              />
            ))}
          </GenresList>
          <MediaNavigationLink link={"genres"} display={display} />
        </GenresWrapper>
      )}
      <MockPlayer style={{ display: displayPlayer }}>
        Тут будет плеер
      </MockPlayer>
      {showModal && (
        <Modal width={"814px"} onClose={toogleModal}>
          <ModalForm
            onSubmit={handleSubmitGenre}
            idInputFirst={"genre"}
            idInputSecond={"type"}
            placeholderFirst={"Назва жанру*"}
          />
        </Modal>
      )}
    </>
  );
};

export default Genres;
