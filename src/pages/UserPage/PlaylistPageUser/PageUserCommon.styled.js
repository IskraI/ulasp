import styled from '@emotion/styled';
import { media } from '../../../styles/vars';

export const GenresWrapper = styled.div`
  ${media.tabletMax} {
    margin: 0 auto 12px auto;
  }

  ${media.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ErrorText = styled.p`
  color: #535250;
  text-align: center;
  font-size: 28px;
  margin: 40px 0;
`;
