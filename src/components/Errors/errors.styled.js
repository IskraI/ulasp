import styled from '@emotion/styled';
import { colors, media } from '../../styles/vars';

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 24px 8px;
  color: ${(props) =>
    props.textColor ? props.textColor : colors.mainFontColor};
  font-size: 28px;
  font-weight: 500;

  ${media.tabletMax} {
    font-size: 22px;
  }
`;

export const ErrorText = styled.p`
  display: flex;
  align-items: center;
  padding: 0px 8px;
  color: ${colors.errorColor};
  font-size: 18px;
  font-weight: 700;
`;

export const ErrorValidateText = styled.p`
  position: absolute;
  top: -18px;
  font-size: 12px;
  font-weight: 600;
  margin: 0 auto;
  color: ${colors.errorColor};
`;
