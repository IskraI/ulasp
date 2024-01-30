import styled from "@emotion/styled";
import { colors, transition, mainCubicTransition } from "../../../styles/vars";

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

export const TracksTitle = styled.caption`
  display: ${(props) => props.showTitle};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  color: ${colors.mainFontColor};
  margin-top: 20px;
  margin-bottom: 24px;
  text-align: start;
`;

export const THeadStyle = styled.thead``;

export const ThTitle = styled.th`
  color: ${colors.mainFontColor};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.21;
  text-align: left;
  gap: 20px;
  padding: 8px 10px 18px 10px;
  /* display: ${(props) => (props.showData ? null : "none")}; */
  opacity: ${(props) => (props.showData ? 1 : 0)};

  /* outline: 1px solid green; */

  &:nth-of-type(${(props) => props.index || "1"}) {
    width: ${(props) => props.widthTh || "10%"};
  }

  /* &:nth-of-type(2) {
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
  &:nth-of-type(8) {
    width: 5%;
  } */
`;

export const TrStyle = styled.tr`
  /* outline: 1px solid red; */
  &:nth-of-type(even) {
    background-color: rgba(234, 234, 234, 0.32);
  }
`;

export const TableCell = styled.td`
  padding: 8px 0px 8px 10px;
  /* display: ${(props) => (props.showData ? null : "none")}; */
  opacity: ${(props) => (props.showData ? 1 : 0)};

  /* position: ${(props) => (props.showData ? "" : "absolute")}; */
  width: ${(props) => (props.showData ? "" : "1px")};
  height: ${(props) => (props.showData ? "" : "1px")};
  margin: ${(props) => (props.showData ? "" : "-1px")};
  border: ${(props) => (props.showData ? "" : 0)};
  padding: ${(props) => (props.showData ? "" : 0)};

  white-space: ${(props) => (props.showData ? "" : "nowrap")};
  overflow: ${(props) => (props.showData ? "" : "hidden")};

  /* border: solid 1px transparent;
  border-style: none solid; */

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

  white-space: break-spaces;
`;

export const InfoBlock = styled.p`
  display: ${(props) => (props.showData ? "" : "none")};
`;

export const TrackCover = styled.img`
  border-radius: 10%;
  margin: 0 auto;
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

export const DotsButton = styled.button`
  background: none;
  border: none;
  outline: none;
  width: 50px;
`;

export const PopUpTracksTableWrapper = styled.div`
  position: relative;
`;

export const PopUpTracksTable = styled.div`
  position: absolute;
  z-index: 10;
  bottom: -30px;
  right: 35px;
  margin: 20px auto;
  /* outline: 1px solid red; */
  width: 200px;
  display: flex;
  flex-direction: column;
  background-color: #a4bcd4;
  border-radius: 10px;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
`;

export const PopUpButton = styled.button`
  padding: 12px 4px;

  cursor: pointer;
  font-size: 14px;
  background: none;
  border: none;
  outline: none;

  &:hover {
    background: #fff3bf;
    border-radius: 10px;
    font-weight: 600;
    transform: translateY(-5px);
    transition: transform 250ms ${mainCubicTransition};
  }

  &:not(:last-of-type) {
    margin-bottom: 4px;
  }
`;
