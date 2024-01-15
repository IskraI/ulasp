import styled from "@emotion/styled";
import { colors } from "../../styles/vars";

export const ErrorWrapper = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 8px;
  color: ${colors.errorColor};
  font-size: 18px;
  font-weight: 700;
`;

export const ErrorText = styled.p`
  display: flex;
  align-items: center;
  padding: 0px 8px;
  color: ${colors.mainFontColor};
  font-size: 16px;
  font-weight: 500;
`;
