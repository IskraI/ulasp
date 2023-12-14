import styled from "@emotion/styled";
import { colors } from "../../../styles/vars";
import { NavLink } from "react-router-dom";

export const NewSongsLink = styled(NavLink)`
position: absolute;
  color: ${colors.mainFontColor};
font-size: 24px;
font-weight: 500;
margin-top: 80px;
margin-left: 220px;
`;