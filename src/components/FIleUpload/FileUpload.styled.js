import styled from "@emotion/styled";
import { colors } from "../../styles/vars";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const LabelAdd = styled.label`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  border-radius: 62px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  background-color: transparent;
  border: none;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #fff;
  font-size: 50px;
  &:hover {
    opacity: 1;
    background-color: rgb(0, 0, 0, 0.6);
  }
`;
