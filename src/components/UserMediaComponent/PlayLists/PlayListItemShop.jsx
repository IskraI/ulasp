/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";



import { ErrorNotFound, NoData } from "../../Errors/Errors";

import { useDispatch } from "react-redux";
import { shopsUserApi } from "../../../redux/shopsUserSlice";

import {
  PlaylistItem,
  PlaylistImg,
  PlaylistInfoWrapper,
  PlaylistItemText,
  PlaylistCountTracks,
  PlaylistIconsWrapper,
  PlaylistDeleteButton,
  PlaylistCardInfo,
  LinkToTracks,
} from "./PlayLists.styled";

import { SvgMedia } from "./MediaList.styled";

const PlaylistListItem = ({
  id: idPlaylist,
  title,
  icon,
  placeListCardInfo,
  countTracks,
  typeMediaLibrary,
  idTypeOfMediaLibrary,
  mediaLibraryName,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
   

  const mediaLibrary = `/editor/medialibrary`;
  const newPlaylists = `/editor/medialibrary/newplaylists/${idPlaylist}/tracks`;

 
  
  const PropsPlayListItem = {
    marginRight: placeListCardInfo ? "16px" : "auto",
  };
  
  return (
    <>
      <PlaylistItem>
        <LinkToTracks
          key={idPlaylist}
          to={
            location.pathname === mediaLibrary
              ? `newplaylists/${idPlaylist}/tracks`
              : `${idPlaylist}/tracks`
          }
          state={{ from: location }}
          disabled={placeListCardInfo ? true : false}
        >
          <PlaylistImg
            marginRight={PropsPlayListItem.marginRight}
            src={BASE_URL + "/" + icon}
            alt={title}
          />
          <PlaylistItemText>{title}</PlaylistItemText>
        </LinkToTracks>
        <PlaylistIconsWrapper>
          <SvgMedia width="24" height="24">
            <use href={`${symbol}#icon-pen`}></use>
          </SvgMedia>
        
        </PlaylistIconsWrapper>
      </PlaylistItem>
           
    </>
  );
};

export default PlaylistListItem;
