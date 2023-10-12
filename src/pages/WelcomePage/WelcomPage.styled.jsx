import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const slideInAnimation = keyframes`
  0% {
    transform: translateY(-100%);
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
  color: #FFF3BF;
text-align: center;
font-family: Inter;
font-size: 74px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom: 36px;
animation:  ${slideInAnimation} 1s linear;
`;
export const WelcomeText = styled.p`
  color: #FFF3BF;
text-align: center;
font-family: Inter;
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: normal;
animation:  ${slideUpAnimation} 1s linear;
`;



  
