import styled from "@emotion/styled";
import { colors } from "../../styles/vars";
import symbol from '../../assets/symbol.svg';

export const Select = styled.select`
   color:${colors.mainFontColor} ;
font-size: 16px;
background-color: transparent;
 border: none;
 background-image: url(${symbol}#icon-check); 
  background-repeat: no-repeat; 
  background-position: right 10px center; 
 /* appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none; */

/* &::-ms-expand {
    display: none;
  } */

  &:focus {
    outline: none;
    border-color: blue; 
  }
`;

export const StyledDropDown = styled.div`
   /* position:absolute;
    right: 64px; 
  top: 125px; */

`;

export const Option = styled.option`
  color:${colors.mainFontColor} ;
font-size: 16px;
background-color: transparent;
`;