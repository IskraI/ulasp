import styled from "@emotion/styled";
import { colors } from "../../../styles/vars";

export const GenresItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 310px;

  padding: 10px;
  border: 1px solid ${colors.accentHoverColor};
  border-radius: 10px;
  background-color: ${colors.activeBtnColor};
`;

export const GenresImg = styled.img`
  border-radius: 10px;
  margin-right: auto;
`;

export const GenresItemText = styled.p`
  font-size: 16px;
  line-height: 1.19;
  color: ${colors.mainFontColor};
  margin-right: auto;
`;

export const GenresIconsWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const GenresDeleteButton = styled.button`
  background: none;
  border: none;
`;
