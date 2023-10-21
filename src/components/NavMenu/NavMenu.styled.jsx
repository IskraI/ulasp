import styled from '@emotion/styled';
import { colors } from '../../styles/vars';
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  
`;

export const List = styled.ul`
  
`;

export const Item = styled.li`
 color:black,
`;

export const NavigationLink = styled(NavLink)`
  color:   ${colors.mainFontColor};
font-family: Inter;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height:calc(26.4/22);
margin-left: 30px;
`;

