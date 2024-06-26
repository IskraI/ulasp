import styled from "@emotion/styled";
import { colors } from "../../styles/vars";
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
  margin-bottom: 16px;
`;
export const ReportForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 421px;
  background: #7f99c0;
  font-size: 24px;
  font-weight: 500;
  border: 0.25px solid rgba(23, 22, 28, 0.5);
  border-radius: 10px;

  padding: 16px 12px;
`;
export const FormField = styled.div`
  display: flex;

  color: #17161c;

  font-size: 24px;
  font-weight: 500;
`;
export const ReportFormField = styled.div`
  display: flex;

  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: relative;
  height: 42px;
`;

export const ReportFormInput = styled.input`
  background-color: rgba(234, 234, 234, 0.32);
  padding: 8px;
  outline: none;
  border: 0.25px solid rgba(23, 22, 28, 0.5);
  border-radius: 10px;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: ${(props) => props.width ?? "154px"};
  &.invalid {
    outline: 1px solid red;
  }

  /* &.valid {
    outline: 1px solid green;
  } */

  /* &.invalid:hover + span {
    display: block;
    position: absolute;
    z-index: 1;
    top: 100%;  */
  /* Положение подсказки относительно верхней границы input */
  /* left: 75%;
    transform: translateX(-50%);
    width: 50%;  */
`;

export const ReportFormInputRadio = styled.input`
  margin: 0;
`;

export const ReportFormLabel = styled.label`
  padding: 8px;
`;
export const TitleText = styled.h3`
  color: ${colors.mainFontColor};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.21;
  margin-top: 16px;
  text-align: center;
  margin-bottom: 16px;
`;
export const ReportWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;
export const ReportFormButton = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
`;
export const ReporTabletWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 24px 24px;
  max-height: calc(100vh - 240px);

  width: 848px;
  background: rgba(149, 202, 255, 0.42);
  border-radius: 10px;
  box-shadow: -2px 4px 30px 0px rgba(0, 0, 0, 0.3);
`;

export const ReportFormData = styled.div`
  max-width: 421px;
`;
