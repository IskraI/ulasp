import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { colors } from '../../styles/vars';
import { NavLink } from "react-router-dom";

const slideInAnimation = keyframes`
  0% {
    transform: translateY(-50%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideUpAnimation = keyframes`
  0% {
    transform: translateY(100%);
opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const WelcomeTitle = styled.h1`
  color: ${colors.primaryColor};
text-align: center;
font-family: Inter;
font-size: 74px;
font-style: normal;
font-weight: 500;
// line-height: normal;
margin-bottom: 36px;
animation:  ${slideInAnimation} 1s linear;
`;
export const WelcomeText = styled.p`
 color: ${colors.primaryColor};
text-align: center;
font-family: Inter;
font-size: 32px;
font-style: normal;
font-weight: 400;
// line-height: normal;
animation:  ${slideUpAnimation} 1s linear;
`;

export const SignInNavLink = styled(NavLink)`
width: 422px;
height: 86px;
padding: 8px;
justify-content: center;
align-items: center;
gap: 8px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid #000;
background: ${colors.primaryColor};
cursor: pointer;

color:  ${colors.mainFontColor};
font-size: 20px;
line-height: 120%; /* 24px */
margin-top: 34px;


 
  &:hover {
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.40) inset;
  }
  
`;

  
