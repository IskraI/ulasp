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

export const UserCreateModal = styled.div `
display: block;
width: 100%;

`
export const SectionUser = styled.div `
margin-bottom: 24px;
/* display: block; */
/* display: flex;
justify-content: left;
gap: 48px; */


`
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
  width: 558px;
  font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;


background: rgba(234, 234, 234, 0.32);
height: 42px;
  
`
export const RegisterInput = styled.input `

background-color:  rgba(234, 234, 234, 0.32);
  width: 100%;
  padding-left: 8px;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  border: 0.25px solid  rgba(23, 22, 28, 0.5);
 /* border: 0.5px solid  #17161C; */
 /* stroke-width: 0.5px; */
  
`
export const RegisterLabel = styled.label `
 /* border: 0.5px solid  #17161C; */
 border: 0.25px solid  rgba(23, 22, 28, 0.5);
 background:rgba(234, 234, 234, 0.32);
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
  
`

export const SectionUserButton = styled.button `
display: inline-block;
border: none;
background-color: inherit ;
justify-content: left;
margin-right: 48px;
color:  #17161C;
text-align: center;
font-family: Inter;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: 120%;

text-decoration: ${(props) => (props.isActive ? "underline": "none")};


`

export const RegisterNameBlock = styled.div `
  display: flex;
  
`



export const RegisterArea = styled.div `
  display: flex;
  flex-direction: column;
  `


export const RegisterNameField = styled.div `
  display: flex;
  flex-direction: column;
  border: 0.25px solid  rgba(23, 22, 28, 0.5);
 background:rgba(234, 234, 234, 0.32);
  `


export const RegisterNameLabel = styled.label `
  display: flex;
  flex-direction: column;
  border:none;
 background:rgba(234, 234, 234, 0.32);
  `
  export const RegisterNameInput = styled.input `
  display: flex;
  flex-direction: column;
  border: 0.25px solid  rgba(23, 22, 28, 0.5);
 background:rgba(234, 234, 234, 0.32);
  `