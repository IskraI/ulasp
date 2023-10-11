import styled from "@emotion/styled";

export const StyledForm = styled.form`
 
`;

export const StyledFormInsight = styled.div`
 
`;

export const StyledTitle = styled.h2`
 
`;


export const StyledInputWrap = styled.div`
   position: relative;
 
`;
 


export const StyledInput = styled.input`
 width: 455px;
  box-sizing: border-box;
  height: 57px;
  border-radius: 10px;
  border: 1px solid var(--TXT-color, #17161C);
   background-color: transparent;
  padding: 8px;
    color: #17161C;
  font-size: 14px;
  align-items: center;
 

  &::placeholder {
    color:  rgba(206, 204, 193, 0.50);
    font-size: 24px;
  }


 
  &:focus,
  &:hover {
   border: 1px solid var(--TXT-color, #17161C);
   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.60) inset;
    background-color: transparent;
  }

  &.valid-border {
    border-color:  #17161C;
    outline: none;
    background-color: transparent;
  }

  &.invalid-border {
    border-color: red;
    outline: none;
    background-color: transparent;
  }
 
`;

export const StyledButton = styled.button`
  
`;

export const StyledError = styled.div`
 
`;

export const StyledInnerDiv = styled.div`
 
`;

export const StyledMessage = styled.p`
 
`;

export const StyledPasswordDiv = styled.div`
 
`;