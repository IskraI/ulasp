import styled from "@emotion/styled";
import { colors } from "../../../styles/vars";

export const ShopsWrapper = styled.section`
  /* display: flex; */
`;

export const ShopsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 50px;
`;

export const TitleWrapper = styled.p`
  font-size: 24px;
  line-height: 1.21;
  font-weight: 500;
  color: ${colors.mainFontColor};
  margin-bottom: 26px;
  margin-top: 26.5px;
`;