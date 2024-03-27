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
import { isEmptyMediaUpdateData } from "../../../helpers/helpers";

import {
  MediaItem,
  MediaImg,
  MediaItemText,
  MediaIconsWrapper,
  MediaButton,
  SvgMedia,
  EditInputText,
  EditWrapper,
  EditCardWrapper,
} from "../MediaList/MediaList.styled";

const GenreListItem = ({ id, title, icon, minLengthInput, maxLengthInput }) => {
  const ref = useRef();
  const [showModalSuccess, setShowModalSucces] = useState(false);
  const [showModalError, setShowModalError] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [genreTitle, setGenreTitle] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

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
      handleCloseEdit();
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

  const handleChooseCover = (data) => setSelectedImage(data);

  return (
    <>
      <MediaItem isError={isError} isEditing={isEditing}>
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
              minLength={minLengthInput}
              maxLength={maxLengthInput}
              value={genreTitle}
              onChange={(e) => setGenreTitle(e.target.value)}
              ref={ref}
            />
            <MediaIconsWrapper>
              <MediaButton
                type="button"
                onClick={() => updateGenreItem(title)}
                disabled={isEmptyMediaUpdateData(
                  genreTitle,
                  title,
                  isError,
                  selectedImage
                )}
              >
                <SvgMedia width="24" height="24">
                  <use href={`${symbol}#icon-check-in`}></use>
                </SvgMedia>
              </MediaButton>
              <MediaButton type="button" onClick={handleCloseEdit}>
                <SvgMedia width="24" height="24">
                  <use href={`${symbol}#icon-close`}></use>
                </SvgMedia>
              </MediaButton>
            </MediaIconsWrapper>
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
                justifyItems: "baseline",
              }}
            >
              <MediaImg src={BASE_URL + "/" + icon} alt={title} />
              <MediaItemText>{title}</MediaItemText>
            </Link>
            <MediaIconsWrapper>
              <MediaButton
                type="button"
                onClick={editGenre}
                disabled={isEditing}
              >
                <SvgMedia width="24" height="24">
                  <use href={`${symbol}#icon-pen`}></use>
                </SvgMedia>
              </MediaButton>

              <MediaButton
                type="button"
                onClick={deleteMediaItem}
                disabled={isLoading}
              >
                {isLoading ? (
                  <SvgMedia
                    width="24"
                    height="24"
                    stroke="#888889"
                    fill="#888889"
                  >
                    <use href={`${symbol}#icon-del-basket`}></use>
                  </SvgMedia>
                ) : (
                  <SvgMedia width="24" height="24">
                    <use href={`${symbol}#icon-del-basket`}></use>
                  </SvgMedia>
                )}
              </MediaButton>
            </MediaIconsWrapper>
          </>
        )}
      </MediaItem>

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
  minLengthInput: PropTypes.number,
  maxLengthInput: PropTypes.number,
};

export default GenreListItem;
