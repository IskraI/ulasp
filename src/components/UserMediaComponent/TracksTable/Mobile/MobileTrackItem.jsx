import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useRef } from 'react';

import { BASE_URL } from '../../../../constants/constants';
import {
  sToStr,
  ImgTrackError,
  compareArray
} from '../../../../helpers/helpers';

import PopUpButtons from '../PopUpButtons';
import DotsBtn from '../DotsButton';

// REDUX
import { getPlayerState } from '../../../../redux/playerSelectors';
import {
  stopPlay,
  setCurrentIndex,
  setSrcPlaying
} from '../../../../redux/playerSlice';

import {
  SongRow,
  LeftSection,
  CoverImage,
  Info,
  Title,
  Artist,
  RightSection,
  Duration,
  MenuButton
} from './mobileTrackList.styled';

import { PlayButton } from '../TracksTableUser.styled';

import symbol from '../../../../assets/symbol.svg';

const MobileTrackItem = ({
  index,
  idTrack,
  _id,
  cover,
  title,
  artist,
  duration,
  countOfSkip
}) => {
  const dispatch = useDispatch();
  const playerState = useSelector(getPlayerState);

  const [isPlayingTrack, setIsPlayingTrack] = useState(false);
  const [isPausedTrack, setIsPausedTrack] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  //   const [isAddTrack, setIsAddTrack] = useState(isAddTrackUser);

  const [showPopUp, setShowPopUp] = useState(false);

  const isLoadedTrack = playerState.isLoaded;
  const currentTrackIndex = playerState.indexTrack;
  const isPlaying = playerState.isPlaying;
  const isPaused = playerState.isPaused;
  const futurePlayerSRC = playerState.preloadSrc;
  const playerSRC = playerState.src;

  const playBtnRef = useRef(null);

  const PopUpToogle = () => {
    setShowPopUp(!showPopUp);
  };

  const PlayButtonToogle = () => {
    if (isPlayingTrack) {
      stopMusic();
    } else {
      playMusic();
    }
  };

  useEffect(() => {
    if (isPlaying && idTrack === playerState?.src[currentTrackIndex]?.id) {
      setIsPlayingTrack(true);
    } else {
      setIsPlayingTrack(false);
    }
  }, [currentTrackIndex, idTrack, isPlaying, playerState?.src]);

  useEffect(() => {
    if (isPaused && idTrack === playerState?.src[currentTrackIndex]?.id) {
      setIsPausedTrack(true);
    } else {
      setIsPausedTrack(false);
    }
  }, [currentTrackIndex, idTrack, isPaused, playerState?.src]);

  const playMusic = () => {
    const comparedPlayerSRC = compareArray(futurePlayerSRC, playerSRC);

    if (!comparedPlayerSRC && futurePlayerSRC.length !== 0) {
      dispatch(setSrcPlaying({ indexTrack: index + countOfSkip }));
    } else {
      dispatch(setCurrentIndex(index + countOfSkip));
    }

    setIsPlayingTrack(isPlaying);
    setIsPausedTrack(isPaused);
  };

  const stopMusic = () => {
    dispatch(stopPlay(currentTrackIndex));
    setIsPlayingTrack(isLoadedTrack);
    setIsPausedTrack(isPaused);
  };

  return (
    <SongRow key={_id}>
      <LeftSection>
        <PlayButton
          ref={playBtnRef}
          data-idtrack={idTrack}
          type="button"
          id="playBtn"
          onClick={() => PlayButtonToogle(idTrack)}
        >
          <svg width="22" height="22">
            <use
              href={
                isPlayingTrack
                  ? `${symbol}#icon-stop-play`
                  : isPausedTrack
                  ? `${symbol}#icon-pause`
                  : `${symbol}#icon-play`
              }
            ></use>
          </svg>
        </PlayButton>
        <CoverImage
          src={`${BASE_URL}/${cover}`}
          alt={title}
          onError={(e) => ImgTrackError(e)}
        />
        <Info>
          <Title>{title}</Title>
          <Artist>{artist}</Artist>
        </Info>
      </LeftSection>
      <RightSection>
        <Duration>{sToStr(duration)}</Duration>
        <MenuButton>
          {showPopUp && (
            <PopUpButtons
            //   removeTrackFromAddTrackFn={removeTrackFromAdd}
            //   addTrackToAddTrackFn={addTrackToAdd}
            //   isAddTrack={isAddTrack}
            //   addTrackToPlaylistFn={addTrackToPlaylistsModal}
            />
          )}
          <DotsBtn
            popUpToogle={PopUpToogle}
            disablePopUp={() => setShowPopUp(false)}
            icon={`${symbol}#icon-more-dots`}
          />
        </MenuButton>
      </RightSection>
    </SongRow>
  );
};

export default MobileTrackItem;

MobileTrackItem.propTypes = {
  idTrack: PropTypes.string,
  _id: PropTypes.string,
  cover: PropTypes.string,
  title: PropTypes.string,
  artist: PropTypes.string,
  duration: PropTypes.string
};
