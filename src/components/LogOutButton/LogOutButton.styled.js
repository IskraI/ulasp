import styled from '@emotion/styled';
import { colors, media } from '../../styles/vars';

export const LogOutButton = styled.button`
  color: ${colors.mainFontColor};
  display: flex;
  gap: 6px;
  align-items: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 7px;
  background: transparent;
  border: none;
`;

export const Exit = styled.div`
  display: flex;
  margin-top: 16px;
  margin-left: 24px;
  justify-content: flex-end;
  margin-bottom: 16px;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 250ms ease-out;

  svg {
    transition: stroke 250ms ease-out;
  }

  &:hover {
    svg {
      stroke: ${colors.accentHoverColor};
      transition: stroke 250ms ease-in;
    }
    color: ${colors.accentHoverColor};

    transition: color 250ms ease-in;
  }
`;
