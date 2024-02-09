import styled from "@emotion/styled";
import AudioPlayer from "react-h5-audio-player";
import "./player.css";
export const PlayerWrapper = styled.div`
  margin-top: auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 156px;
  /* border: 1px solid black; */
  justify-content: center;
  align-items: flex-end;
`;

export const TracksArtist = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.21;
  align-self: center;
  margin-bottom: 2px;
`;

export const TrackName = styled.p`
  font-size: 14px;
  line-height: 1.29;
  align-self: center;
`;

export const PlayerReact = styled(AudioPlayer)`
  padding-top: 0;
  width: 100%;
  height: 80%;

  /* border: 1px solid red; */
`;
