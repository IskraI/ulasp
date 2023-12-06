import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";
import { useDeleteGenreMutation } from "../../../redux/genresSlice";
import { useLocation } from "react-router-dom";

import {
  GenresItem,
  GenresImg,
  GenresItemText,
  GenresIconsWrapper,
  GenresDeleteButton,
} from "./GenresItem.styled";

import { Link } from "react-router-dom";

const GenreListItem = ({ id, title, icon }) => {
  const location = useLocation();
  const [deleteGenre, { isLoading }] = useDeleteGenreMutation();
  const deleteMediaItem = () => {
    deleteGenre(id);
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
    </>
  );
};

export default GenreListItem;
