import styled from "@emotion/styled";
import { colors } from "../../styles/vars";

export const StatsListWrapper = styled.div`
  display: flex;
  gap: 8px;
  /* margin-left: 111px; */
  margin-top: 24px;
  margin-bottom: 29px;
`;

export const StatItem = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${colors.primaryColor};
  color: ${colors.mainFontColor};
  text-align: center;
  font-size: 22px;
  line-height: calc(26.4 / 22);
`;

export const StatItemEditor = styled(StatItem)`
  margin-right: 68px;
  background-color: ${(props) => props.backgroundColor};
  flex-direction: column;
`;
