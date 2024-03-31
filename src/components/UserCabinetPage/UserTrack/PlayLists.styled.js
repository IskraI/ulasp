import styled from "@emotion/styled";
import { colors, mainCubicTransition } from "../../../styles/vars";
import { keyframes } from "@emotion/react";

export const PlaylistWrapper = styled.section`
  /* display: flex; */
`;

const marqueeAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const PlaylistList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 50px;
`;

export const PlaylistItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 310px;
  max-height: 58px;
  overflow: hidden;
  padding: 10px;
  border: 1px solid ${colors.accentHoverColor};
  border-radius: 10px;
  background-color: ${colors.activeBtnColor};

  &:hover {
    background: #fff3bf;
    border-radius: 10px;
    font-weight: 600;
    transform: translateY(-5px);
    transition: transform 250ms ${mainCubicTransition};
  }

  &:focus {
    background: #fff3bf;
    border-radius: 10px;
    font-weight: 600;
    transform: translateY(-5px);
    transition: transform 250ms ${mainCubicTransition};
  }
`;

export const PlaylistImg = styled.img`
  border-radius: 10px;
  margin-right: 8px;
`;

export const PlaylistItemText = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.mainFontColor};
  margin-right: auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  animation: ${marqueeAnimation} 8s linear infinite;
`;
export const PlaylistItemText2 = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${colors.mainFontColor};
  margin-right: auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const PlaylistIconsWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 10px;
  display: flex;
  gap: 4px;
`;

export const PlaylistDeleteButton = styled.button`
  background: none;
  border: none;
`;

export const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  max-width: calc(100% - 100px);
`;
export const PlaylistAddButton = styled.button`
  background: none;
  border: none;
  cursor: cell;
  outline: none;
  &:disabled {
    pointer-events: none;
  }
`;
