import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";

import {
  PlaylistItem,
  PlaylistImg,
  PlaylistItemText,
  PlaylistIconsWrapper,
  PlaylistDeleteButton,
  TextWrapper,
  PlaylistItemText2
} from "./PlayLists.styled";

import { Link } from "react-router-dom";

const TrackItem = ({ id, title, icon , artist, isLoading}) => {
   
  return (
    <>
      <PlaylistItem>
        <Link
          key={id}
          to={`${id}/tracks`}
          state={{ from: location }}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <PlaylistImg src={BASE_URL + "/" + icon} alt={title} />
          <TextWrapper>
          <PlaylistItemText>{title}</PlaylistItemText>
<PlaylistItemText2 style={{ fontWeight: "400px"
            }} >{artist}</PlaylistItemText2>
            </TextWrapper>
        </Link>
        <PlaylistIconsWrapper>
          
          <PlaylistDeleteButton
            type="button"
                     
          >
            {isLoading ? (
              <svg width="24" height="24" stroke="#888889">
                <use href={`${symbol}#icon-plus`}></use>
              </svg>
            ) : (
              <svg width="24" height="24">
                <use href={`${symbol}#icon-plus`}></use>
              </svg>
            )}
          </PlaylistDeleteButton>
        </PlaylistIconsWrapper>
      </PlaylistItem>
    </>
  );
};

export default TrackItem;
