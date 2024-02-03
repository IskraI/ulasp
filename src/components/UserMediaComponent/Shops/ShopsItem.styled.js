import styled from "@emotion/styled";
import { colors, mainCubicTransition } from "../../../styles/vars";

export const ShopsItem = styled.li`
  display: flex;
  justify-content: space-between;
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

export const ShopsImg = styled.img`
  border-radius: 10px;
  margin-right: auto;
`;

export const ShopsItemText = styled.p`
  font-size: 16px;
  line-height: 1.19;
  color: ${colors.mainFontColor};
  margin-right: auto;
`;

export const ShopsIconsWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const ShopsDeleteButton = styled.button`
  background: none;
  border: none;
`;
