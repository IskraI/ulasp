import styled from "@emotion/styled";
import { colors } from "../../../styles/vars";

export const DivWrapper = styled.div`
  display: flex;
`;

export const CountTracksStyled = styled.p`
  margin-top: 6px;
  margin-bottom: 0;
  margin-right: auto;
  margin-left: 4px;
  padding: 0 6px 0 6px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  line-height: 1.19;
  font-weight: 500;
  color: ${colors.mainFontColor};
  text-align: center;
`;
