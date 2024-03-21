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

export const THeadStyle = styled.thead`
  margin: -1px;
`;

export const ThTitle = styled.th`
  color: ${colors.mainFontColor};
  font-size: 1px;
  font-weight: 100;
  line-height: 0.01;
  text-align: left;
  padding: 0px;
  opacity: ${(props) => (props.showData ? 1 : 0)};

  &:nth-of-type(${(props) => props.index || "1"}) {
    width: ${(props) => props.widthTh || "10%"};
  }
`;

export const TrStyle = styled.tr`
  /* outline: 1px solid red; */
  &:nth-of-type(even) {
    background-color: rgba(234, 234, 234, 0.32);
  }
`;

export const TableCell = styled.td`
  padding: 4px 0px 8px 12px;
  opacity: ${(props) => (props.showData ? 1 : 0)};

  width: ${(props) => (props.showData ? "" : "1px")};
  height: ${(props) => (props.showData ? "" : "1px")};
  margin: ${(props) => (props.showData ? "" : "-1px")};
  border: ${(props) => (props.showData ? "" : 0)};
  padding: ${(props) => (props.showData ? "" : 0)};

  white-space: ${(props) => (props.showData ? "" : "nowrap")};
  overflow: ${(props) => (props.showData ? "" : "hidden")};

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





