import { useState } from 'react';
import { ContactInfo } from '../../components/ContactInfo/ContactInfo';
import { NavMenu } from '../../components/NavMenu/NavMenu';
import { Profile } from '../../components/Profile/Profile';
import LogOutBtn from '../LogOutButton/LogOutButton';
import MobileMenu from './MobileMenu';
import {
  SiteBarNavConteiner,
  BottomSection,
  SideBarLineWrapper,
  SideBarBottomLineWrapper
} from './SiteBarNav.styled';
import { isMobile } from 'react-device-detect';

import { MobileContainer } from '../UserMediaComponent/TracksTable/TracksTableUser.styled';

import useScrollBlock from '../../hooks/useScrollBlock';

export const SiteBarNav = () => {
  const [open, setOpen] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const openMobileMenu = () => {
    setOpen(true);
    blockScroll();
  };

  const closeMobileMenu = () => {
    setOpen(false);
    allowScroll();
  };

  return (
    <>
      <SiteBarNavConteiner>
        <SideBarLineWrapper>
          <Profile />
        </SideBarLineWrapper>
        <NavMenu />
        <SideBarBottomLineWrapper>
          <BottomSection>
            <ContactInfo />

            <LogOutBtn />
          </BottomSection>
        </SideBarBottomLineWrapper>
      </SiteBarNavConteiner>

      <>
        <MobileMenu
          open={open}
          closeMobileMenu={closeMobileMenu}
          openMobileMenu={openMobileMenu}
          isMobile={isMobile}
        />
      </>
    </>
  );
};
