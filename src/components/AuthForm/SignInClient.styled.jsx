import styled from "@emotion/styled";
import { colors } from "../../styles/vars";


export const StyledForm = styled.form`
  /* width: 100%; */
  height: auto;
`;

export const StyledFormInsight = styled.div`
  /* margin-top: 240px; */
`;

export const StyledTitle = styled.h2`
  color: ${colors.mainFontColor};
   font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(29/24);
  margin-left: 0px;
  margin-bottom: 24px;
`;

export const StyledInputWrap = styled.div`
  position: relative;
  margin-bottom: 60px;
`;

export const StyledInput = styled.input`
  width: 455px;
  box-sizing: border-box;
  height: 57px;
  border-radius: 10px;
  border: 1px solid ${colors.mainFontColor};
  background-color: transparent;
  padding: 8px;
  color: ${colors.mainFontColor};
  font-size: 14px;
  align-items: center;

  &::placeholder {
    color: rgba(206, 204, 193, 0.5);
    font-size: 24px;
  }

  &:focus,
  &:hover {
    border: 1px solid ${colors.mainFontColor};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.6) inset;
    background-color: transparent;
  }

  &.valid-border {
    border-color: ${colors.mainFontColor};
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
  display: block;
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

  color: ${colors.mainFontColor};
  font-size: 20px;
  line-height: calc(44 / 40);
  margin-top: 34px;
  margin-left:auto;
  margin-right:auto;

  &:hover {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4) inset;
  }
`;



export const StyledError = styled.div`
  position: absolute;
  margin-top: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
  margin-left: 0px;
`;

export const StyledInnerDiv = styled.div``;

// export const StyledMessage = styled.p`
//   position: absolute;
//   margin-top: 8px;
//   color: #BD2C2C;
// text-align: center;
// font-family: Roboto;
// font-size: 11px;
// font-style: normal;
// font-weight: 400;
// line-height: calc(18 / 11);
//   margin-left: 0;
// `;
