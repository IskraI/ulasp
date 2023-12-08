import styled from "@emotion/styled";
import { colors } from "../../../styles/vars";


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
`;

export const PlaylistImg = styled.img`
  border-radius: 10px;
  margin-right: auto;
`;

export const PlaylistItemText = styled.p`
  font-size: 16px;
  line-height: 1.19;
  color: ${colors.mainFontColor};
  margin-right: auto;
`;

export const PlaylistIconsWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const PlaylistDeleteButton = styled.button`
  background: none;
  border: none;
`;
