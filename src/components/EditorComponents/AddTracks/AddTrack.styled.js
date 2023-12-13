import styled from "@emotion/styled";

export const FormControlAddTrack = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: auto;
`;

export const InputControlAddTrack = styled.input`
  width: 649px;
  height: 64px;
  padding: 8px;
  margin-top: 64px;
  margin-bottom: 24px;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  background-color: rgba(234, 234, 234, 0.32);
  display: none;
`;

export const ButtonLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #17161c;
  font-family: inherit;
  width: 198px;
  font-size: 24px;
  font-weight: 400;
  color: #17161c;
  outline: none;
  background: rgba(164, 188, 212, 0.3);
  margin-top: ${(props) => props.margintop};
  margin-bottom: ${(props) => props.marginbottom};
  margin-left: ${(props) => props.marginleft};
  margin-right: ${(props) => props.marginright};
  padding: 8px;
  cursor: pointer;

  &:hover,
  :focus {
    background: #fff3bf;
    border: 1px solid #17161c;
  }

  &:active {
    background: #fff3bf;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4) inset;
    border: 1px solid #17161c;
  }

  &:disabled {
    background-color: rgba(171, 171, 171, 1);
    box-shadow: none;
    cursor: default;
  }
`;
