import styled from "@emotion/styled";
import { colors } from "../../../styles/vars";

export const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 4px;
`;

export const CountTracksStyled = styled.p`
  padding: 2px 6px 2px 6px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
  line-height: 1.19;
  font-weight: 500;
  color: ${colors.mainFontColor};
`;
