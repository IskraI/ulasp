import styled from '@emotion/styled';
import { colors, media } from '../../../styles/vars';

export const UserCabinetContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FormContainer = styled.div`
  display: flex;
  width: 100%;

  gap: auto;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;

  ${media.laptopMax} {
    max-width: 422px;
    display: block;
    /* flex-direction: column; */
    padding: 0 4px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1200px) and (max-width: 1400px) {
    padding: 0 4px;
  }

  /* outline: 1px solid green; */
`;

export const EditorText = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  color: ${colors.mainFontColor};
`;

export const TitleFirst = styled.h2`
  color: ${colors.mainFontColor};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const TitleSecond = styled.h2`
  color: ${colors.mainFontColor};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  margin-top: 18px;
`;

export const DataUser = styled.p`
  color: ${colors.mainFontColor};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.21;
  margin-top: 11px;
`;

export const InfoWrapper = styled.div`
  display: block;
`;
