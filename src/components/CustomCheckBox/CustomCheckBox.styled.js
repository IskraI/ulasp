import styled from "@emotion/styled";
import { colors, transition, mainCubicTransition } from "../../styles/vars";

export const CheckBoxLabel = styled.label`
  display: flex;
  justify-content: center;
  width: 18px;
  height: 18px;
  margin: 3px;
  border: 2px solid ${colors.mainFontColor};
  border-radius: 3px;
`;

export const CheckBoxSpan = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const CheckBoxSVG = styled.svg`
  position: absolute;
  top: 0px;
  left: 1px;
`;

export const CheckBoxInput = styled.input`
  display: none;
`;
