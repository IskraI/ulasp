import styled from "@emotion/styled";
import { colors, mainCubicTransition } from "../../styles/vars";

export const Cover = styled.img`
  border-radius: 10px;
  min-width: 60px;
  min-height: 40px;
`;

export const LabelPlusCover = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  background-color: transparent;
  border: none;
  transition: all 550ms ${mainCubicTransition};

  color: #fff;
  font-size: 34px;
  &:hover {
    opacity: 1;
    background-color: rgb(0, 0, 0, 0.6);
    color: ${colors.accentHoverColor};
    transition: all 650ms ${mainCubicTransition};
  }
`;
