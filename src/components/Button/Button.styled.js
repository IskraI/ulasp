import styled from "@emotion/styled";
import { colors } from "../../styles/vars";

export const CustomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #17161c;
  font-family: inherit;
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontsize};
  font-weight: 400;
  color: #17161c;
  outline: none;
  background: rgba(164, 188, 212, 0.3);
  margin-top: ${(props) => props.margintop};
  margin-bottom: ${(props) => props.marginbottom};
  margin-left: ${(props) => props.marginleft};
  margin-right: ${(props) => props.marginright};
  padding: ${(props) => props.padding};

  &:hover,
  :focus {
    background: #fff3bf;
    border: 1px solid #17161c;
  }

  &:active {
    background: #fff3bf;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4) inset;
    border: 1px solid #17161c;
  }

  &:disabled {
    background-color: rgba(171, 171, 171, 1);
    box-shadow: none;
    cursor: default;
  }
`;

export const SvgStyled = styled.svg`
  fill: none;
  stroke: black;
`;
