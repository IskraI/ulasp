/* eslint-disable react/prop-types */
import {
  PlayerWrapper,
  PlayerReact,
  TracksArtist,
  TrackName,
} from "./Player.styled";
import { BASE_URL } from "../../constants/constants";

import { useState } from "react";

const Player = ({ display, tracks }) => {
  const [currentTrack, setTrackIndex] = useState(0);

  const trackSRC = BASE_URL + "/" + tracks[currentTrack]?.trackURL;

  console.log(tracks);
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
    console.log("end");
    setTrackIndex((currentTrack) =>
      currentTrack < tracks.length - 1 ? currentTrack + 1 : 0
    );
  };

  return (
    <>
      <PlayerWrapper style={{ display }}>
        {tracks.length && (
          <>
            <TracksArtist>{tracks[currentTrack].artist}</TracksArtist>
            <TrackName>{tracks[currentTrack].trackName}</TrackName>
            <PlayerReact
              autoPlay={false}
              autoPlayAfterSrcChange={true}
              src={trackSRC}
              showSkipControls
              onClickNext={handleClickNext}
              onClickPrevious={handleClickPrevious}
              onEnded={handleEnd}
            />
          </>
        )}
      </PlayerWrapper>
    </>
  );
};

export default Player;
