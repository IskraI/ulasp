import styled from "@emotion/styled";
import { colors, mainCubicTransition } from "../../../styles/vars";

export const ShopsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 310px;
  position: relative;
  padding: 10px;
  border: 1px solid ${colors.accentHoverColor};
  border-radius: 10px;
  background-color: ${colors.activeBtnColor};
`;

export const ShopsImg = styled.img`
  border-radius: 10px;
  margin-right: auto;
`;

export const ShopsItemText = styled.p`
  font-size: 16px;
  line-height: 1.19;
  color: ${colors.mainFontColor};
  margin-right: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ShopsIconsWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const ShopsDeleteButton = styled.button`
  background: none;
  border: none;
`;
