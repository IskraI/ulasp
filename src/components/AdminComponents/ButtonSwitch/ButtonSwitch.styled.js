import styled from "@emotion/styled";
import { colors } from "../../../styles/vars";

export const ButtonCustomSwitch = styled.button`
  display: flex;
  gap: 8px;
  width: 66px;
  height: 23px;
  padding: 2px 10px;
  border-radius: 10px;
  background-color: ${(props) => (props.isTrue ? "#FFF3BF" : "#8CACD7")};
  color: rgba(23, 22, 28, 1);
  text-transform: uppercase;
  font-family: Inter;
  /* font-family: Hind; */
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 12px */
  letter-spacing: 1px;
  /* margin-bottom: 20px; */
`;
