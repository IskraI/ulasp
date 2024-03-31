import styled from "@emotion/styled";
import { mainCubicTransition } from "../../../styles/vars";

export const PopUpWrapper = styled.div`
  position: relative;
`;

export const PopUp = styled.div`
  position: absolute;
  z-index: 10;
  bottom: -30px;
  right: 35px;
  margin: 20px auto;
  /* outline: 1px solid red; */
  width: 200px;
  display: flex;
  flex-direction: column;
  background-color: #a4bcd4;
  border-radius: 10px;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
`;

export const PopUpButton = styled.button`
  padding: 12px 4px;

  cursor: pointer;
  font-size: 14px;
  background: none;
  border: none;
  outline: none;

  &:hover {
    background: #fff3bf;
    border-radius: 10px;
    font-weight: 600;
    transform: translateY(-5px);
    transition: transform 250ms ${mainCubicTransition};
  }

  &:not(:last-of-type) {
    margin-bottom: 4px;
  }
  &:disabled {
    pointer-events: none;
  }
`;
