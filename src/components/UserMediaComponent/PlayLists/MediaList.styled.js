import styled from "@emotion/styled";
import { colors } from "../../../styles/vars";

export const ControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 26px;
  margin-bottom: 24px;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 310px;

  padding: 10px;
  border: 1px solid ${colors.accentHoverColor};
  border-radius: 10px;
  background-color: ${colors.activeBtnColor};
`;

export const MediaImg = styled.img`
  border-radius: 10px;
`;

export const MediaItemText = styled.p`
  font-size: 16px;
  line-height: 1.19;
  color: ${colors.mainFontColor};
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 4px;
`;
