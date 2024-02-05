import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { colors, mainCubicTransition } from "../../../styles/vars";

export const ControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 26px; */
  margin-bottom: 24px;
`;

export const TitleWrapper = styled.p`
  font-size: 24px;
  line-height: 1.21;
  font-weight: 500;
  color: ${colors.mainFontColor};
`;

export const MediaItem = styled.li`
  position: relative;
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
  margin-right: auto;
  width: 60px;
  height: 40px;
`;

export const MediaItemText = styled.p`
  font-size: 16px;
  line-height: 1.19;
  color: ${colors.mainFontColor};
  margin-right: auto;
  padding: 0 6px;
  text-align: center;
  text-overflow: clip;
`;

export const MediaIconsWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const MediaButton = styled.button`
  background: none;
  border: none;
  &:disabled {
    svg {
      fill: ${colors.bBgModal};
      /* fill: red; */
    }
  }
`;

export const LinkWrapper = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const SvgMedia = styled.svg`
  fill: #000000;
  transition: fill 350ms ${mainCubicTransition};

  &:hover {
    fill: ${colors.accentHoverColor};
    transition: fill 350ms ${mainCubicTransition};
  }
`;

export const EditInputText = styled.input`
  min-width: 100px;
  /* outline: 1px solid red; */
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

export const EditWrapper = styled.div`
  display: flex;
  position: relative;
  /* width: 60px;
  height: 40px; */
`;

export const MediaLabelPlusCover = styled.label`
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
