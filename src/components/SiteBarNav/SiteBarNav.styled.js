import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors, sizes } from '../../styles/vars';

export const SiteBarNavConteiner = styled.div`
  /* display: none; */
  display: flex;
  flex-direction: column;
  width: 287px;
  min-height: calc(100vh - (${sizes.header.height} + ${sizes.footer.height}));
  padding-left: 10px;
  background: linear-gradient(
    180deg,
    transparent 50%,
    rgba(255, 243, 191, 0.5) 100%
  );

  /* background-color: #3e6da3; */
  transform: translateX(0);
  transition: transform 400ms ease-out;
  /* outline: 1px solid red; */

  /* @media screen and (max-width: 1199px) {
    display: none;
    transform: translateX(-100%);
  } */
`;

export const SideBarLineWrapper = styled.div`
  border-right: 2px solid ${colors.accentHoverColor};
`;

export const SideBarBottomLineWrapper = styled.div`
  display: flex;
  align-items: end;
  border-right: 2px solid ${colors.accentHoverColor};
  height: 100%;
`;

export const BottomSection = styled.div`
  margin: 0 auto;
`;

// ********* Mobile Section

export const BottomSectionMobile = styled.div`
  margin: 0 auto;
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 999;

  ${({ open }) =>
    open &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`;

export const SiteBarNavContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  width: 287px;
  height: 100dvh;
  padding-left: 10px;
  background: linear-gradient(
    180deg,
    transparent 50%,
    rgba(255, 243, 191, 0.5) 100%
  );
  background-image: url('/src/assets/Background@2x.jpg');

  background-size: auto;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 1000;

  ${({ open }) =>
    open &&
    css`
      transform: translateX(0);
    `}
`;

export const OpenMobileMenuBtn = styled.button`
  position: fixed;
  top: 30px;
  left: 0px;
  transform: translateX(50%, -50%);
  background-color: transparent;
  border: none;
  z-index: 998;
`;
