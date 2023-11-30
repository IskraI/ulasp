import { BASE_URL } from "../../constants/constants";
import symbol from "../../assets/symbol.svg";

import {
  MediaItem,
  IconsWrapper,
  MediaItemText,
  MediaImg,
} from "./MediaList.styled";

const MediaListItem = ({ title, icon }) => {
  return (
    <>
      <MediaItem>
        <MediaImg src={BASE_URL + "/" + icon} alt={title} />
        <MediaItemText>{title}</MediaItemText>
        <IconsWrapper>
          <svg width="24" height="24">
            <use href={`${symbol}#icon-pen`}></use>
          </svg>

          <svg width="24" height="24">
            <use href={`${symbol}#icon-del-basket`}></use>
          </svg>
        </IconsWrapper>
      </MediaItem>
    </>
  );
};

export default MediaListItem;
