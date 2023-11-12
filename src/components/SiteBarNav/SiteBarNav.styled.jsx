import styled from "@emotion/styled";
import { colors } from "../../styles/vars";
import { NavLink } from "react-router-dom";

export const SiteBarNavConteiner = styled.div`
   display: flex;
  flex-direction: column;
  width: 287px;
  height: calc(100vh - (80px + 68px));
  border-right: 2px solid ${colors.primaryColor};
  border-top: 2px solid ${colors.primaryColor};
  border-bottom: 2px solid ${colors.primaryColor};
`;

export const LogOuButton = styled.button`
  color: ${colors.mainFontColor};
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 7px;
  background: transparent;
  border: none;
`;

export const Exit = styled.div`
  display: flex;
  margin-top: 16px;
  margin-left: 189px;
  margin-bottom: 16px;
  align-items: center;
`;

export const BottomSection = styled.div`
  display: flex;
  margin-top: auto;
  flex-direction: column;
`;
