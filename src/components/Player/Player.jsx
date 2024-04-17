import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  useEffect,
  useLayoutEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from "react";
import {
  setPreloadSrcPlayer,
  setCurrentIndex,
  pause,
  updateIsFirstPlay,
  stopPlay,
  setDefaultState,
  setNextPage,
  setSrcPlaying,
  setIsSorted,
} from "../../redux/playerSlice";
import { useUpdateListenCountTrackByIdMutation } from "../../redux/tracksUserSlice";
import { usePrefetch } from "../../redux/tracksSlice";

import { getPlayerState } from "../../redux/playerSelectors";

import { BASE_URL } from "../../constants/constants";
import {
  PlayerWrapper,
  PlayerReact,
  TracksArtist,
  TrackName,
} from "./Player.styled";

import useIsCurrentPageForTrack from "./useIsCurrentPageForTrack";

import ModalPlayerToPage from "./ModalPlayerToPage";

const Player = ({ tracks = [], inHeader = false }) => {
  const playerRef = useRef();
  const dispatch = useDispatch();
  const playerState = useSelector(getPlayerState);

  const {
    isPlaying,
    isPaused,
    isLastTrack,
    isLastPage,
    currentPage,
    nextPage,
    isSorted,
  } = playerState;

  const currentTrackIndex = playerState.indexTrack;
  const isFirst = playerState.isFirstPlay;
  const currentPageSize = playerState.pageSize;

  const [currentTrack, setTrackIndex] = useState();
  const [isPressedNext, setIsPressedNext] = useState(false);
  const [isPressedPrev, setIsPressedPrev] = useState(false);
  const [isEndOfPlaylist, setIsEndOfPlaylist] = useState(false);
  const [currentTrackArtist, setCurrentTrackArtist] = useState("Невизначений");
  const [currentTrackName, setCurrentTrackName] = useState("Невизначений");
  const [error, setError] = useState(true);

  const [showModalToPage, setShowModalToPage] = useState(false);
  const [replacedToPage, setReplacedToPage] = useState(true);

  const requestSentRef = useRef(false);
  const [listenDuration, setListenDuration] = useState(0);

  const [intervalId, setIntervalId] = useState(null);
  const prefetchPage = usePrefetch("getAllTracks");

  useMemo(() => {
    if (inHeader) {
      const el = document.getElementsByClassName("rhap_stacked");
      if (el[0] !== undefined) {
        el[0].className =
          ".rhap_stacked .rhap_controls-section .without_margin";
      }
    }
  }, [inHeader]);

  const prefetchNext = useCallback(() => {
    prefetchPage({ page: nextPage, limit: currentPageSize });
  }, [currentPageSize, nextPage, prefetchPage]);

  // const [isFirstPlay, setIsFirstPlay] = useState(isFirst);
  // const [isLoadStarted, setIsLoadStarted] = useState(false);

  const [dispatchListenCountTrack] = useUpdateListenCountTrackByIdMutation();
  // console.log("isFirstPlay", isFirst);

  const handlePlayLoadStart = async (track) => {
    // console.log("isFirst :>> ", isFirst);
    if (isFirst) {
      console.log(
        `handlePlayLoadStart Песня с ${track} ID начала проигрываться. попробуем отправить счетчик dispatchListenCountTrack`
      );

      if (track) {
        try {
          // Отправка запроса в бэкенд

          await dispatchListenCountTrack(track);

          console.log("Счетчик Запрос в бэкенд отправлен успешно");
          dispatch(updateIsFirstPlay(false));
        } catch (error) {
          console.error("Ошибка при отправке запроса в бэкенд:", error);
        }
      } else {
        console.log(
          "запрос не отправляли - нет Значение track не определено. Запрос на бэкенд не отправлен."
        );
      }
    }
  };

  const noData = tracks[currentTrack]?.trackURL === undefined;
  const trackSRC = BASE_URL + "/" + tracks[currentTrack]?.trackURL;

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
      requestSentRef.current = false;
    }
  }, [currentTrack, currentTrackIndex, isPaused, isPlaying, tracks]);

  useEffect(() => {
    if (isEndOfPlaylist || isPressedPrev || isPressedNext) {
      if (currentTrack === 0) {
        dispatch(setNextPage({ currentPage: 1 }));
      }
      dispatch(setCurrentIndex(currentTrack));

      setIsPressedNext(false);
      setIsPressedPrev(false);
      setIsEndOfPlaylist(false);
      setListenDuration(0);
      requestSentRef.current = false;
      clearInterval(intervalId);
      if (isSorted) {
        dispatch(setIsSorted({ isSorted: false }));
      }
    }
  }, [
    currentTrack,
    dispatch,
    // intervalId,
    isEndOfPlaylist,
    isPressedNext,
    isPressedPrev,
    isSorted,
  ]);

  useEffect(() => {
    if (isSorted) {
      setReplacedToPage(false);
    }
  }, [isSorted]);
  useLayoutEffect(() => {
    console.log("replacedToPage", replacedToPage);
    if (currPageTrack === 0 || isNaN(currPageTrack) || replacedToPage) {
      return;
    }
    if (
      currPageTrack !== 0 &&
      currPageTrack !== currentPage &&
      !replacedToPage
    ) {
      setShowModalToPage(true);
    }
  }, [currPageTrack, currentPage, replacedToPage]);

  useEffect(() => {
    if (!isPaused && playerRef.current.audio.current.currentTime !== 0) {
      playerRef.current.audio.current.play();
    }
  }, [isPaused]);

  const handleClickNext = () => {
    console.log("handleClickNext :>> ", isFirst);
    dispatch(updateIsFirstPlay(true));
    setIsPressedNext(true);
    setListenDuration(0);
    requestSentRef.current = false;

    if (isSorted) {
      isSortedTracks("next");
    } else {
      setTrackIndex((currentTrack) =>
        currentTrack < tracks.length - 1 ? currentTrack + 1 : 0
      );
    }

    if (isLastTrack) {
      dispatch(setNextPage({ currentPage: nextPage }));
    }
  };

  const handleClickPrevious = () => {
    dispatch(updateIsFirstPlay(true));
    setIsPressedPrev(true);
    requestSentRef.current = false;
    if (isSorted) {
      isSortedTracks("prev");
    } else {
      setTrackIndex((currentTrack) =>
        currentTrack > tracks.length - 1 || currentTrack === 0
          ? tracks.length - 1
          : currentTrack - 1
      );
    }
  };

  const handleEnd = () => {
    console.log("Песня завершила проигрывание.");
    dispatch(updateIsFirstPlay(true));
    setIsEndOfPlaylist(true);
    setListenDuration(0);
    clearInterval(intervalId);
    requestSentRef.current = false;
    if (isSorted) {
      isSortedTracks("end");
    } else {
      setTrackIndex((currentTrack) =>
        currentTrack < tracks.length - 1 ? currentTrack + 1 : 0
      );
    }

    console.log("handleEnd currentTrack :>> ", currentTrack);
    if (isLastTrack) {
      dispatch(setNextPage({ currentPage: nextPage }));
    }
  };

  const isSortedTracks = (typeOfButton) => {
    switch (typeOfButton) {
      case "end":
        dispatch(
          setSrcPlaying({
            indexTrack: idxOfTrack < tracks.length - 1 ? idxOfTrack + 1 : 0,
          })
        );

        break;

      case "prev":
        setTrackIndex(
          idxOfTrack > tracks.length - 1 || idxOfTrack === 0
            ? tracks.length - 1
            : idxOfTrack - 1
        );
        dispatch(setSrcPlaying());
        break;

      case "next":
        setTrackIndex(idxOfTrack < tracks.length - 1 ? idxOfTrack + 1 : 0);
        dispatch(setSrcPlaying());
        break;
      default:
        console.log("this type is not supported");
    }
  };
  //
  // console.log("listenDuration :>> ", listenDuration);
  // console.log("isPlaying :>> ", isPlaying);
  // console.log("isPaused :>> ", isPaused);
  // console.log("isFirst :>> ", isFirst);

  useEffect(() => {
    // console.log("requestSentRef.current :>> ", requestSentRef.current);

    if (playerRef?.current?.audio.current.error) {
      //если ошибка при проигрывании то выходим из этого еффекта и ничего не делаем. если ошибки нет то считаем время
      // console.log("error :>> ", playerRef?.current?.audio.current.error);
      return;
    }

    if (isPlaying && listenDuration < 30 && !requestSentRef.current) {
      const id = setInterval(() => {
        setListenDuration((prevSeconds) => prevSeconds + 1);
      }, 1000);

      return () => clearInterval(id); // Очистка интервала при размонтировании компонента
    } else if (listenDuration === 30 && !requestSentRef.current) {
      // console.log("отправляем на бек :>> ");
      handlePlayLoadStart(tracks[currentTrack]?.id);
      requestSentRef.current = true;
    }
  }, [
    isPlaying,
    listenDuration,
    currentTrack,
    playerRef?.current?.audio.current.error,
  ]);

  // console.log(
  //   "playerRef.current.audio.current :>> ",
  //   playerRef?.current?.audio.current.error
  // );

  return (
    <>
      <PlayerWrapper inHeader={inHeader}>
        <>
          <div
            style={{
              width: "30%",
              display: inHeader ? "flex" : "block",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "4px",
              textAlign: "center",
              border: "0px",
              // outline: "1px solid red",
            }}
          >
            <TracksArtist inHeader={inHeader}>
              {isPlaying
                ? currentTrackArtist
                : isPaused
                ? currentTrackArtist
                : noData
                ? currentTrackArtist
                : currentTrackArtist}
            </TracksArtist>

            <TrackName inHeader={inHeader}>
              {isPlaying
                ? currentTrackName
                : isPaused
                ? currentTrackName
                : noData
                ? currentTrackName
                : currentTrackName}
            </TrackName>
          </div>

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
              if (isPlaying && isFirst) {
                setListenDuration(0);
              }
              // if (!isPlaying && playerState.src.length === 0) {
              //   dispatch(
              //     setSrcPlaying({
              //       indexTrack: 0,
              //     })
              //   );
              // } else {
              //   dispatch(
              //     setCurrentIndex(
              //       currentTrack + (currentPage - 1) * currentPageSize
              //     )
              //   );
              // }
            }}
            // if (isPlaying && !isPaused && isFirst) {

            //

            onListen={() => {
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
            preload={"none"}
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
          />
        </>
      </PlayerWrapper>
      {showModalToPage && (
        <ModalPlayerToPage
          onClose={() => setShowModalToPage(false)}
          moveToPage={currPageTrack}
          isReplacedToPage={() => setReplacedToPage(true)}
        />
      )}
    </>
  );
};

Player.propTypes = {
  tracks: PropTypes.array,
  inHeader: PropTypes.bool,
};

export default Player;
