import styled from "@emotion/styled";
import { colors } from "../../styles/vars";
export const PageHeader = styled.header`
  display: flex;
  padding: 0 114px;
  align-items: center;
  /* justify-content: space-between; */
  width: 100%;
  height: 80px;
  background-color: ${colors.bgHeaderColor};
  border-bottom: 2px solid ${colors.primaryColor};
  position: fixed;
  z-index: 3;
`;

export const PageLogo = styled.img`
  width: 56px;
  height: 68px;
  /* margin-left: 114px; */
`;

export const AvatarHeader = styled.img`
  width: 56px;
  height: 68px;
  /* margin-r: auto; */
`;
