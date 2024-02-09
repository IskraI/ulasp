import styled from "@emotion/styled";
import { colors, mainCubicTransition } from "../../../styles/vars";

export const ControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 145px; */
  margin-bottom: 24px;
`;
export const TitleContainer = styled.div`
  margin-bottom: 16px; 
`;
export const TitleWrapper = styled.p`
  font-size: 24px;
  line-height: 1.21;
  font-weight: 500;
  color: ${colors.mainFontColor};
  
`;

export const MediaList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
 

`;

export const MediaItem = styled.li`
position: relative;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  width: 310px;

  padding: 10px;
  border: 1px solid ${colors.accentHoverColor};
  border-radius: 10px;
  background-color: ${colors.activeBtnColor};

  &:hover{
 background: #fff3bf;
    border-radius: 10px;
    font-weight: 600;
    transform: translateY(-5px);
    transition: transform 250ms ${mainCubicTransition};
  }
`;

export const MediaImg = styled.img`
  border-radius: 10px;
`;

export const MediaItemText = styled.p`
position:absolute;
top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  line-height: 1.19;
  color: ${colors.mainFontColor};

`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 4px;
`;


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

export const PlaylistImg = styled.img`
  border-radius: 10px;
  margin-right: auto;
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
`;

export const SvgMedia = styled.svg`
  fill: #000000;
  transition: fill 350ms ${mainCubicTransition};

  &:hover {
    fill: ${colors.accentHoverColor};
    transition: fill 350ms ${mainCubicTransition};
  }
`;