/* eslint-disable react/prop-types */
import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";
import { useDeleteGenreMutation } from "../../../redux/genresSlice";

import {
  MediaItem,
  IconsWrapper,
  MediaItemText,
  MediaImg,
} from "./MediaList.styled";

const MediaListItem = ({ id, title, icon, deleteItem, isLoading }) => {
  const deleteMediaItem = () => {
    deleteItem(id);
  };

  return (
    <>
      <MediaItem>
        <MediaImg src={BASE_URL + "/" + icon} alt={title} />
        <MediaItemText>{title}</MediaItemText>
        <IconsWrapper>
          <svg width="24" height="24">
            <use href={`${symbol}#icon-pen`}></use>
          </svg>

          <button
            style={{ background: "none", border: "none" }}
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
          </button>
        </IconsWrapper>
      </MediaItem>
    </>
  );
};

export default MediaListItem;
