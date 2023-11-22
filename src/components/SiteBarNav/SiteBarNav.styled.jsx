import styled from "@emotion/styled";
import { colors } from "../../styles/vars";
import { NavLink } from "react-router-dom";
import { sizes } from "../../styles/SharedStyles";

export const SiteBarNavConteiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 287px;
  min-height: calc(100vh - (${sizes.header.height} + ${sizes.footer.height}));
  /* border-right: 2px solid ${colors.primaryColor}; */
  /* border-top: 2px solid ${colors.primaryColor}; */
  /* border-bottom: 2px solid ${colors.primaryColor}; */
  /* position: fixed;
  top: 0;
  bottom: 0;
  height: 100%;
   left: 0; */

  /* background: linear-gradient(
    180deg,
    rgba(28, 84, 141, 0.01) 30%,
    rgba(255, 243, 191, 0.5) 100%
  ); */
  background: linear-gradient(
    180deg,
    transparent 50%,
    rgba(255, 243, 191, 0.5) 100%
  );
`;

export const SideBarLineWrapper = styled.div`
  border-right: 2px solid ${colors.accentHoverColor};
`;

export const SideBarBottomLineWrapper = styled.div`
  display: flex;
  align-items: end;
  border-right: 2px solid ${colors.accentHoverColor};
  height: 100%;
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

export const BottomSection = styled.div``;
