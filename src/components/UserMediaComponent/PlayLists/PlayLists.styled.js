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

export const PlaylistItem = styled.li`
  display: flex;
   position: relative;
  justify-content: space-between;
  align-items: center;
  width: 310px;

  padding: 10px;
  border: 1px solid ${colors.accentHoverColor};
  border-radius: 10px;
  background-color: ${colors.activeBtnColor};
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
export const PlaylistImg = styled.img`
  border-radius: 10px;
  /* margin-right: auto; */
  margin-right: ${(props) => props.marginRight ?? "auto"};
`;

export const PlaylistInfoWrapper = styled.div`
  margin: 0 auto 0 0;
`;

export const PlaylistItemText = styled.p`
  font-size: 16px;
  line-height: 1.19;
  font-weight: 500;
  color: ${colors.mainFontColor};
  margin-right: auto;
  margin-bottom: 2px;
`;

export const PlaylistCountTracks = styled(PlaylistItemText)`
  margin-bottom: 0;
`;

export const PlaylistIconsWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const PlaylistDeleteButton = styled.button`
  background: none;
  border: none;

  &:disabled {
    svg {
      fill: ${colors.bBgModal};
    }
  }
`;
