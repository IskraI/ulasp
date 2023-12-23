/* eslint-disable react/prop-types */
import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";
import { useDeleteGenreMutation } from "../../../redux/genresSlice";
import { Modal } from "../../../components/Modal/Modal";
import { ModalInfoText } from "../../Modal/Modal.styled";
import { ErrorNotFound } from "../../Errors/Errors";
import { useLocation } from "react-router-dom";
import { useState } from "react";

import {
  GenresItem,
  GenresImg,
  GenresItemText,
  GenresIconsWrapper,
  GenresDeleteButton,
} from "./GenresItem.styled";

import { Link } from "react-router-dom";

const GenreListItem = ({ id, title, icon }) => {
  const [showModalSuccess, setShowModalSucces] = useState(false);
  const [showModalError, setShowModalError] = useState(false);

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

  const deleteMediaItem = async () => {
    await deleteGenre(id);
    setShowModalSucces(true);

    isErrorDeleteGenre ? setShowModalError(true) : null;
  };

  const closeModalSuccess = () => {
    return setShowModalSucces(false);
  };

  const closeModalError = () => {
    return setShowModalError(false);
  };

  return (
    <>
      <GenresItem>
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
          <svg width="24" height="24">
            <use href={`${symbol}#icon-pen`}></use>
          </svg>

          <GenresDeleteButton
            type="button"
            onClick={deleteMediaItem}
            disabled={isLoading}
          >
            {isLoading ? (
              <svg width="24" height="24" stroke="#888889">
                <use href={`${symbol}#icon-del-basket`}></use>
              </svg>
            ) : (
              <svg width="24" height="24">
                <use href={`${symbol}#icon-del-basket`}></use>
              </svg>
            )}
          </GenresDeleteButton>
        </GenresIconsWrapper>
      </GenresItem>
      {showModalSuccess && isSuccessDeleteGenre && !isErrorDeleteGenre && (
        <Modal width={"394px"} onClose={closeModalSuccess}>
          <ModalInfoText>Жанр &quot;{title}&quot; був видалений</ModalInfoText>
        </Modal>
      )}
      {showModalError && (
        <Modal width={"394px"} onClose={closeModalError}>
          <ModalInfoText>
            {<ErrorNotFound error={errorDeleteGenre} /> || <ErrorNotFound />}
          </ModalInfoText>
        </Modal>
      )}
    </>
  );
};

export default GenreListItem;
