import styled from "@emotion/styled";
import { colors } from "../../../styles/vars";

export const ButtonCustomSwitch = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 66px;
  height: 23px;
  /* padding: 2px 10px; */

  background-color: ${(props) => (props.isTrue ? "#FFF3BF" : "#8CACD7")};
  color: rgba(23, 22, 28, 1);
  text-transform: uppercase;
  font-family: Hind;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0.1em;
  text-align: left;

  font-style: normal;

  box-shadow: none;
  padding: 0px;
  border-radius: 10px;
  border: 0.4px solid rgba(23, 22, 28, 1);

  /* margin-bottom: 20px; */
  &:hover {
    background-color: ${(props) =>
      props.isTrue ? "rgba(255, 243, 191, 0.60)" : " rgb(140, 172, 215, 0.50)"};
  }
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
