/* eslint-disable react/prop-types */
import { GenresWrapper, GenresNotFound } from "./Genres.styled";
import GenreListItem from "./GenresItem";
import MediaNavigationLink from "../../NavigationLink/NavigationLink";
import { GenresList } from "./Genres.styled";
import ControlMediateca from "../ControlMediateca/ControlMediaTeca";
import symbol from "../../../assets/symbol.svg";
import { Modal } from "../../../components/Modal/Modal";
import ModalForm from "../../../components/EditorComponents/ControlMediateca/ModalForm";
import { ModalInfoText, ModalInfoTextBold } from "../../Modal/Modal.styled";
import { useCreateGenreMutation } from "../../../redux/genresSlice";
import { ErrorNotFound, NoData } from "../../Errors/Errors";

import { useLocation, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

const Genres = ({
  data: genres,
  isFetching,
  isLoading,
  error,
  isLoadingCreateGenre,
  showNavigationLink,
}) => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalSuccess, setShowModalSucces] = useState(true);
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
  }, [isErrorCreateGenre, isSuccessCreateGenre, location.pathname, navigate]);

  const newGenreName =
    dataCreateGenre?.newGenre.genre ?? "Назва нового жанру не була введена";

  const handleSubmitGenre = async (data, e) => {
    console.log(data);
    console.log(e);

    try {
      closeModalAdd();
      await createGenre(data).unwrap();
      setShowModalSucces(true);
    } catch (error) {
      setShowModalError(true);
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
      {genres?.length === 0 && !isLoading && !error && (
        <NoData text={"Жанри ще не додані"} textColor={"grey"} />
      )}
      {!error && (
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
          <MediaNavigationLink
            link={"genres"}
            showNavigationLink={showNavigationLink}
          />
        </GenresWrapper>
      )}

      {showModalAdd && (
        <Modal width={"814px"} onClose={toogleModal} showCloseButton={true}>
          <ModalForm
            onSubmit={handleSubmitGenre}
            idInputFirst={"genre"}
            idInputSecond={"type"}
            valueInputSecond={"genre"}
            placeholderFirst={"Назва жанру*"}
            cover={false}
          />
        </Modal>
      )}
      {showModalSuccess && isSuccessCreateGenre && !isErrorCreateGenre && (
        <Modal
          width={"394px"}
          onClose={closeModalSuccess}
          showCloseButton={true}
        >
          <ModalInfoText fontSize={"20px"} marginBottom={"34px"}>
            Новий жанр
            <ModalInfoTextBold>&quot;{newGenreName}&quot;</ModalInfoTextBold>був
            створений
          </ModalInfoText>
        </Modal>
      )}
      {showModalError && isErrorCreateGenre && (
        <Modal width={"394px"} onClose={closeModalError} showCloseButton={true}>
          <ModalInfoText>
            {(
              <ErrorNotFound
                error={`Жанр ${errorCreateGenre.data.object} вже використовується`}
              />
            ) ?? <ErrorNotFound />}
          </ModalInfoText>
        </Modal>
      )}
    </>
  );
};

export default Genres;
