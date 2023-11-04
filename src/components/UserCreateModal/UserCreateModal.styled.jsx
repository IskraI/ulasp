import styled from "@emotion/styled";


export const InputStyle = styled.input`
position: relative;
width: 200px;
margin-top: 5px;
width: 100%;


&[title]:hover::before {
  content: attr(title);
  display: block;
  background-color: #f5f5f5;
  color: #333;
  padding: 5px;
  border: 1px solid #ccc;
  position: absolute;
  z-index: 1;
  width: 200px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s;
}

&[title]:hover::before {
  visibility: visible;
  opacity: 1;
}
`;
export const RegisterForm = styled.div `
  display: flex;
  width: 100%;
  flex-direction: column;

`
export const RegisterBlock = styled.div `
  display: flex;
  flex-direction: column;

`
export const RegisterField = styled.div `
  display: flex;
  
`
export const NavCreateModal = styled.div `
display: flex;
justify-content: left;
gap: 48px;
color: var(--TXT-color, #17161C);
text-align: center;
font-family: Inter;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: 120%

`