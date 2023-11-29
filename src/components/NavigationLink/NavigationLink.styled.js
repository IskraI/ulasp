import styled from "@emotion/styled";
import { colors } from "../../styles/vars";
import { NavLink } from "react-router-dom";

export const NavigationLink = styled(NavLink)`
  display: flex;
  justify-content: flex-end;
  color: ${colors.mainFontColor};
  font-size: 18px;
  line-height: calc(22 / 18);

  margin-top: 16px;
  margin-bottom: 24px;
  padding-right: 24px;
  padding-left: 30px;
  padding-top: 10px;
  padding-bottom: 10px;

  text-decoration: underline;
  text-underline-offset: 4px;
  cursor: pointer;

  /* outline: 1px solid red; */

  &:hover {
  }
`;
