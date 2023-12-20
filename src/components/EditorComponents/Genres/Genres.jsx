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
import { ModalInfoText } from "../../Modal/Modal.styled";
import { useCreateGenreMutation } from "../../../redux/genresSlice";

import { useLocation, useNavigate } from "react-router-dom";

import { useState } from "react";

const Genres = ({
  display,
  displayPlayer,
  data: genres,
  isFetching,
  error,
  isLoadingCreateGenre,
}) => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalSuccess, setShowModalSucces] = useState(false);
  const [showModalError, setShowModalError] = useState(false);
  // console.log("showModal", showModal);
  const location = useLocation();
  const navigate = useNavigate();

  const [
    createGenre,
    {
      data: dataCreateGenre,
      isSuccess: isSuccessCreateGenre,
      isError: isErrorCreateGenre,
      error: errorCreateGenre,
    },
  ] = useCreateGenreMutation();

  console.log(errorCreateGenre);

  const newGenreName =
    dataCreateGenre?.newGenre.genre || "Назва нового жанру не була введена";

  if (
    (location.pathname === "/editor/medialibrary") & isSuccessCreateGenre &&
    !isErrorCreateGenre
  ) {
    navigate(`${location.pathname}${"/genres"}`, { replace: true });
  }

  const handleSubmitGenre = async (data) => {
    try {
      toogleModal();
      await createGenre(data);
      isSuccessCreateGenre && !isErrorCreateGenre
        ? setShowModalSucces(false)
        : setShowModalSucces(true);

      isErrorCreateGenre ? null : setShowModalError(true);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(isErrorCreateGenre);
  console.log("showModalError", showModalError);

  const closeModalSuccess = () => {
    return setShowModalSucces(false);
  };

  const closeModalError = () => {
    return setShowModalError(false);
  };

  const toogleModal = () => {
    return setShowModalAdd((prevsetShowModal) => !showModalAdd);
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
      {showModalAdd && (
        <Modal width={"814px"} onClose={toogleModal} showCloseButton={true}>
          <ModalForm
            onSubmit={handleSubmitGenre}
            idInputFirst={"genre"}
            idInputSecond={"type"}
            placeholderFirst={"Назва жанру*"}
          />
        </Modal>
      )}
      {showModalSuccess && isSuccessCreateGenre && !isErrorCreateGenre && (
        <Modal width={"394px"} onClose={closeModalSuccess}>
          <ModalInfoText>
            Новий жанр &quot;{newGenreName}&quot; був створений
          </ModalInfoText>
        </Modal>
      )}
      {showModalError && isErrorCreateGenre && (
        <Modal width={"394px"} onClose={closeModalError}>
          <ModalInfoText>
            {errorCreateGenre.status === 409
              ? errorCreateGenre.data.message
              : errorCreateGenre.data.message}
          </ModalInfoText>
        </Modal>
      )}
    </>
  );
};

export default Genres;
