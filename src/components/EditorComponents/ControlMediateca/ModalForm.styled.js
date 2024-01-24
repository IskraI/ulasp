import styled from "@emotion/styled";
import { colors } from "../../../styles/vars";

export const FormControlModal = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.margintop};
  margin-bottom: ${(props) => props.marginbottom};
  margin-left: ${(props) => props.marginleft};
  margin-right: ${(props) => props.marginright};
`;

export const InputControlModal = styled.input`
  width: 649px;
  height: 64px;
  padding: 8px;
  margin-top: ${(props) => props.margintop ?? "64px"};
  margin-bottom: 24px;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  background-color: rgba(234, 234, 234, 0.32);

  &:active {
    outline: 2px solid ${colors.accentHoverColor};
  }

  &:focus {
    outline: 2px solid ${colors.accentHoverColor};
  }
`;

export const TextControlModal = styled.p`
  display: flex;
  align-items: center;
  width: 415px;
  height: 64px;
  padding: 8px;
  margin-bottom: 24px;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  line-height: 1.21;
  background-color: rgba(234, 234, 234, 0.32);
`;

export const LabelInputControlModal = styled.label`
  /* position: relative; */
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
  width: 156px;
  height: 106px;
  border: solid 1px ${colors.mainFontColor};
  border-radius: 15px;
  background-color: ${colors.backGroundGreyColor};
  cursor: pointer;
  transition: all 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);
  font-size: 14px;
  color: #00000066;
  &:hover {
    background-color: ${colors.accentHoverColor};
    color: #00000096;
    transition: all 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;

export const CoverImage = styled.img`
  width: 156px;
  height: 106px;
  border-radius: 15px;
`;

export const ClearImage = styled.button`
  /* position: absolute;
  top: -15px;
  right: -15px; */
  padding: 12px;
  background-color: transparent;
  border: none;
  font-size: 18px;
  transition: color 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    /* font-size: 24px;
    top: -30px;
    right: -30px; */
    color: ${colors.accentHoverColor};
    transition: color 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;
