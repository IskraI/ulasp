import { useRef } from 'react';
import PropTypes from 'prop-types';

import symbol from '../../assets/symbol.svg';
import CloseButtonComponent from '../CloseBtn/CloseBtn';
import {
  SideBarBottomLineWrapper,
  SideBarLineWrapper,
  BottomSectionMobile,
  SiteBarNavContainerMobile,
  Overlay,
  OpenMobileMenuBtn
} from './SiteBarNav.styled';
import { Profile } from '../Profile/Profile';
import { NavMenu } from '../NavMenu/NavMenu';
import { ContactInfo } from '../ContactInfo/ContactInfo';
import LogOutBtn from '../LogOutButton/LogOutButton';

const MobileMenu = ({ open, closeMobileMenu, openMobileMenu }) => {
  const mobileRef = useRef(null);

  return (
    <>
      <OpenMobileMenuBtn type="button" onClick={openMobileMenu}>
        <svg width="40px" height="40px">
          <use href={`${symbol}#icon-menu`}></use>
        </svg>
      </OpenMobileMenuBtn>
      <Overlay open={open} onClick={closeMobileMenu} />
      <SiteBarNavContainerMobile open={open} ref={mobileRef}>
        <CloseButtonComponent onClick={closeMobileMenu} />

        <SideBarLineWrapper>
          <Profile />
        </SideBarLineWrapper>
        <NavMenu closeMobileMenu={closeMobileMenu} />
        <SideBarBottomLineWrapper>
          <BottomSectionMobile>
            <ContactInfo />
            <LogOutBtn />
          </BottomSectionMobile>
        </SideBarBottomLineWrapper>
      </SiteBarNavContainerMobile>
    </>
  );
};

export default MobileMenu;

MobileMenu.propTypes = {
  open: PropTypes.bool,
  closeMobileMenu: PropTypes.func,
  openMobileMenu: PropTypes.func
};
