import styled from '@emotion/styled';
import { colors } from '../../styles/vars';
import { NavLink } from "react-router-dom";

export const LogOutLink = styled(NavLink)`
 color:   ${colors.mainFontColor};
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left: 7px;

`;

export const Exit = styled.div`
display: flex;
  margin-top: 16px;
  margin-left: 189px;
align-items: center;
 


`;