import styled from "@emotion/styled";
import { colors } from "../../../styles/vars";
import { NavLink } from "react-router-dom";


export const List = styled.ul`
 display: flex;
 gap: 30px;
 margin-top: 26px;
 margin-bottom: 24px;
 
`;

export const NavigationLink = styled(NavLink)`
   color: ${colors.mainFontColor};
  font-size: 24px;
  font-weight: 500;
  /* margin-top: 80px;
  margin-left: 220px; */
  text-decoration: none;
 

  &:hover {
    text-decoration: underline;
  }

  &.active-link {
    text-decoration: underline;
  }
`;



