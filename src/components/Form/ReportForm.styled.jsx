import styled from "@emotion/styled";
import { colors } from "../../styles/vars";

export const ReportFormContainer = styled.form`
 width: 421px;
height: 230px;
flex-shrink: 0;
border-radius: 10px;
border: 0.5px solid ${colors.mainFontColor};
background:  rgba(234, 234, 234, 0.32);
`; 

export const TitleThird = styled.h3`
 color: ${colors.mainFontColor};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.21;
 margin-top:16px;
 text-align: center;
 margin-bottom: 16px;
`; 

export const Button = styled.button`
display: block;
width: 198px;
height: 48px;
padding: 8px;
justify-content: center;
align-items: center;
gap: 8px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid ${colors.mainFontColor};
background:  rgba(164, 188, 212, 0.30);
color: ${colors.mainFontColor};
text-align: center;
font-size: 20px;
margin-left: 211px;
margin-top: 24px;
`;

export const InputContainer = styled.div`
display: flex;
`; 

export const Input = styled.input`
height: 31px;
width:154px;
padding: 3px 7px 4px 40px;
justify-content: flex-end;
align-items: flex-start;
gap: 38px;
border-radius: 10px;
border: 1px solid ${colors.mainFontColor};
background:  rgba(234, 234, 234, 0.32);
margin-left:8px;
`; 

export const Label = styled.label`
margin-left:12px;
color: ${colors.mainFontColor};
font-family: Inter;
font-size: 20px;
line-height: calc(24/20); 

`; 