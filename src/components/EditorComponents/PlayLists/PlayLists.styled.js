import styled from "@emotion/styled";
import { colors, transition, mainCubicTransition } from "../../../styles/vars";
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
  justify-content: space-between;
  align-items: center;
  width: 310px;

  padding: 10px;
  border: 1px solid ${colors.accentHoverColor};
  border-radius: 10px;
  background-color: ${colors.activeBtnColor};

  &:hover {
    background-color: ${colors.accentHoverColor};
    transition: background-color 500ms ${mainCubicTransition};
  }
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
  margin-left: 4px;
  margin-bottom: 2px;
  padding: 0 6px 0 6px;
  text-align: center;
`;

// export const PlaylistCountTracks = styled(PlaylistItemText)`
//   margin-top: 6px;
//   margin-bottom: 0;
// `;

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

export const EditInputText = styled.input`
  text-align: center;
  padding: 8px;
  background: none;
  border: none;
  font-size: 16px;

  &:focus-visible {
    border: none;
    outline: none;
    text-align: center;
  }
`;

export const EditCardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

export const EditWrapper = styled.div`
  display: flex;
  position: relative;
  width: 60px;
  height: 40px;
`;

export const PlaylistButton = styled.button`
  background: none;
  border: none;
  padding: 0;

  &:disabled {
    svg {
      fill: ${colors.bBgModal};
    }
  }
`;

export const SvgPlaylist = styled.svg`
  fill: #000000;
  transition: fill 250ms ${mainCubicTransition};

  &:hover {
    width: 30px;
    height: 30px;
    /* fill: ${colors.accentHoverColor}; */
    transition: all 250ms ${mainCubicTransition};
  }
`;
