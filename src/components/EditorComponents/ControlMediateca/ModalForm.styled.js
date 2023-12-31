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
  margin-top: 64px;
  margin-bottom: 24px;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  background-color: rgba(234, 234, 234, 0.32);
`;
