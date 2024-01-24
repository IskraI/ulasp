/* eslint-disable react/prop-types */
import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";
import {
  useDeleteGenreMutation,
  useUpdateGenreByIdMutation,
} from "../../../redux/genresSlice";
import { Modal } from "../../../components/Modal/Modal";
import { ModalInfoText, ModalInfoTextBold } from "../../Modal/Modal.styled";
import { ErrorNotFound } from "../../Errors/Errors";
import { useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import {
  GenresItem,
  GenresImg,
  GenresItemText,
  GenresIconsWrapper,
  GenresButton,
  SvgGenres,
  EditInputText,
  GenresLabelPlusCover,
  EditWrapper,
} from "./GenresItem.styled";

import { Link } from "react-router-dom";

const GenreListItem = ({ id, title, icon }) => {
  const ref = useRef();

  const [showModalSuccess, setShowModalSucces] = useState(false);
  const [showModalError, setShowModalError] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [genreTitle, setGenreTitle] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

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
      formData.append("genre", genreTitle);
    }

    if (genreTitle === title) {
      formData.append("picsURL", selectedImage);
      formData.append("type", "genre");
    }

    if (selectedImage && genreTitle !== title && genreTitle !== "") {
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

  const handleChooseIcon = (event) => {
    let file;

    if (event.target.files[0] !== undefined) {
      file = event.target.files[0];
    }
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleCloseEdit = () => {
    setSelectedImage(null);
    setIsEditing(false);
  };

  const isEmptyGenreUpdateData = (firstStr, secondStr) => {
    if (firstStr === "" || (firstStr === secondStr && selectedImage === null)) {
      console.log("Кнопка выключена");
      return true;
    }
    if (firstStr === "" && firstStr === secondStr && selectedImage !== null) {
      console.log("Кнопка включена");
      return false;
    }

    console.log("Кнопка включена");
    return false;
  };

  const coverImage = selectedImage
    ? URL.createObjectURL(selectedImage)
    : BASE_URL + "/" + icon;

  return (
    <>
      <GenresItem>
        {isEditing ? (
          <div style={{ display: "flex", gap: "10px" }}>
            <EditWrapper>
              <GenresImg src={coverImage} alt={title} />
              <GenresLabelPlusCover htmlFor="coverGenre">
                +
              </GenresLabelPlusCover>
              <input
                type="file"
                accept="image/*"
                id="coverGenre"
                onChange={handleChooseIcon}
                style={{ display: "none" }}
              />
            </EditWrapper>
            <EditInputText
              type="text"
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
          </div>
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
          <ModalInfoText marginBottom={"34px"}>
            Жанр <ModalInfoTextBold>&quot;{title}&quot;</ModalInfoTextBold> був
            видалений
          </ModalInfoText>
        </Modal>
      )}
      {showModalError && (
        <Modal width={"394px"} onClose={closeModalError} showCloseButton={true}>
          <ModalInfoText marginBottom={"34px"}>
            {isErrorDeleteGenre &&
              (<ErrorNotFound error={errorDeleteGenre.data.message} /> ?? (
                <ErrorNotFound />
              ))}

            {isErrorUpdateGenre &&
              errorUpdateGenre.data.code === "4091" &&
              ((
                <ErrorNotFound
                  error={`Жанр    ${errorUpdateGenre.data.object} вже використовується`}
                />
              ) ?? <ErrorNotFound />)}

            {/* {isErrorUpdateGenre && (errorUpdateGenre.data.code === "4091") &&
           ( <ErrorNotFound error={errorUpdateGenre.data.code} />) ?? (
              <ErrorNotFound />
            )} */}
          </ModalInfoText>
        </Modal>
      )}
    </>
  );
};

export default GenreListItem;
