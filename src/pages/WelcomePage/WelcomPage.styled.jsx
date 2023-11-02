
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { colors } from '../../styles/vars';
import { NavLink } from "react-router-dom";


export const WelcomeSection = styled.div`
  padding: 203px 0;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
   height: calc(100vh - (80px + 68px));
`;


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
   font-size: 74px;
   font-weight: 500;
   margin-bottom: 36px;
  animation: ${slideInAnimation} 1s linear;
`;
export const WelcomeText = styled.p`
  color: ${colors.primaryColor};
  text-align: center;
   font-size: 32px; 
  animation: ${slideUpAnimation} 1s linear;
`;


export const SignInNavLink = styled(NavLink)`
display: flex;
width: 380px;
height: 66px;
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
line-height: calc(44 / 40); 
margin-top: 34px;



 
  &:hover {
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.40) inset;
  }
  
`;

  

