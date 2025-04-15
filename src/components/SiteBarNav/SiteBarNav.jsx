import { ContactInfo } from '../../components/ContactInfo/ContactInfo';
import { NavMenu } from '../../components/NavMenu/NavMenu';
import { Profile } from '../../components/Profile/Profile';
import LogOutBtn from '../LogOutButton/LogOutButton';
import {
  SiteBarNavConteiner,
  BottomSection,
  SideBarLineWrapper,
  SideBarBottomLineWrapper
} from './SiteBarNav.styled';

export const SiteBarNav = () => {
  return (
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
  );
};
