import styled from "@emotion/styled";
import { colors } from "../../../styles/vars";
export const ErrorText = styled.p`
  color: #535250;
  text-align: center;
  font-size: 28px;
  margin: 40px 0;
`;

export const Title = styled.h2`
  color: ${colors.mainFontColor};
  font-size: 24px;
  font-weight: 500;
  margin-top: ${(props) => props.margintop || 0};
  margin-bottom: ${(props) => props.marginbottom || 0};
`;
export const ReportForm = styled.form`
  color: ${colors.mainFontColor};

  font-size: 24px;
  font-weight: 500;
`;

export const ReportFormField = styled.div`
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
export const ReportFormInput = styled.input`
  background-color: rgba(234, 234, 234, 0.32);
  /* width: 100%; */
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
    outline: 1px solid red;
  }
  &.valid {
    outline: 1px solid green;
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
export const ReportFormLabel = styled.label`
  border: 0.25px solid rgba(23, 22, 28, 0.5);
  background: rgba(234, 234, 234, 0.32);
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
`;
