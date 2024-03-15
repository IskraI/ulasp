import styled from "@emotion/styled";
import { colors } from "../../../styles/vars";

export const SearchInput = styled.input`
  width: 244px;
  height: 32px;
  border-width: 2px;
  border-radius: 10px;
  margin-left: auto;
  font-size: 14px;
  background: transparent;
  border: none;
  outline: 1px solid ${colors.mainFontColor};
  padding: 12px;

  &:focus-visible {
    border: "none";
    outline: 1px solid ${colors.primaryColor};
    padding: 12px;
  }

  ::placeholder {
    text-align: end;
    color: ${colors.inputGrayColor};
  }
`;
