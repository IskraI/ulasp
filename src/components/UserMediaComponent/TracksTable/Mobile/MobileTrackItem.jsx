import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'sonner';
import { BASE_URL } from '../../../../constants/constants';
import {
  sToStr,
  ImgTrackError,
  compareArray
} from '../../../../helpers/helpers';
import optionsDefault from './options';

import PopUpButtons from '../PopUpButtons';
import DotsBtn from '../DotsButton';
import AddTracksUser from '../../../UserCabinetPage/AddTracks/AddTracksUser';

// REDUX
import { getPlayerState } from '../../../../redux/playerSelectors';
import {
  stopPlay,
  setCurrentIndex,
  setSrcPlaying
} from '../../../../redux/playerSlice';
import {
  useAddTrackToAddMutation,
  useDeleteTrackFromAddMutation
} from '../../../../redux/tracksUserSlice';
import { useRemoveTrackFromPlaylistUserMutation } from '../../../../redux/playlistsUserSlice';
import { useAddTrackToPlaylistUserMutation } from '../../../../redux/playlistsUserSlice';
import { tracksUserApi } from '../../../../redux/tracksUserSlice';
// END OF REDUX
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
  playListId,
  _id,
  cover,
  title,
  artist,
  duration,
  countOfSkip,
  isAddTrackUser,
  options,
  addTrackInModal
}) => {
  if (options === undefined || options === null) {
    options = optionsDefault;
  }

  const dispatch = useDispatch();
  const playerState = useSelector(getPlayerState);
  const location = useLocation();

  const [addTracks] = useAddTrackToPlaylistUserMutation();
  const [addTrack] = useAddTrackToAddMutation();
  const [deleteTrack] = useDeleteTrackFromAddMutation();

  const [removeTracksFromPlaylist] = useRemoveTrackFromPlaylistUserMutation();

  const [isPlayingTrack, setIsPlayingTrack] = useState(false);
  const [isPausedTrack, setIsPausedTrack] = useState(false);
  const [isAddTrack, setIsAddTrack] = useState(isAddTrackUser);

  const [showPopUp, setShowPopUp] = useState(false);
  const [showModalAddTrackToPlaylist, setShowModalAddTrackToPlaylist] =
    useState(false);

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

  const addTrackToAdd = () => {
    addTrack(idTrack)
      .unwrap()
      .then(() => {
        toast.success(title, {
          description: 'додано до обраних',
          position: 'bottom-center',
          duration: 6000
        });

        setIsAddTrack(true);
      })
      .catch((error) => console.log(error));
  };

  const removeTrackFromAdd = () => {
    deleteTrack(idTrack)
      .unwrap()
      .then(() => {
        toast.info(title, {
          description: 'видалено з обраних',
          position: 'bottom-center',
          duration: 6000
        });
        setIsAddTrack(false);
      })
      .catch((error) => console.log(error.data.message));
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
      dispatch(
        setSrcPlaying({
          indexTrack: index + countOfSkip,
          navigate: location.pathname
        })
      );
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

  const deleteTrackFromPlaylist = () => {
    const tracksIdList = [idTrack];
    removeTracksFromPlaylist({ playListId, tracksIdList })
      .unwrap()
      .then(() => {
        toast.info(title, {
          description: 'видалено з плейлиста',
          position: 'bottom-center',
          duration: 6000
        });
      });
  };

  const addingMultipleTracks = () => {
    const tracksIdList = [idTrack];

    addTracks({ playListId, tracksIdList })
      .then(() => {
        toast.info(title, {
          description: 'додано',
          position: 'bottom-center',
          duration: 6000
        });
      })
      .finally(() => {
        setTimeout(
          () => dispatch(tracksUserApi.util.invalidateTags(['Tracks'])),
          1000
        );
      });
  };

  const addTrackToPlayList = () => {
    addTrackInModal
      ? addingMultipleTracks()
      : setShowModalAddTrackToPlaylist(true);
  };

  return (
    <SongRow key={_id} isPlayingTrack={isPlayingTrack}>
      <LeftSection>
        {options?.playButton && (
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
        )}
        {options?.coverImage && (
          <CoverImage
            src={`${BASE_URL}/${cover}`}
            alt={title}
            onError={(e) => ImgTrackError(e)}
          />
        )}
        <Info>
          {options?.title && <Title>{title}</Title>}
          {options?.artist && <Artist>{artist}</Artist>}
        </Info>
      </LeftSection>
      <RightSection>
        {options?.duration && <Duration>{sToStr(duration)}</Duration>}
        {options?.menu?.visible && (
          <MenuButton>
            {showPopUp && (
              <PopUpButtons
                removeTrackFromAddTrackFn={removeTrackFromAdd}
                addTrackToAddTrackFn={addTrackToAdd}
                isAddTrack={isAddTrack}
                addTrackToPlaylistFn={addTrackToPlayList}
                deleteTrackFn={deleteTrackFromPlaylist}
                menuOptions={options?.menu}
              />
            )}
            <DotsBtn
              popUpToogle={PopUpToogle}
              disablePopUp={() => setShowPopUp(false)}
              icon={`${symbol}#icon-more-dots`}
            />
          </MenuButton>
        )}
      </RightSection>
      {showModalAddTrackToPlaylist && (
        <AddTracksUser
          idTrack={idTrack}
          handleCloseModal={() => setShowModalAddTrackToPlaylist(false)}
        />
      )}
    </SongRow>
  );
};

export default MobileTrackItem;

MobileTrackItem.propTypes = {
  index: PropTypes.number,
  idTrack: PropTypes.string,
  playListId: PropTypes.string,
  _id: PropTypes.string,
  cover: PropTypes.string,
  title: PropTypes.string,
  artist: PropTypes.string,
  duration: PropTypes.string,
  countOfSkip: PropTypes.number,
  isAddTrackUser: PropTypes.bool,
  options: PropTypes.object,
  addTrackInModal: PropTypes.bool
};
