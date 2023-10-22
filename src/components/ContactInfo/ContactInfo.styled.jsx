import styled from '@emotion/styled';
import { colors } from '../../styles/vars';

export const ListContact = styled.ul`
margin-left: 59px;
`;

export const ItemContact = styled.li`
 color:   ${colors.mainFontColor};
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: calc(18/14);
display: flex;
  flex-direction: column;
  margin-top: 4px;
`;

export const StyledLink = styled.a`
  color:   ${colors.mainFontColor};
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height:calc(16.8/14);
margin-top: 4px;
`;