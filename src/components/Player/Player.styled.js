import styled from "@emotion/styled";
import AudioPlayer from "react-h5-audio-player";
import { sizes } from "../../styles/SharedStyles";
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

export const TrackInfoWrapper = styled.div`
  /* width: 20%; */
  min-width: 20%;
  max-width: 20%;
  height: calc(${sizes.header.height} - 4px);
  display: ${({ inHeader }) => (inHeader ? "flex" : "block")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: 0px;
  overflow: hidden;
`;

export const TracksArtist = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: ${({ inHeader }) => (inHeader ? "14px" : "16px")};
  font-weight: ${({ inHeader }) => (inHeader ? "500" : "600")};
  line-height: 1.21;
  margin-bottom: ${({ inHeader }) => (inHeader ? "0" : "2px")};
  padding: 6px 1px 2px 1px;
  height: 50%;

  word-break: break-all;
  text-align: center;
  cursor: help;
`;

export const TrackName = styled.p`
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  overflow: hidden;

  word-break: break-all;
  font-size: ${({ inHeader }) => (inHeader ? "12px" : "14px")};
  font-weight: 400;
  line-height: 1.21;
  padding: 4px 1px 2px 1px;
  height: calc(50% - 4px);
  text-align: center;
  cursor: help;
`;

export const PlayerReact = styled(AudioPlayer)`
  padding-top: 0;
  width: 100%;
  height: 80%;
`;

export const SvgLoop = styled.svg`
  margin: auto;
  fill: #000000;
`;
