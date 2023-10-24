import styled from '@emotion/styled';
import { colors } from '../../styles/vars';
import { NavLink } from "react-router-dom";

export const SiteBarNavConteiner = styled.div`
width: 287px;
height: calc(100vh - (80px + 68px - 51px));
border-right: 2px solid ${colors.primaryColor};
border-top: 2px solid ${colors.primaryColor};
border-bottom: 2px solid ${colors.primaryColor};
`;

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