import styled from '@emotion/styled';
import { colors, media } from '../../styles/vars';

// export const ReportFormContainer = styled.div`
//   width: 421px;
//   height: 230px;
//   flex-shrink: 0;
//   border-radius: 10px;
//   border: 0.5px solid ${colors.mainFontColor};
//   background: rgba(234, 234, 234, 0.32);
//   position: absolute;
//   margin-left: 580px;
//   margin-top: 86px;
// `;

export const TitleText = styled.h3`
  color: ${colors.mainFontColor};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.21;
  margin-top: 16px;
  text-align: center;
  margin-bottom: 16px;

  ${media.mobileMax} {
    margin: 8px 0;
  }
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
  background: rgba(164, 188, 212, 0.3);
  color: ${colors.mainFontColor};
  text-align: center;
  font-size: 20px;
  margin-left: 211px;
  margin-top: 24px;
`;

export const Input = styled.input`
  height: 31px;
  width: 154px;
  padding: 3px 7px 4px 40px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 38px;
  border-radius: 10px;
  border: 1px solid ${colors.mainFontColor};
  background: rgba(234, 234, 234, 0.32);
  margin-left: 8px;

  ::placeholder {
    color: rgba(0, 0, 0, 0.4);
    font-size: 20px;
    justify-content: center;
    line-height: calc(24 / 20);
  }
`;

export const Label = styled.label`
  margin-left: 12px;
  color: ${colors.mainFontColor};
  font-family: Inter;
  font-size: 20px;
  line-height: calc(24 / 20);
`;

export const Input3 = styled.input`
  height: 31px;
  width: 59px;
  padding: 3px 6px 4px 14px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 12px;
  border-radius: 10px;
  border: 1px solid ${colors.mainFontColor};
  background: rgba(234, 234, 234, 0.32);
  margin-left: 8px;
  margin-right: 8px;

  ::placeholder {
    color: rgba(0, 0, 0, 0.4);
    font-size: 20px;
    line-height: calc(24 / 20);
    justify-content: center;
  }
`;

export const Label3 = styled.label`
  margin-left: 12px;
  color: ${colors.mainFontColor};
  font-family: Inter;
  font-size: 20px;
  line-height: calc(24 / 20);
  margin-top: 16px;
`;

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
  width: ${(props) => props.width ?? '154px'};
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
export const ReportWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
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

// export const ReportFormData = styled.div`
//   max-width: 421px;
// `;

export const ReportFormData = styled.div`
  width: 100%;
  max-width: 421px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const ReportForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 16px;
  width: 100%;
  max-width: 422px;
  background: #7f99c0;
  font-size: 24px;
  font-weight: 500;
  border: 0.25px solid rgba(23, 22, 28, 0.5);
  border-radius: 10px;

  padding: 16px 12px;

  ${media.laptopMax} {
    margin-top: 24px;
    margin-left: auto;
    margin-right: auto;
    font-size: 18px;
    padding: 12px 8px;
    gap: 18px;
  }
`;

export const FormField = styled.div`
  display: flex;
  color: #17161c;
  font-size: 24px;
  font-weight: 500;

  ${media.tabletMax} {
    align-items: center;
    justify-content: center;
    font-size: 18px;
    gap: 18px;
  }
`;
export const ReportFormButton = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
`;

export const InputContainer = styled.div`
  display: none;
  display: flex;

  ${media.tabletMax} {
    flex-direction: column;
    align-items: ${({ center }) => center || 'end'};
    gap: 8px;
  }
`;

export const Separator = styled.hr`
  display: none;
  ${media.tabletMax} {
    display: flex;
    width: 100%;
    border-color: #7f99c0;
  }
`;

export const PrintExportBtnWrapper = styled.div`
  ${media.laptopMax} {
    display: flex;
    gap: 12px;
    position: absolute;
    top: 0px;
    left: 30px;
  }
`;
