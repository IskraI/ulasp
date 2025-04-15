import styled from '@emotion/styled';
import { colors, media } from '../../styles/vars';

export const PageHeader = styled.header`
  display: flex;
  /* justify-content: center; */
  padding: 0 60px;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: ${colors.bgHeaderColor};
  border-bottom: 2px solid ${colors.primaryColor};
  position: fixed;
  z-index: 3;
  /* margin: 0 auto; */

  ${media.tablet} {
    padding: 0 114px;
  }
`;

export const PageLogo = styled.img`
  width: 56px;
  height: 68px;
  margin-right: auto;
  /* margin-left: 114px; */
`;

export const AvatarHeader = styled.img`
  width: 56px;
  height: 68px;
  /* margin-r: auto; */
`;
