import styled from "@emotion/styled";
import { colors, transition } from "../../styles/vars";

export const CustomButton = styled.button`
  display: flex;
  justify-content: ${(props) => props.justifycontent ?? "center"};
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
    background: #fff3bf;
    border: ${(props) => props.borderHover ?? "1px solid #17161"};
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
  fill: ${(props) => props.fillColor ?? "none"};
  stroke: ${(props) => props.strokeColor ?? "black"};
  display: ${(props) => (props.showIcon ? "block" : "none")};
`;

export const ImgStyled = styled.img`
  border-radius: 10px;
  /* margin-right: auto; */
  display: ${(props) => (props.showImg ? "block" : "none")};
`;
