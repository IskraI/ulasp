import styled from "@emotion/styled";
import { colors } from "../../styles/vars";

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 24px 8px;
  color: ${colors.mainFontColor};
  font-size: 18px;
  font-weight: 700;
`;

export const ErrorText = styled.p`
  display: flex;
  align-items: center;
  padding: 0px 8px;
  color: ${colors.errorColor};
  font-size: 18px;
  font-weight: 700;
`;

export const ErrorValidateText = styled.p`
  position: absolute;
  top: -32px;
  font-size: 12px;
  font-weight: 600;
  color: ${colors.errorColor};
`;
