import styled from "@emotion/styled";
import { colors, transition } from "../../../styles/vars";

export const ButtonPrintCustom = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: ${(props) => props.border || "1px solid #17161c"};
  font-family: inherit;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontsize};
  font-weight: 400;
  color: ${(props) => props.color ?? "#17161c"};
  outline: none;
  background: ${(props) => props.background ?? "rgba(164, 188, 212, 0.3)"};
  margin-top: ${(props) => props.margintop};
  margin-bottom: ${(props) => props.marginbottom};
  margin-left: ${(props) => props.marginleft};
  margin-right: ${(props) => props.marginright};
  padding: ${(props) => props.padding};
  transition: ${transition.duration};

  &:hover,
  :focus {
    /* background: #fff3bf; */
    fill: #fff3bf;
    stroke: #fff3bf;
    /* border: 1px solid #17161c; */
  }

  &:active {
    background: #fff3bf;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4) inset;
    /* border: 1px solid #17161c; */
  }

  &:disabled {
    background-color: rgba(171, 171, 171, 1);
    box-shadow: none;
    cursor: default;
  }
`;

export const SvgStyled = styled.svg`
  fill: inherit;
  stroke: ${(props) => props.strokeColor ?? "black"};
  /* display: ${(props) => (props.showIcon ? "block" : "none")}; */
`;
