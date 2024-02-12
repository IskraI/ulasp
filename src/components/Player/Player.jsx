/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import {
  setCurrentIndex,
  stopPlay,
  updateIsFirstPlay,
} from "../../redux/playerSlice";
import { useUpdateListenCountTrackByIdMutation } from "../../redux/tracksUserSlice";

import {
  PlayerWrapper,
  PlayerReact,
  TracksArtist,
  TrackName,
} from "./Player.styled";
import { BASE_URL } from "../../constants/constants";

const Player = ({ tracks = [], isFirst }) => {
  const [currentTrack, setTrackIndex] = useState(0);

  // const [isFirstPlay, setIsFirstPlay] = useState(isFirst);
  const dispatch = useDispatch();
  // const [isLoadStarted, setIsLoadStarted] = useState(false);

  const [dispatchListenCountTrack] = useUpdateListenCountTrackByIdMutation();
  console.log("isFirstPlay", isFirst);
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

  const trackSRC = BASE_URL + "/" + tracks[currentTrack]?.trackURL;

  const reduxTrackSRC = BASE_URL + "/" + tracks[currentTrack];

  useEffect(() => {
    dispatch(setCurrentIndex(currentTrack));

    if (tracks[currentTrack] === undefined) {
      setTrackIndex(0);
    }
  }, [currentTrack, dispatch, tracks]);

  const handleClickNext = () => {
    dispatch(updateIsFirstPlay(true));
    setTrackIndex((currentTrack) =>
      currentTrack < tracks.length - 1 ? currentTrack + 1 : 0
    );
  };

  const handleClickPrevious = () => {
    dispatch(updateIsFirstPlay(true));
    setTrackIndex((currentTrack) =>
      currentTrack > tracks.length - 1 || currentTrack === 0
        ? tracks.length - 1
        : currentTrack - 1
    );
  };

  const handleEnd = () => {
    console.log("Песня завершила проигрывание.");
    dispatch(updateIsFirstPlay(true));

    setTrackIndex((currentTrack) =>
      currentTrack < tracks.length - 1 ? currentTrack + 1 : 0
    );
  };

  const noData = tracks[currentTrack]?.trackURL === undefined;

  return (
    <>
      <PlayerWrapper>
        {/* {tracks.length !== 0 && ( */}
        <>
          <TracksArtist>
            {noData ? "Невизначений" : tracks[currentTrack]?.artist}
          </TracksArtist>
          <TrackName>
            {noData ? "Невизначений" : tracks[currentTrack]?.trackName}
          </TrackName>
          <PlayerReact
            autoPlay={false}
            autoPlayAfterSrcChange={true}
            volume={0.2}
            src={noData ? reduxTrackSRC : trackSRC}
            showSkipControls={tracks?.length > 1 ? true : false}
            showFilledVolume={true}
            onClickNext={handleClickNext}
            onClickPrevious={handleClickPrevious}
            onEnded={handleEnd}
            // onLoadStart={() => handlePlayLoadStart(tracks[currentTrack]?.id)}
            onPlay={() => handlePlayLoadStart(tracks[currentTrack]?.id)}
          />
        </>
        {/* )} */}
      </PlayerWrapper>
    </>
  );
};

export default Player;
