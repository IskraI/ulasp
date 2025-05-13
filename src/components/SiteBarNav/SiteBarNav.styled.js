import styled from '@emotion/styled';
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

export const SiteBarNavContainerMobile = styled.div`
  /* display: none; */
  display: flex;
  flex-direction: column;
  width: 287px;
  height: 100vh;
  padding-left: 10px;
  background: linear-gradient(
    180deg,
    transparent 50%,
    rgba(255, 243, 191, 0.5) 100%
  );
  background-image: url('/src/assets/Background@2x.jpg');

  background-size: auto;
  /* background-color: #3e6da3; */
  transform: translateX(0);
  transition: transform 400ms ease-out;
  /* outline: 1px solid red; */

  /* @media screen and (max-width: 1199px) {
    display: none;
    transform: translateX(-100%);
  } */
`;

export const BottomSectionMobile = styled.div`
  margin: 0 auto;
`;
