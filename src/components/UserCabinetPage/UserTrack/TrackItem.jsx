/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";

import AddTracksUser from "../AddTracks/AddTracksUser";

import {
  PlaylistItem,
  PlaylistImg,
  PlaylistItemText,
  PlaylistIconsWrapper,
  TextWrapper,
  PlaylistAddButton,
  PlaylistItemText2,
} from "./PlayLists.styled";

import {
  setPreloadSrcPlayer,
  stopPlay,
  setCurrentIndex,
  setSrcPlaying,
} from "../../../redux/playerSlice";
import { getPlayerState } from "../../../redux/playerSelectors";

const TrackItem = ({ id, title, icon, artist, trackURL, isLoading }) => {
  const dispatch = useDispatch();
  const playerState = useSelector(getPlayerState);
  const [isPlayingTrack, setIsPlayingTrack] = useState(false);

  const ref = useRef();
  // console.log("object TrackItem:>> ", createPlaylists);
  const currentTrackIndex = playerState.indexTrack;

  useEffect(() => {
    if (id === playerState?.src[currentTrackIndex]?.id) {
      setIsPlayingTrack(true);
      ref.current.style.borderWidth = "2px";
      ref.current.style.transform = "translateY(-15px)";
    } else {
      setIsPlayingTrack(false);
      ref.current.style.borderWidth = "1px";
      ref.current.style.transform = "translateY(0px)";
    }
  }, [currentTrackIndex, id, playerState?.src]);

  const PlayButtonToogle = () => {
    if (isPlayingTrack) {
      stopMusic();
    } else {
      playMusic();
    }
  };

  const playMusic = () => {
    dispatch(stopPlay([]));
    const newTrackObject = {
      id,
      trackURL,
      artist,
      trackName: title,
    };

    dispatch(
      setPreloadSrcPlayer({
        preloadSrc: [newTrackObject],
      })
    );
    dispatch(setSrcPlaying({ indexTrack: 0 }));
    setIsPlayingTrack(!isPlayingTrack);
  };

  const stopMusic = () => {
    dispatch(stopPlay([]));
    setIsPlayingTrack(!isPlayingTrack);
  };

  const [showModalAddTrackToPlaylist, setShowModalAddTrackToPlaylist] =
    useState(false);

  const addTrackToPlaylistsModal = () => {
    setShowModalAddTrackToPlaylist(true);
    document.body.classList.add("modal-open");
  };
  const handleCloseModal = () => {
    document.body.classList.remove("modal-open");
    setShowModalAddTrackToPlaylist(false);
  };

  return (
    <>
      <PlaylistItem ref={ref}>
        <Link
          key={id}
          onClick={() => PlayButtonToogle()}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <PlaylistImg src={BASE_URL + "/" + icon} alt={title} />
          <TextWrapper>
            <PlaylistItemText>{title}</PlaylistItemText>
            <PlaylistItemText2 style={{ fontWeight: "400px" }}>
              {artist}
            </PlaylistItemText2>
          </TextWrapper>
        </Link>
        <PlaylistIconsWrapper>
          <PlaylistAddButton type="button" onClick={addTrackToPlaylistsModal}>
            <svg width="24" height="24">
              <use href={`${symbol}#icon-plus`}></use>
            </svg>
          </PlaylistAddButton>
        </PlaylistIconsWrapper>
      </PlaylistItem>
      {showModalAddTrackToPlaylist && (
        <AddTracksUser idTrack={id} handleCloseModal={handleCloseModal} />
      )}
    </>
  );
};

export default TrackItem;
