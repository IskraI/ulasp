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
import { ErrorNotFound } from "../../Errors/Errors";

import { useLocation, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

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

  useEffect(() => {
    setTimeout(() => {
      closeModalSuccess();
      if (
        (location.pathname === "/editor/medialibrary") & isSuccessCreateGenre &&
        !isErrorCreateGenre
      ) {
        navigate(`${location.pathname}${"/genres"}`, { replace: true });
      }
    }, 2000);
  }, [isSuccessCreateGenre]);

  const newGenreName =
    dataCreateGenre?.newGenre.genre || "Назва нового жанру не була введена";

  const handleSubmitGenre = async (data) => {
    try {
      closeModalAdd();

      await createGenre(data);

      !isErrorCreateGenre ? setShowModalSucces(true) : null;

      isErrorCreateGenre ? null : setShowModalError(true);
    } catch (error) {
      console.log(error);
    }
  };

  const closeModalAdd = () => {
    return setShowModalAdd(false);
  };

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
        <Modal width={"394px"} onClose={closeModalError} showCloseButton={true}>
          <ModalInfoText>
            {<ErrorNotFound error={errorCreateGenre.data?.message} /> || (
              <ErrorNotFound />
            )}
          </ModalInfoText>
        </Modal>
      )}
    </>
  );
};

export default Genres;
