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
