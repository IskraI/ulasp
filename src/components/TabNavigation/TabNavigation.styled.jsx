import styled from "@emotion/styled";
import { colors } from "../../styles/vars";
import { NavLink } from "react-router-dom";


export const PathText = styled.div`
color: ${colors.mainFontColor};
font-size: 16px;
margin-left: 24px;

`;

export const PathContainer = styled.div`
display: flex;
margin-top: 26.5px;
`;
export const BackLink = styled(NavLink)`

`;
