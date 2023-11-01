import styled from "@emotion/styled";
import { colors } from "../../styles/vars";
export const PageFooter = styled.footer`
  display: flex;
   flex-direction: row;
    align-items: center;
  width: 100%;
  height: 68px;
  background-color:  rgba(206, 204, 193, 0.50);;
  border-top: 2px solid ${colors.primaryColor};
`;

export const PageLogo = styled.img`
  width: 28px;
  height: 34px;
  margin-left: 64px;
`;

export const ListContact = styled.ul`
margin-left: 65px;
`;

export const StyledLink = styled.a`
display: flex;
  color:   ${colors.mainFontColor};
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height:calc(18/14);
margin-top: 8px;
`;

export const ContactAdress = styled.p`
 display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-right: 64px; 
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(18/14);

`;



export const Content = styled.div`
 display: flex;
  margin-left: auto;
 /* flex-grow: 1; */
`;