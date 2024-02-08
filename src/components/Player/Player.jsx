/* eslint-disable react/prop-types */
import {
  PlayerWrapper,
  PlayerReact,
  TracksArtist,
  TrackName,
} from "./Player.styled";
import { BASE_URL } from "../../constants/constants";

import { useState } from "react";

const Player = ({ tracks = [] }) => {
  const [currentTrack, setTrackIndex] = useState(0);

  console.log(tracks);

  const trackSRC = BASE_URL + "/" + tracks[currentTrack]?.trackURL;

  const reduxTrackSRC = BASE_URL + "/" + tracks[currentTrack];

  // console.log(tracks[currentTrack]?.trackURL === undefined);

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
            showSkipControls
            showFilledVolume={true}
            onClickNext={handleClickNext}
            onClickPrevious={handleClickPrevious}
            onEnded={handleEnd}
          />
        </>
        {/* )} */}
      </PlayerWrapper>
    </>
  );
};

export default Player;
