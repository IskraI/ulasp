import styled from "@emotion/styled";
import AudioPlayer from "react-h5-audio-player";
import "./player.css";
export const PlayerWrapper = styled.div`
  margin-top: auto;
  padding: ${({ inHeader }) => (inHeader ? "4px" : "12px")};
  display: flex;
  flex-direction: ${({ inHeader }) => (inHeader ? "row-reverse" : "column")};
  gap: ${({ inHeader }) => (inHeader ? "24px" : null)};
  width: ${({ inHeader }) => (inHeader ? "80%" : "100%")};
  height: ${({ inHeader }) => (inHeader ? "80px" : "156px")};
  /* border: 1px solid black; */
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const TracksArtist = styled.p`
  font-size: ${({ inHeader }) => (inHeader ? "14px" : "16px")};
  /* font-size: 16px; */
  font-weight: ${({ inHeader }) => (inHeader ? "500" : "600")};
  line-height: 1.21;
  align-self: center;
  margin-bottom: ${({ inHeader }) => (inHeader ? "0" : "2px")};
  padding: 4px;
`;

export const TrackName = styled.p`
  font-size: ${({ inHeader }) => (inHeader ? "12px" : "14px")};
  font-weight: 500;
  line-height: 1.21;
  align-self: center;
  padding: 4px;
  overflow-x: hidden;
`;

export const PlayerReact = styled(AudioPlayer)`
  padding-top: 0;
  width: 100%;
  height: 80%;
`;
