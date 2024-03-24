import PropTypes from "prop-types";

import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";
import {
  useDeleteGenreMutation,
  useUpdateGenreByIdMutation,
} from "../../../redux/genresSlice";
import { Modal } from "../../../components/Modal/Modal";
import { ModalInfoText, ModalInfoTextBold } from "../../Modal/Modal.styled";
import { ErrorNotFound } from "../../Errors/Errors";
import { ErrorValidateText } from "../../Errors/errors.styled";
import AddCover from "../../AddCover/AddCover";
import useValidateInput from "../../../hooks/useValidateInput";

import {
  GenresImg,
  GenresItem,
  GenresItemText,
  GenresIconsWrapper,
  GenresButton,
  SvgGenres,
  EditInputText,
  EditWrapper,
  EditCardWrapper,
} from "./GenresItem.styled";

const GenreListItem = ({ id, title, icon }) => {
  const ref = useRef();
  const [showModalSuccess, setShowModalSucces] = useState(false);
  const [showModalError, setShowModalError] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [genreTitle, setGenreTitle] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const minLengthInput = 2;
  const maxLengthInput = 20;

  const [errorValidateMessage, isError, setIsError] = useValidateInput(
    genreTitle,
    minLengthInput,
    maxLengthInput
  );

  const location = useLocation();
  const [
    deleteGenre,
    {
      isLoading,
      data: dataDeleteGenre,
      isSuccess: isSuccessDeleteGenre,
      isError: isErrorDeleteGenre,
      error: errorDeleteGenre,
    },
  ] = useDeleteGenreMutation();

  const [
    updateGenre,
    {
      data: dataUpdateGenre,
      isLoading: isLoadingUpdateGenre,
      isSuccess: isSuccessUpdateGenre,
      isError: isErrorUpdateGenre,
      error: errorUpdateGenre,
    },
  ] = useUpdateGenreByIdMutation();

  // console.log("data", dataUpdateGenre);
  // console.log("isSuccess", isSuccessUpdateGenre);
  // console.log("isError", isErrorUpdateGenre);
  // console.log("error", errorUpdateGenre);
  // console.log("isLoading", isLoadingUpdateGenre);

  // console.log("isErrorDeleteGenre", isSuccessDeleteGenre);

  useEffect(() => {
    if (isEditing) {
      ref.current.focus();
    }
  }, [isEditing]);

  const updateGenreItem = async (title) => {
    const formData = new FormData();

    if (!selectedImage) {
      console.log("Cюда");
      formData.append("genre", genreTitle);
    }

    if (genreTitle === title) {
      console.log("Cюда1");
      formData.append("picsURL", selectedImage);
      formData.append("type", "genre");
    }

    if (selectedImage && genreTitle !== title && genreTitle !== "") {
      console.log("Cюда2");
      formData.append("genre", genreTitle);
      formData.append("picsURL", selectedImage);
      formData.append("type", "genre");
    }

    try {
      await updateGenre({ id, formData }).unwrap();
      handleCloseEdit();
    } catch (error) {
      setShowModalError(true);
    }
  };

  const deleteMediaItem = async () => {
    try {
      await deleteGenre(id).unwrap();
      setShowModalSucces(true);
    } catch (error) {
      setShowModalError(true);
    }
  };

  const closeModalSuccess = () => {
    return setShowModalSucces(false);
  };

  const closeModalError = () => {
    return setShowModalError(false);
  };

  const editGenre = () => {
    setIsEditing(true);
    setGenreTitle(title);
  };

  const handleCloseEdit = () => {
    setSelectedImage(null);
    setIsEditing(false);
    setIsError(false);
  };

  const isEmptyGenreUpdateData = (firstStr, secondStr) => {
    if (isError) {
      // console.log("Должны быть тут");
      return true;
    }
    if (firstStr === "" || (firstStr === secondStr && selectedImage === null)) {
      // console.log("Кнопка выключена");
      return true;
    }
    if (firstStr === "" && firstStr === secondStr && selectedImage !== null) {
      // console.log("Кнопка включена");
      return false;
    }

    // console.log("Кнопка включена");
    return false;
  };

  const handleChooseCover = (data) => setSelectedImage(data);

  return (
    <>
      <GenresItem isError={isError}>
        {isEditing ? (
          <EditCardWrapper>
            {isError && (
              <ErrorValidateText>{errorValidateMessage}</ErrorValidateText>
            )}
            <EditWrapper>
              <AddCover
                cover={icon}
                coverAlt={title}
                handleChooseCover={handleChooseCover}
              />
            </EditWrapper>
            <EditInputText
              type="text"
              size={17}
              minLength={2}
              maxLength={20}
              value={genreTitle}
              onChange={(e) => setGenreTitle(e.target.value)}
              ref={ref}
            />
            <GenresIconsWrapper>
              <GenresButton
                type="button"
                onClick={() => updateGenreItem(title)}
                disabled={isEmptyGenreUpdateData(genreTitle, title)}
              >
                <SvgGenres width="24" height="24">
                  <use href={`${symbol}#icon-check-in`}></use>
                </SvgGenres>
              </GenresButton>
              <GenresButton type="button" onClick={handleCloseEdit}>
                <SvgGenres width="24" height="24">
                  <use href={`${symbol}#icon-close`}></use>
                </SvgGenres>
              </GenresButton>
            </GenresIconsWrapper>
          </EditCardWrapper>
        ) : (
          <>
            <Link
              key={id}
              to={`/editor/medialibrary/genres/${id}/playlists`}
              state={{ from: location }}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <GenresImg src={BASE_URL + "/" + icon} alt={title} />
              <GenresItemText>{title}</GenresItemText>
            </Link>
            <GenresIconsWrapper>
              <GenresButton
                type="button"
                onClick={editGenre}
                disabled={isEditing}
              >
                <SvgGenres width="24" height="24">
                  <use href={`${symbol}#icon-pen`}></use>
                </SvgGenres>
              </GenresButton>

              <GenresButton
                type="button"
                onClick={deleteMediaItem}
                disabled={isLoading}
              >
                {isLoading ? (
                  <SvgGenres
                    width="24"
                    height="24"
                    stroke="#888889"
                    fill="#888889"
                  >
                    <use href={`${symbol}#icon-del-basket`}></use>
                  </SvgGenres>
                ) : (
                  <SvgGenres width="24" height="24">
                    <use href={`${symbol}#icon-del-basket`}></use>
                  </SvgGenres>
                )}
              </GenresButton>
            </GenresIconsWrapper>
          </>
        )}
      </GenresItem>

      {showModalSuccess && isSuccessDeleteGenre && !isErrorDeleteGenre && (
        <Modal width={"394px"} onClose={closeModalSuccess}>
          <ModalInfoText fontSize={"20px"} marginBottom={"34px"}>
            Жанр <ModalInfoTextBold>&quot;{title}&quot;</ModalInfoTextBold> був
            видалений
          </ModalInfoText>
        </Modal>
      )}
      {showModalError && (
        <Modal width={"394px"} onClose={closeModalError} showCloseButton={true}>
          <ModalInfoText fontSize={"20px"} marginBottom={"34px"}>
            {isErrorDeleteGenre &&
              (<ErrorNotFound error={errorDeleteGenre.data.message} /> ?? (
                <ErrorNotFound />
              ))}

            {isErrorUpdateGenre && errorUpdateGenre.data?.code === "4091" ? (
              <ErrorNotFound
                error={`Жанр    ${errorUpdateGenre.data?.object} вже використовується`}
              />
            ) : (
              <ErrorNotFound error={errorUpdateGenre.data?.message} />
            )}
          </ModalInfoText>
        </Modal>
      )}
    </>
  );
};

GenreListItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default GenreListItem;
