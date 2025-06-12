import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  useEffect,
  useLayoutEffect,
  useState,
  useRef,
  useCallback
} from 'react';

import { useNavigate } from 'react-router-dom';

import useIsMobile from '../../hooks/useMobile';

import { BASE_URL } from '../../constants/constants';

import {
  setPreloadSrcPlayer,
  setCurrentIndex,
  pause,
  // updateIsFirstPlay,
  stopPlay,
  setDefaultState,
  setNextPage,
  setSrcPlaying,
  setIsSorted
} from '../../redux/playerSlice';
import { useUpdateListenCountTrackByIdMutation } from '../../redux/tracksUserSlice';
import { usePrefetch } from '../../redux/tracksSlice';

import { getPlayerState } from '../../redux/playerSelectors';
import { RHAP_UI } from 'react-h5-audio-player';

import CustomControl from './CustomControl';
import {
  PlayerWrapper,
  PlayerReact,
  TrackInfoWrapper,
  TracksArtist,
  TrackName
} from './Player.styled';

import useIsCurrentPageForTrack from './useIsCurrentPageForTrack';

import ModalPlayerToPage from './ModalPlayerToPage';

const Player = ({ tracks = [], inHeader = false }) => {
  const playerRef = useRef();
  const dispatch = useDispatch();
  const playerState = useSelector(getPlayerState);
  const navigate = useNavigate();

  const {
    isPlaying,
    isPaused,
    isLastTrack,
    isLastPage,
    currentPage,
    nextPage,
    isSorted
  } = playerState;

  const currentTrackIndex = playerState.indexTrack;

  const currentPageSize = playerState.pageSize;
  const currentLocation = playerState.navigate;
  const [isMobile] = useIsMobile(1200);
  const [currentTrack, setTrackIndex] = useState();
  const [isPressedNext, setIsPressedNext] = useState(false);
  const [isPressedPrev, setIsPressedPrev] = useState(false);
  const [isEndTrack, setIsEndTrack] = useState(false);
  const [currentTrackArtist, setCurrentTrackArtist] = useState('');
  const [currentTrackName, setCurrentTrackName] = useState('');
  const [loop, setLoop] = useState(false);

  const [error, setError] = useState(true);

  const [showModalToPage, setShowModalToPage] = useState(false);
  const [replacedToPage, setReplacedToPage] = useState(true);

  const [requestSent, setRequestSent] = useState(false);
  const requestSentRef = useRef(false);
  const [listenDuration, setListenDuration] = useState(0);

  const [intervalId, setIntervalId] = useState(null);
  const prefetchPage = usePrefetch('getAllTracks');

  const updateRequestSent = (value) => {
    requestSentRef.current = value;
    setRequestSent(value);
  };
  useLayoutEffect(() => {
    if (inHeader) {
      const el = document.getElementsByClassName('rhap_controls-section');
      if (el[0] !== undefined) {
        el[0].style.marginTop = 0;
      }
    }
  }, [inHeader]);

  const prefetchNext = useCallback(() => {
    prefetchPage({ page: nextPage, limit: currentPageSize });
  }, [currentPageSize, nextPage, prefetchPage]);

  // const [isFirstPlay, setIsFirstPlay] = useState(isFirst);
  // const [isLoadStarted, setIsLoadStarted] = useState(false);

  const [dispatchListenCountTrack] = useUpdateListenCountTrackByIdMutation();

  // const handlePlayLoadStart = async (track) => {
  //   // console.log("listenDuration :>> ", listenDuration);
  //   // console.log("isFirst :>> ", isFirst);
  //   // if (isFirst) {
  //   // console.log(
  //   //   ` ${track}. попробуем отправить счетчик dispatchListenCountTrack`
  //   // );

  //   if (track) {
  //     try {
  //       // Отправка запроса в бэкенд

  //       await dispatchListenCountTrack(track);

  //       console.log('Счетчик Запрос в бэкенд отправлен успешно', track);
  //       // dispatch(updateIsFirstPlay(false));
  //     } catch (error) {
  //       console.error('Ошибка при отправке запроса в бэкенд:', error);
  //     }
  //   } else {
  //     console.log(
  //       'запрос не отправляли - нет Значение track не определено. Запрос на бэкенд не отправлен.'
  //     );
  //   }
  //   // }
  // };

  const handlePlayLoadStart = useCallback(
    async (track) => {
      if (track) {
        try {
          await dispatchListenCountTrack(track);

          console.log('Счетчик Запрос в бэкенд отправлен успешно', track);
        } catch (error) {
          console.error('Ошибка при отправке запроса в бэкенд:', error);
        }
      } else {
        console.log(
          'запрос не отправляли - нет Значение track не определено. Запрос на бэкенд не отправлен.'
        );
      }
    },
    [dispatchListenCountTrack]
  );

  const noData = tracks[currentTrack]?.trackURL === undefined;
  const trackSRC = BASE_URL + '/' + tracks[currentTrack]?.trackURL;

  const [idxOfTrack, currPageTrack] = useIsCurrentPageForTrack();

  // console.log("Локальный стейт плеера", currentTrack);
  // console.log("Глобальный стейт плеера", currentTrackIndex);

  useEffect(() => {
    if (isPlaying || isPaused) {
      setTrackIndex(currentTrackIndex);
      setCurrentTrackArtist(tracks[currentTrack]?.artist);

      setCurrentTrackName(tracks[currentTrack]?.trackName);
    } else {
      setTrackIndex();
      setListenDuration(0);
      updateRequestSent(false);
    }
  }, [currentTrack, currentTrackIndex, isPaused, isPlaying, tracks]);

  useEffect(() => {
    if (isEndTrack || isPressedPrev || isPressedNext) {
      if (currentTrack === 0 && currentPage !== 1) {
        dispatch(setNextPage({ currentPage: 1 }));
      }

      if (currentTrack !== null) {
        dispatch(setCurrentIndex(currentTrack));
      }

      setIsPressedNext(false);
      setIsPressedPrev(false);
      setIsEndTrack(false);
      setListenDuration(0);
      updateRequestSent(false);

      if (isSorted) {
        dispatch(setIsSorted({ isSorted: false }));
      }
    }
  }, [currentTrack, dispatch, isEndTrack, isPressedNext, isPressedPrev]);

  useEffect(() => {
    if (isSorted) {
      setReplacedToPage(false);
    }
  }, [isSorted]);

  // useLayoutEffect(() => {
  //   console.log("replacedToPage", replacedToPage);
  //   // requestSentRef.current = false;
  //   // setListenDuration(0);

  //   if (currPageTrack === 0 || isNaN(currPageTrack) || replacedToPage) {
  //     return;
  //   }
  //   if (
  //     currPageTrack !== 0 &&
  //     currPageTrack !== currentPage &&
  //     !replacedToPage
  //   ) {
  //     setShowModalToPage(true);
  //   }
  // }, [currPageTrack, currentPage, replacedToPage]);

  useEffect(() => {
    if (!isPaused && playerRef.current.audio.current.currentTime !== 0) {
      playerRef.current.audio.current.play();
    }
  }, [isPaused]);

  const handleClickPrevious = () => {
    // dispatch(updateIsFirstPlay(true));
    setIsPressedPrev(true);
    setListenDuration(0);
    updateRequestSent(false);
    if (isSorted) {
      isSortedTracks('prev');
    } else {
      setTrackIndex((currentTrack) =>
        currentTrack > tracks.length - 1 || currentTrack === 0
          ? tracks.length - 1
          : currentTrack - 1
      );
    }
  };

  const handleClickNext = () => {
    // dispatch(updateIsFirstPlay(true));
    setIsPressedNext(true);
    setListenDuration(0);

    updateRequestSent(false);

    if (isSorted) {
      isSortedTracks('next');
    } else {
      setTrackIndex((currentTrack) =>
        currentTrack < tracks.length - 1 ? currentTrack + 1 : 0
      );
    }

    if (isLastTrack && !isLastPage) {
      dispatch(setNextPage({ currentPage: nextPage }));
    }

    // console.log("handleEnd currentTrack :>> ", currentTrack);
    if (isLastPage && isLastTrack) {
      if (!loop) {
        dispatch(stopPlay([]));
        setTrackIndex(null);
      } else {
        setTrackIndex(0);
      }
      dispatch(setNextPage({ currentPage: nextPage }));
      return;
    }
  };

  const handleEnd = () => {
    console.log('Песня завершила проигрывание.');
    // dispatch(updateIsFirstPlay(true));
    setIsEndTrack(true);
    setListenDuration(0);
    clearInterval(intervalId);
    updateRequestSent(false);
    if (isSorted) {
      isSortedTracks('end');
    } else {
      setTrackIndex((currentTrack) =>
        currentTrack < tracks.length - 1 ? currentTrack + 1 : 0
      );
    }
    if (isLastTrack && !isLastPage) {
      dispatch(setNextPage({ currentPage: nextPage }));
    }

    // console.log("handleEnd currentTrack :>> ", currentTrack);
    if (isLastPage && isLastTrack) {
      dispatch(setNextPage({ currentPage: nextPage }));
      if (!loop) {
        dispatch(stopPlay([]));
      } else {
        setTrackIndex(0);
      }
      return;
    }
  };

  const isSortedTracks = (typeOfButton) => {
    switch (typeOfButton) {
      case 'end':
        dispatch(
          setSrcPlaying({
            indexTrack: idxOfTrack < tracks.length - 1 ? idxOfTrack + 1 : 0
          })
        );

        break;

      case 'prev':
        setTrackIndex(
          idxOfTrack > tracks.length - 1 || idxOfTrack === 0
            ? tracks.length - 1
            : idxOfTrack - 1
        );
        dispatch(setSrcPlaying());
        break;

      case 'next':
        setTrackIndex(idxOfTrack < tracks.length - 1 ? idxOfTrack + 1 : 0);
        dispatch(setSrcPlaying());
        break;
      default:
        console.log('this type is not supported');
    }
  };

  // console.log("listenDuration :>> ", listenDuration);

  useEffect(() => {
    console.log('requestSentRef.current :>> ', requestSentRef.current);
    if (playerRef?.current?.audio.current.error) {
      //если ошибка при проигрывании то выходим из этого еффекта и ничего не делаем. если ошибки нет то считаем время
      // console.log("error :>> ", playerRef?.current?.audio.current.error);
      return;
    }
    console.log('listenDuration :>> ', listenDuration);
    if (isPlaying && listenDuration < 10 && !requestSentRef.current) {
      const id = setInterval(() => {
        setListenDuration((prevSeconds) => prevSeconds + 1);
      }, 1000);

      return () => clearInterval(id); // Очистка интервала при размонтировании компонента
    } else if (isPlaying && listenDuration >= 10 && !requestSentRef.current) {
      console.log('отправили запрос :>> ');
      handlePlayLoadStart(tracks[currentTrack]?.id);
      updateRequestSent(true);
    }
  }, [
    isPlaying,
    listenDuration,
    currentTrack,
    tracks,
    handlePlayLoadStart,
    playerRef?.current?.audio.current.error,
    requestSent
  ]);

  //при смене трека в списке обнуляем значения отправки сообщения и обнуляем счетчик

  useEffect(() => {
    updateRequestSent(false);
    setListenDuration(0);
  }, [trackSRC]);

  const trackArtist = isPlaying
    ? currentTrackArtist
    : isPaused
    ? currentTrackArtist
    : noData
    ? currentTrackArtist
    : currentTrackArtist;

  const trackName = isPlaying
    ? currentTrackName
    : isPaused
    ? currentTrackName
    : noData
    ? currentTrackName
    : currentTrackName;

  console.log('currPageTrack', currPageTrack);

  return (
    <>
      <PlayerWrapper inHeader={inHeader}>
        <>
          <TrackInfoWrapper
            inHeader={inHeader}
            onClick={() => {
              console.log('Нажали', currentLocation);
              console.log('currPageTrack', currPageTrack);
              dispatch(setNextPage({ currentPage: currPageTrack }));
              navigate(currentLocation);
            }}
          >
            <TracksArtist inHeader={inHeader} title={trackArtist}>
              {trackArtist}
            </TracksArtist>

            <TrackName inHeader={inHeader} title={trackName}>
              {trackName}
            </TrackName>
          </TrackInfoWrapper>

          <PlayerReact
            onPause={() => {
              if (isPlaying && !isPaused) {
                dispatch(pause({ isPlaying: false, isPaused: true }));
              }
            }}
            onPlay={() => {
              if (!isPlaying) {
                dispatch(pause({ isPaused: false, isPlaying: true }));
              }
            }}
            onListen={() => {
              if (
                playerRef.current.audio.current.currentTime < 5 &&
                requestSentRef.current
              ) {
                updateRequestSent(false);
              }
              if (
                Math.ceil(playerRef.current.audio.current.duration * 0.95) ===
                  Math.ceil(playerRef.current.audio.current.currentTime) &&
                isLastTrack
              ) {
                prefetchNext();
              } else {
                return;
              }
            }}
            ref={playerRef}
            autoPlay={false}
            //может быть ошибка проигрывания после паузы и переключения трека на следующий
            // autoPlayAfterSrcChange={isPlaying ? true : false}
            autoPlayAfterSrcChange={isPlaying ? true : isPaused ? true : false}
            volume={0.2}
            preload={'none'}
            src={trackSRC}
            showSkipControls={tracks?.length > 1 ? true : false}
            showFilledVolume={true}
            onClickNext={() => {
              handleClickNext();
            }}
            onClickPrevious={handleClickPrevious}
            onEnded={handleEnd}
            onSeeking={() => setListenDuration(0)}
            // onError={"onError"}
            // onPlayError={"onPlayError"}
            // onLoadStart={() => handlePlayLoadStart(tracks[currentTrack]?.id)}
            customAdditionalControls={
              tracks?.length > 1
                ? [
                    <CustomControl
                      key={1}
                      onClick={() => setLoop(!loop)}
                      loop={loop}
                    />
                  ]
                : []
            }
            customVolumeControls={isMobile ? [] : [RHAP_UI.VOLUME]}
          />
        </>
      </PlayerWrapper>
      {/* {showModalToPage && (
        <ModalPlayerToPage
          onClose={() => setShowModalToPage(false)}
          moveToPage={currPageTrack}
          isReplacedToPage={() => setReplacedToPage(true)}
        />
      )} */}
    </>
  );
};

Player.propTypes = {
  tracks: PropTypes.array,
  inHeader: PropTypes.bool
};

export default Player;
