import styled from "@emotion/styled";
import { colors } from "../../../styles/vars";
import { Link } from "react-router-dom";

export const PlaylistWrapper = styled.section`
  /* display: flex; */
`;

export const PlaylistList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 50px;
`;

export const LinkToTracks = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const PlaylistCardInfo = styled.div`
  display: flex;
  align-items: center;
  width: 310px;
  padding: 10px;
  border: 1px solid ${colors.accentHoverColor};
  border-radius: 10px;
  background-color: ${colors.activeBtnColor};
`;

export const PlaylistInfoWrapper = styled.div`
  width: 100%;
  margin: 0 auto 0 0;
`;
