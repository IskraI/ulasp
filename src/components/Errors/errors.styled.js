import styled from "@emotion/styled";
import { colors } from "../../styles/vars";

export const ErrorWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 10px;
  color: ${colors.errorColor};
  font-size: 20px;
  font-weight: 500;
`;
