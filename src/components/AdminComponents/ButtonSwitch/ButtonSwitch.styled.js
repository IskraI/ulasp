import styled from "@emotion/styled";
import { colors, transition } from "../../../styles/vars";

export const ButtonCustomSwitch = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 66px;
  height: 23px;
  /* padding: 2px 10px; */
  text-transform: uppercase;
  font-family: Hind;
  background-color: ${(props) =>
    props.isTrue ? `${colors.accentHoverColor}` : `${colors.activeBtnColor}`};
  pointer-events: ${(props) => (props.form ? `none` : `auto`)};
  color: rgba(23, 22, 28, 1);

  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0.1em;
  text-align: left;
  font-style: normal;
  box-shadow: none;
  padding: 2px;
  border-radius: 10px;
  border: 0.4px solid rgba(23, 22, 28, 0.4);
  transition: ${transition.duration};
  /* margin-bottom: 20px; */
  &:hover {
    background-color: ${(props) =>
      props.isTrue ? `${colors.btnColor}` : `${colors.accentHoverColor}`};
  }
`;
export const Circle = styled.circle`
  fill: ${(props) =>
    props.isTrue
      ? props.isHovered
        ? `${colors.accentHoverColor}`
        : `${colors.activeBtnColor}`
      : props.isHovered
      ? `${colors.activeBtnColor}`
      : `${colors.accentHoverColor}`};
  transition: fill ${transition.duration};
`;
export const ContentButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Text = styled.div`
  display: flex;
  width: 100%;
`;
