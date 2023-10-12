import styled from "@emotion/styled";
import { colors } from "../../styles/vars";
export const PageHeader = styled.header`
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: ${colors.bgHeaderColor};
`;

export const PageLogo = styled.img`
  width: 50px;
  max-height: 100%;
`;
