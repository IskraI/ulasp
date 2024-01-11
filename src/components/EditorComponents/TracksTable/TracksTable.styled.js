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
  /* border-collapse: collapse; */
  border-collapse: separate;
  border-spacing: 0 2px;
`;

export const THeadStyle = styled.thead``;

export const RowTitle = styled.th`
  color: ${colors.mainFontColor};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.21;
  text-align: left;
  gap: 20px;
  padding: 8px 10px 18px 10px;

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
    width: 15%;
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
  /* outline: 1px solid red; */
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
  padding: 8px 0px 8px 10px;

  border: solid 1px transparent;
  border-style: none solid;

  &:first-of-type {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &:last-of-type {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    text-align: right;
    padding-right: 10px;
  }
`;

export const TrackCover = styled.img`
  border-radius: 10%;
  margin: 0 auto;
`;

export const TracksTitle = styled.p`
  display: ${(props) => props.showTitle};
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

export const MockPlayer = styled.div`
  margin-top: auto;
  display: flex;
  width: 100%;
  height: 86px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: yellowgreen;
`;

export const PopUpTracksTable = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: red;
  padding: 6px;
  width: 100%;
  height: 100%;
  border: 12px solid red;
  top: -10px;
  right: 67px;
  z-index: 10;
`;

export const PopUpButton = styled.button`
  width: 150px;
  padding: 4px;
  border: 0;
`;
