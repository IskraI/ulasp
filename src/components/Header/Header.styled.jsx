import styled from "@emotion/styled";
import { colors } from "../../styles/vars";
export const PageHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: ${colors.bgHeaderColor};
  border-bottom: 2px solid ${colors.primaryColor};
`;

export const PageLogo = styled.img`
  width: 56px;
  height: 68px;
  margin-left: 114px;
`;
