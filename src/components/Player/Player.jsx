import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef, useCallback } from "react";
import {
  setPreloadSrcPlayer,
  setCurrentIndex,
  pause,
  updateIsFirstPlay,
  stopPlay,
  setDefaultState,
  setNextPage,
  setSrcPlaying,
} from "../../redux/playerSlice";
import { useUpdateListenCountTrackByIdMutation } from "../../redux/tracksUserSlice";
import { usePrefetch } from "../../redux/tracksSlice";

import { getPlayerState } from "../../redux/playerSelectors";

import { BASE_URL } from "../../constants/constants";
import { RHAP_UI } from "react-h5-audio-player";
import {
  PlayerWrapper,
  PlayerReact,
  TracksArtist,
  TrackName,
} from "./Player.styled";

const Player = ({ tracks = [], inHeader = false }) => {
  const playerRef = useRef();
  const dispatch = useDispatch();
  const playerState = useSelector(getPlayerState);
  const currentTrackIndex = playerState.indexTrack;
  const isPlaying = playerState.isPlaying;
  const isPaused = playerState.isPaused;
  const isLastTrack = playerState.isLastTrack;
  const isLastPage = playerState.isLastPage;
  const currentPage = playerState.currentPage;
  const isFirst = playerState.isFirstPlay;
  const nextPage = playerState.nextPage;
  const currentPageSize = playerState.pageSize;

  const [currentTrack, setTrackIndex] = useState();
  const [isPressedNext, setIsPressedNext] = useState(false);
  const [isPressedPrev, setIsPressedPrev] = useState(false);
  const [isEndOfPlaylist, setIsEndOfPlaylist] = useState(false);
  const [currentTrackArtist, setCurrentTrackArtist] = useState("Невизначений");
  const [currentTrackName, setCurrentTrackName] = useState("Невизначений");
  const [error, setError] = useState(true);
  const prefetchPage = usePrefetch("getAllTracks");

  // console.log(
  //   "playerRef ====>>>>>",
  //   playerRef?.current?.container.current.style.svg
  // );

  useEffect(() => {
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
    if (isFirst) {
      // console.log(
      //   `handlePlayLoadStart Песня с ${track} ID начала проигрываться. попробуем отправить счетчик dispatchListenCountTrack`
      // );

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
  // console.log("isFirst :>> ", isFirst);
  const handlePlay = () => {
    if (!isPlaying) {
      dispatch(pause());
    }

    // console.log("handlePlay :>> ");
    // handlePlayLoadStart(tracks[currentTrack]?.id);
  };

  const noData = tracks[currentTrack]?.trackURL === undefined;
  const trackSRC = BASE_URL + "/" + tracks[currentTrack]?.trackURL;
  // console.log("Локальный стейт плеера", currentTrack);
  // console.log("Глобальный стейт плеера", currentTrackIndex);

  useEffect(() => {
    if (isPlaying || isPaused) {
      setTrackIndex(currentTrackIndex);
      setCurrentTrackArtist(tracks[currentTrack]?.artist);

      setCurrentTrackName(tracks[currentTrack]?.trackName);
    } else {
      setTrackIndex();
    }
  }, [currentTrack, currentTrackIndex, dispatch, isPaused, isPlaying, tracks]);

  useEffect(() => {
    if (isEndOfPlaylist || isPressedPrev || isPressedNext) {
      dispatch(setCurrentIndex(currentTrack));
      setIsPressedNext(false);
      setIsPressedPrev(false);
      setIsEndOfPlaylist(false);
    }
  }, [currentTrack, dispatch, isEndOfPlaylist, isPressedNext, isPressedPrev]);

  useEffect(() => {
    if (!isPaused && playerRef.current.audio.current.currentTime !== 0) {
      playerRef.current.audio.current.play();
    }
  }, [isPaused]);

  const handleClickNext = () => {
    dispatch(updateIsFirstPlay(true));
    setIsPressedNext(true);
    setTrackIndex((currentTrack) =>
      currentTrack < tracks.length - 1 ? currentTrack + 1 : 0
    );

    if (isLastTrack) {
      dispatch(setNextPage({ currentPage: nextPage }));

      console.log("wead");
    }
  };

  const handleClickPrevious = () => {
    dispatch(updateIsFirstPlay(true));
    setIsPressedPrev(true);
    setTrackIndex((currentTrack) =>
      currentTrack > tracks.length - 1 || currentTrack === 0
        ? tracks.length - 1
        : currentTrack - 1
    );
  };

  const handleEnd = () => {
    console.log("Песня завершила проигрывание.");
    dispatch(updateIsFirstPlay(true));
    setIsEndOfPlaylist(true);

    setTrackIndex((currentTrack) =>
      currentTrack < tracks.length - 1 ? currentTrack + 1 : 0
    );
    console.log("handleEnd currentTrack :>> ", currentTrack);
    if (isLastTrack) {
      dispatch(setNextPage({ currentPage: nextPage }));
    }
  };
  // console.log("playerRef :>> ", playerRef);

  useEffect(() => {
    handlePlayLoadStart(tracks[currentTrack]?.id);
  }, [currentTrack]);

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
                dispatch(pause());
              }
            }}
            onPlay={handlePlay}
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
            onError={"onError"}
            onPlayError={"onPlayError"}
            // onLoadStart={() => handlePlayLoadStart(tracks[currentTrack]?.id)}
          />
        </>
      </PlayerWrapper>
      {/* <div>`${playerRef?.current?.container?.current}`</div> */}
    </>
  );
};

Player.propTypes = {
  tracks: PropTypes.array,
  inHeader: PropTypes.bool,
};

export default Player;
