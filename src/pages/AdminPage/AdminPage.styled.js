import styled from '@emotion/styled';
import { media } from '../../styles/vars';

export const PageSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  ${media.tabletMax} {
    max-width: 767px;
  }

  /* ${media.laptopMax} {
    max-width: 1199px;
  } */
`;

export const PageSubpage = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  padding: 24px 46px 14px 46px;

  ${media.tabletMax} {
    max-width: 767px;
    padding: 12px 4px;
    margin: 4px 8px;
    /* outline: 1px solid yellow; */
  }
`;
