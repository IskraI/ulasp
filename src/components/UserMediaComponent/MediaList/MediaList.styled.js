import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors, mainCubicTransition } from "../../../styles/vars";

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

export const TitleContainer = styled.div`
  margin-bottom: 16px;
`;

export const MediaList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const MediaItem = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ width }) => width || "310px"};

  padding: 10px;
  border: ${(props) =>
    props.isError
      ? `1px solid ${colors.errorColor}`
      : props.isEditing
      ? `1px solid green`
      : `1px solid ${colors.accentHoverColor}`};
  border-radius: 10px;
  background-color: ${colors.activeBtnColor};
  transition: background-color 500ms ${mainCubicTransition};
  cursor: pointer;

  &:hover {
    background-color: ${colors.accentHoverColor};
    transition: background-color 500ms ${mainCubicTransition};
  }
`;

export const MediaImg = styled.img`
  border-radius: 10px;
  margin-right: ${(props) => props.marginRight ?? "4px"};

  width: 60px;
  height: 40px;
  object-fit: cover;
`;

export const MediaItemText = styled.p`
  max-width: ${({ maxWidth }) => maxWidth || "180px"};
  font-size: 16px;
  line-height: 1.19;
  font-weight: 400;
  color: ${colors.mainFontColor};
  margin: 0 auto;

  padding: ${({ padding }) => padding || "0px 6px"};
  text-align: center;
  overflow-wrap: break-word;
`;

export const MediaIconsWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const MediaButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  &:disabled {
    svg {
      fill: ${colors.bBgModal};
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
  transform: rotate(
    ${(props) => (props.transformIcon ? props.transformIcon + "deg" : "0deg")}
  );

  transition: all 550ms ${mainCubicTransition};

  &:hover {
    fill: ${colors.bgHeaderColor};

    transform: rotate(
      ${(props) => (props.transformIcon ? props.transformIcon + "deg" : "0deg")}
    );
    transition: all 550ms ${mainCubicTransition};
  }
`;

export const EditInputText = styled.input`
  font-family: inherit;
  font-size: 16px;
  line-height: 1.19;
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
  width: 60px;
  height: 40px;
`;
