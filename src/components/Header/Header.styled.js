import styled from '@emotion/styled';
import { colors, media } from '../../styles/vars';

export const PageHeader = styled.header`
  display: flex;

  ${media.laptopMax} {
    /* padding: 0 60px; */
    justify-content: center;
    /* max-width: 767px; */
    height: 100px;
    /* align-items: flex-start; */
  }

  /* justify-content: center; */

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
  ${media.laptopMax} {
    display: none;
  }
  width: 56px;
  height: 68px;
  margin-right: auto;
`;

export const AvatarHeader = styled.img`
  ${media.laptopMax} {
    display: none;
  }

  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-left: auto;
`;

export const HeaderPlayerWrapper = styled.div`
  display: flex;
  /* width: 100%; */
  width: 90%;
  justify-content: center;
  margin-top: 2px;
  /* margin: 0 8px;
  justify-content: flex-end; */

  ${media.tabletMax} {
    margin-left: 12px;
    align-self: flex-start;
    max-width: 80%;
    height: 95%;
  }
`;
