/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import {
  setCurrentIndex,
  pause,
  updateIsFirstPlay,
} from "../../redux/playerSlice";
import { useUpdateListenCountTrackByIdMutation } from "../../redux/tracksUserSlice";

import { getPlayerState } from "../../redux/playerSelectors";

import { BASE_URL } from "../../constants/constants";

import {
  PlayerWrapper,
  PlayerReact,
  TracksArtist,
  TrackName,
} from "./Player.styled";

const Player = ({ tracks = [], isFirst }) => {
  const playerRef = useRef();
  const dispatch = useDispatch();
  const playerState = useSelector(getPlayerState);
  const currentTrackIndex = playerState.indexTrack;
  const isPlaying = playerState.isPlaying;
  const isPaused = playerState.isPaused;

  const [currentTrack, setTrackIndex] = useState();
  const [isPressedNext, setIsPressedNext] = useState(false);
  const [isPressedPrev, setIsPressedPrev] = useState(false);
  const [isEndOfPlaylist, setIsEndOfPlaylist] = useState(false);
  const [currentTrackArtist, setCurrentTrackArtist] = useState("Невизначений");
  const [currentTrackName, setCurrentTrackName] = useState("Невизначений");

  // const [isFirstPlay, setIsFirstPlay] = useState(isFirst);
  // const [isLoadStarted, setIsLoadStarted] = useState(false);

  const [dispatchListenCountTrack] = useUpdateListenCountTrackByIdMutation();
  // console.log("isFirstPlay", isFirst);
  const handlePlayLoadStart = async (track) => {
    if (isFirst) {
      console.log(
        `handlePlayLoadStart Песня с ${track} ID начала проигрываться. Отправим dispatchListenCountTrack`
      );
      if (track) {
        try {
          // Отправка запроса в бэкенд

          await dispatchListenCountTrack(track);
          console.log("Запрос в бэкенд отправлен успешно");
          dispatch(updateIsFirstPlay(false));
        } catch (error) {
          console.error("Ошибка при отправке запроса в бэкенд:", error);
        }
      } else {
        console.log(
          "Значение track не определено. Запрос на бэкенд не отправлен."
        );
      }
    }
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
    // console.log("playerRef", playerRef?.current);
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
  };

  return (
    <>
      <PlayerWrapper>
        <>
          <TracksArtist>
            {isPlaying
              ? currentTrackArtist
              : isPaused
              ? currentTrackArtist
              : noData
              ? currentTrackArtist
              : currentTrackArtist}
          </TracksArtist>
          <TrackName>
            {isPlaying
              ? currentTrackName
              : isPaused
              ? currentTrackName
              : noData
              ? currentTrackName
              : currentTrackName}
          </TrackName>

          <PlayerReact
            onPause={() => {
              dispatch(pause());
            }}
            onPlay={() => {
              if (!isPlaying) {
                dispatch(setCurrentIndex(currentTrackIndex));
              }
              handlePlayLoadStart(tracks[currentTrack]?.id);
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
            onClickNext={handleClickNext}
            onClickPrevious={handleClickPrevious}
            onEnded={handleEnd}
          />
        </>
      </PlayerWrapper>
    </>
  );
};

export default Player;
