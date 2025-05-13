import { ContactInfo } from '../../components/ContactInfo/ContactInfo';
import { NavMenu } from '../../components/NavMenu/NavMenu';
import { Profile } from '../../components/Profile/Profile';
import LogOutBtn from '../LogOutButton/LogOutButton';
import {
  SiteBarNavConteiner,
  BottomSection,
  SideBarLineWrapper,
  SideBarBottomLineWrapper,
  SiteBarNavContainerMobile,
  BottomSectionMobile
} from './SiteBarNav.styled';
import './MobileSidebar.css';
import { isMobile } from 'react-device-detect';

import { useState } from 'react';

import CloseButtonComponent from '../CloseBtn/CloseBtn';

import symbol from '../../assets/symbol.svg';

export const SiteBarNav = () => {
  const [open, setOpen] = useState(false);

  const toogleButton = () => setOpen(!open);

  return (
    <>
      {!isMobile && (
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
      )}

      {isMobile && (
        <>
          <button
            style={{
              position: 'fixed',
              top: 50,
              left: 0,
              backgroundColor: 'transparent',
              border: 'none',
              zIndex: 999
            }}
            type="button"
            onClick={toogleButton}
          >
            <svg width="32px" height="32px">
              <use href={`${symbol}#icon-menu`}></use>
            </svg>
          </button>

          {open && (
            <div className="overlay">
              <SiteBarNavContainerMobile>
                <CloseButtonComponent onClick={toogleButton} />
                <SideBarLineWrapper>
                  <Profile />
                </SideBarLineWrapper>
                <NavMenu />
                <SideBarBottomLineWrapper>
                  <BottomSectionMobile>
                    <ContactInfo />

                    <LogOutBtn />
                  </BottomSectionMobile>
                </SideBarBottomLineWrapper>
              </SiteBarNavContainerMobile>
            </div>
          )}
        </>
      )}
    </>
  );
};
