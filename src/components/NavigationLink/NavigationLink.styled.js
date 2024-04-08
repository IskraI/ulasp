import styled from "@emotion/styled";
import { colors, transition, mainCubicTransition } from "../../styles/vars";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${({ marginTop }) => marginTop || "16px"};
  margin-bottom: 24px;
`;

export const NavigationLink = styled(NavLink)`
  display: ${(props) => props.shownavigationlink};
  color: ${colors.mainFontColor};
  font-size: 18px;
  line-height: calc(22 / 18);

  padding-right: 24px;
  padding-left: 30px;
  padding-top: 10px;
  padding-bottom: 10px;

  text-decoration: underline;
  text-underline-offset: 4px;
  cursor: pointer;
  transition: color 300ms ${mainCubicTransition};

  &:hover {
    color: ${colors.accentHoverColor};
    transition: color 300ms ${mainCubicTransition};
  }
`;
