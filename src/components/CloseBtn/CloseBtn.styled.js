import styled from '@emotion/styled';
import Close from '../../images/close.svg?react';

export const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const CloseIconStyled = (component) => styled(component)`
  width: 24px;
  height: 24px;
`;


export const CloseIcon = CloseIconStyled(Close);