import styled from "@emotion/styled";
import { colors } from "../../styles/vars";

export const AdminForm = styled.form`
  margin-left: 24px;
`;

export const FormInput1 = styled.input`
  display: flex;
  width: 421px;
  height: 45px;
  padding: 8px;
  margin-top: 25px;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  border: 0.5px solid ${colors.mainFontColor};
  background: rgba(234, 234, 234, 0.32);

  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-size: 20px;
  }
`;
export const FormInput2 = styled.input`
  width: 421px;
  height: 145px;
  padding: 8px;
  gap: 8px;
  border-radius: 10px;
  border: 0.5px solid ${colors.mainFontColor};
  background: rgba(234, 234, 234, 0.32);
  position: relative;

  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-size: 20px;
    position: absolute;
    top: 8px;
    left: 8px;
  }
`;
export const Button = styled.button`
  display: flex;
  width: 197px;
  height: 48px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  border: 1px solid ${colors.mainFontColor};
  background: ${colors.accentHoverColor};
  color: ${colors.mainFontColor};
  font-size: 20px;
  margin-top: 25px;
`;

export const TitleThird = styled.h3`
  color: ${colors.mainFontColor};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.21;
  margin-top: 48px;
  margin-left: 24px;
`;

export const FormInput = styled.input`
  display: flex;
  width: 422px;
  height: 213px;
  padding: 8px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 10px;
  border: 0.5px solid ${colors.mainFontColor};
  background: rgba(234, 234, 234, 0.32);
  margin-top: 25px;
`;
