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

export const UserCreateModal = styled.div`
  display: block;
  width: 100%;
`;
export const SectionUser = styled.div`
  margin-bottom: 24px;
  /* display: block; */
  display: flex;
  justify-content: left;
  gap: 48px;
  font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;

`;
export const Fieldform = styled.div`
  display: flex;
  gap: 24px;
`;
export const RegisterForm = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const RegisterBlock = styled.div`
  display: flex;
  gap: 24px;
  /* flex-direction: column; */
`;
export const RegisterLeftBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RegisterRigthBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
`;
export const RegisterField = styled.div`
  display: flex;
  width: 558px;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: relative;
  /* background: rgba(234, 234, 234, 0.32); */
  height: 42px;
`;
export const RegisterInput = styled.input`
  background-color: rgba(234, 234, 234, 0.32);
  width: 100%;
  padding-left: 8px;
  display: flex;
  align-items: center;
  position: relative;
  /* outline: none; */
  border: 0.25px solid rgba(23, 22, 28, 0.5);
  font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
  &.invalid {
  outline: 1px solid red
 }
 &.valid {
  outline: 1px solid green
 }

  &.invalid:hover + span {
    display: block;
    position: absolute;
    z-index: 1;
    top: 100%; /* Положение подсказки относительно верхней границы input */
    left: 75%;
    transform: translateX(-50%);
    width: 50%;
  
    /* Дополнительные стили для видимой подсказки при ховере */
  }
  
`;
export const RegisterLabel = styled.label`
  border: 0.25px solid rgba(23, 22, 28, 0.5);
  background: rgba(234, 234, 234, 0.32);
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
`;
export const FormButton = styled.button`
  display: flex;
  width: 198px;
  height: 48px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: block;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #17161c;
  background: rgba(164, 188, 212, 0.3);
  text-transform: uppercase;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const CommentTextarea = styled.textarea`
  background-color: rgba(234, 234, 234, 0.32);
  /* width: 100%; */
  height: ${(props) => (props.height ? props.height : "220px")};
  padding: 8px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  outline: none;
  border: 0.25px solid rgba(23, 22, 28, 0.5);
  resize: none;
  /* border: 0.5px solid  #17161C; */
  /* stroke-width: 0.5px; */
`;
export const Commentlabel = styled.label`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #17161c;
`;

export const SectionUserButton = styled.button`
  display: inline-block;
  border: none;
  background-color: inherit;
  justify-content: left;
  margin-right: 48px;
  color: #17161c;
  text-align: center;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;

  text-decoration: ${(props) => (props.isActive ? "underline" : "none")};
`;

export const RegisterContactField = styled.div`
  margin-top: ${(props) => props.margintop};
`;

export const RegisterArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RegisterNameBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px 8px 10px;
  width: 558px;
  /* gap: 16px; */
  border: 0.25px solid rgba(23, 22, 28, 0.5);
  background: rgba(234, 234, 234, 0.32);
`;

export const RegisterCommentField = styled.div`
  display: flex;
  flex-direction: column;

  width: ${(props) => (props.width ? props.width : "auto")};
  gap: 13px;
  border: none;
`;

export const RegisterNameField = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const RegisterNameLabel = styled.label`
  display: flex;
  flex-direction: column;
  border: none;

  color: rgba(0, 0, 0, 0.4);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
export const RegisterNameInput = styled.input`

  display: flex;
  background-color: inherit;
  width: ${(props) => props.width || "133px"};
  height: 32px;
  padding: 4px 8px;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  outline: none;
  font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
  
 &.invalid {
  outline: 1px solid red
 }
 &.valid {
  outline: 1px solid green
 }

  &.invalid:hover + span {
    display: block;
    position: absolute;
    z-index: 1;
    top: 100%; /* Положение подсказки относительно верхней границы input */
    left: 50%;
    transform: translateX(-50%);
    width: 75%;
  }

 
`;
export const ButtonCompany = styled.button`
  display: flex;
  gap: 8px;
  width: 66px;
  height: 23px;
  padding: 2px 10px;
  border-radius: 10px;
  background-color: ${(props) => (props.isTrue ? "#FFF3BF" : "#8CACD7")};
  color: rgba(23, 22, 28, 1);
  text-transform: uppercase;
  font-family: Inter;
  /* font-family: Hind; */
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 12px */
  letter-spacing: 1px;
  margin-bottom: 20px;
`;


export const Tooltip = styled.span`
  display: none;
  position: absolute;
  background-color: #8CACD7; 
  color: rgba(23, 22, 28, 1);

  padding: 4px;
  border: 1px solid rgba(23, 22, 28, 0.5);
  border-radius: 4px;
  font-size: 14px;

  &.hover  {
    display: block;
    /* Ваши стили для видимой подсказки */
  }
`;
export const LoginForm = styled.form`
  display: flex;
  margin-top: 90px;
  flex-direction: column;
width: 277px;
  gap: 16px;

`;


export const LoginField = styled.div`
display: flex;
flex-direction: column;
 

`;
export const LoginLabel= styled.label`
display: flex;
flex-direction: column;
border: none;

color: rgba(0, 0, 0, 0.4);
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 18px;
`;
export const LoginInput = styled.input`
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
  display: flex;
  background-color: inherit;
  width:100%;
  height: 40px;
  padding: 4px 8px;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  outline: none;
  
 &.invalid {
  outline: 1px solid red
 }
 &.valid {
  outline: 1px solid green
 }

  &.invalid:hover + span {
    display: block;
    position: absolute;
    z-index: 1;
    top: 100%; /* Положение подсказки относительно верхней границы input */
    left: 50%;
    transform: translateX(-50%);
    width: 75%;
  }

 
`;