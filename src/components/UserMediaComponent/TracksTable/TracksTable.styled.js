import styled from "@emotion/styled";
import { colors } from "../../../styles/vars";

export const TracksTableWrapper = styled.div`
  margin-top: ${(props) => props.marginTop};
`;

export const TableStyle = styled.table`
  margin-bottom: 34px;
  text-align: left;
  font-size: 18px;
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  /* border-collapse: separate; */
`;

export const THeadStyle = styled.thead``;

export const RowTitle = styled.th`
  color: ${colors.mainFontColor};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.21;
  text-align: left;
  gap: 20px;
  padding-top: 8px;
  padding-bottom: 18px;
  padding-right: 30px;
  padding-left: 10px;

  &:nth-of-type(1) {
    width: 5%;
  }
  &:nth-of-type(2) {
    width: 25%;
  }
  &:nth-of-type(3) {
    width: 15%;
  }
  &:nth-of-type(4) {
    width: 10%;
  }
  &:nth-of-type(5) {
    width: 10%;
  }
  &:nth-of-type(6) {
    width: 10%;
  }
  &:nth-of-type(7) {
    width: 5%;
  }
`;

export const TrStyle = styled.tr`
  &:nth-of-type(even) {
    background-color: rgba(234, 234, 234, 0.32);
  }

  /* &:first-child,
  &:last-child {
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
  } */
`;

export const TableCell = styled.td`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 10px;
  /* padding-right: 30px; */

  border: solid 1px transparent;
  border-style: none solid;

  &:first-of-type {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const TrackCover = styled.img`
  border-radius: 10%;
  margin: 0 auto;
`;

export const LatestTracks = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  color: ${colors.mainFontColor};
  margin-top: 20px;
  margin-bottom: 24px;
`;

export const TracksNotFound = styled.p`
  align-self: center;
  margin-top: 40px;
  font-size: 28px;
  color: grey;
`;


