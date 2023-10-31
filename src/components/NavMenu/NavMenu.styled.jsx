import styled from '@emotion/styled';
import { colors } from '../../styles/vars';
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
display: flex;
  align-items: center; /* Центрируем по вертикали */
//   height: calc(100vh - (80px + 68px + 64px + 86px + 130px));
  margin-left: 32px;
  margin-top:58px;
  

`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
 color:black;
  // gap: 21px;
 `;

export const Item = styled.li`
// display: flex;
  // align-items: center;
  // padding-left: 30px;

`;

export const NavigationLink = styled(NavLink)`
  color:   ${colors.mainFontColor};
  display: flex;
font-family: Inter;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height:calc(26.4/22);
align-items: center;
  padding-left: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  svg {
margin-right: 30px;
  }

 /* Add styling for the active link */
  &.active {
     border: 2px solid #FFF3BF; 
    background-image: url('../../assets/VectorActive.svg'); 
   z-index:10; 
    background-size: contain; 
    background-repeat: no-repeat; 
    background-position: right center; 
         svg {
        // fill: #FFF3BF; 
        stroke: #FFF3BF;
      
    }
  }
`;

export const CustomSVG = styled.svg`
  /* Add styles for your custom SVG here */
`;