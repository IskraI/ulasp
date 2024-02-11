/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import { setCurrentIndex } from "../../redux/playerSlice";
import {
  PlayerWrapper,
  PlayerReact,
  TracksArtist,
  TrackName,
} from "./Player.styled";
import { BASE_URL } from "../../constants/constants";

const Player = ({ tracks = [] }) => {
  const [currentTrack, setTrackIndex] = useState(0);
  const dispatch = useDispatch();
  // const [isPlaying, setIsPlaying] = useState(false);

  // const handlePlay = useCallback((trackId) => {
  //   setIsPlaying(true);
  //   console.log(`Песня с ID ${trackId} начала проигрываться.`);
  // }, []);

  const trackSRC = BASE_URL + "/" + tracks[currentTrack]?.trackURL;

  const reduxTrackSRC = BASE_URL + "/" + tracks[currentTrack];

  useEffect(() => {
    dispatch(setCurrentIndex(currentTrack));

    if (tracks[currentTrack] === undefined) {
      setTrackIndex(0);
    }
  }, [currentTrack, dispatch, tracks]);

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < tracks.length - 1 ? currentTrack + 1 : 0
    );
  };

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack > tracks.length - 1 || currentTrack === 0
        ? tracks.length - 1
        : currentTrack - 1
    );
  };

  const handleEnd = () => {
    console.log("Песня завершила проигрывание.");
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
            // onPlay={() => handlePlay(tracks[currentTrack]?.id)}
          />
        </>
        {/* )} */}
      </PlayerWrapper>
    </>
  );
};

export default Player;
