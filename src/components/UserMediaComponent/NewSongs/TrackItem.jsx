import PropTypes from "prop-types";


import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";
import { ImgTrackError} from "../../../helpers/helpers"

import AddTracksUser from "../../UserCabinetPage/AddTracks/AddTracksUser";

import {
  PlaylistItem,
  PlaylistImg,
  PlaylistItemText,
  PlaylistIconsWrapper,
  TextWrapper,
  PlaylistItemText2,
} from "./PlayLists.styled";

import { PlaylistAddButton } from "./PlayLists.styled";
import {
  setPreloadSrcPlayer,
  stopPlay,
  setSrcPlaying,
  setCurrentIndex,
} from "../../../redux/playerSlice";
import { getPlayerState } from "../../../redux/playerSelectors";

import { compareArray } from "../../../helpers/helpers";

const TrackItem = ({ id, title, icon, artist, trackURL, index }) => {
  const dispatch = useDispatch();
  const playerState = useSelector(getPlayerState);
  const [isPlayingTrack, setIsPlayingTrack] = useState(false);

  const ref = useRef();

  const currentTrackIndex = playerState.indexTrack;
  const isPause = playerState.isPaused;

  const imgSRC = `${BASE_URL}/${icon}`

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

  //открываем модальное окно со списком плейлистов
  const [showModalAddTrackToPlaylist, setShowModalAddTrackToPlaylist] =
    useState(false);

  const addTrackToPlaylistsModal = () => {
    // console.log("playlistUserForAdd :>> ", playlistUserForAdd);
    setShowModalAddTrackToPlaylist(true);
    document.body.classList.add("modal-open");
  };
  const handleCloseModal = () => {
    document.body.classList.remove("modal-open");
    setShowModalAddTrackToPlaylist(false);
  };

  const playMusic = () => {
    const isMySRC = compareArray(playerState.src, playerState.preloadSrc);

    if (isPlayingTrack) {
      dispatch(stopPlay([]));
    }
    // const newTrackObject = {
    //   id,
    //   trackURL,
    //   artist,
    //   trackName: title,
    // };

    // dispatch(
    //   setPreloadSrcPlayer({
    //     preloadSrc: [newTrackObject],
    //   })
    // );

    // if (isPause) {
    //   dispatch(setCurrentIndex(index));
    //   return;
    // }
    // dispatch(setSrcPlaying({ indexTrack: index }));

    if (
      !playerState.src.length ||
      (playerState.preloadSrc.length && !isMySRC)
    ) {
      dispatch(setSrcPlaying({ indexTrack: index }));
    } else {
      dispatch(setCurrentIndex(index));
    }

    setIsPlayingTrack(!isPlayingTrack);
  };

  const stopMusic = () => {
    dispatch(stopPlay([]));
    setIsPlayingTrack(!isPlayingTrack);
  };

  return (
    <>
      <PlaylistItem ref={ref}>
        <Link
          key={id}
          onClick={() => PlayButtonToogle()}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <PlaylistImg
            src={imgSRC}
            alt={title}
            onError={(e) => ImgTrackError(e)}
          />
          <TextWrapper>
            <PlaylistItemText>{title}</PlaylistItemText>
            <PlaylistItemText2 style={{ fontWeight: '400px' }}>
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

TrackItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  artist: PropTypes.string,
  trackURL: PropTypes.string,
};

export default TrackItem;
