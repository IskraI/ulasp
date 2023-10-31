import { ContactInfo } from "../../components/ContactInfo/ContactInfo";
import { NavMenu } from "../../components/NavMenu/NavMenu";
import { Profile } from "../../components/Profile/Profile";
import symbol from "../../assets/symbol.svg";
import {
  LogOuButton,
  Exit,
  SiteBarNavConteiner,
  BottomSection,
} from "./SiteBarNav.styled";

import { useLogoutMutation } from "../../redux/authSlice";

export const SiteBarNav = () => {
  const [dispatch] = useLogoutMutation();

  const handleLogOut = () => {
    dispatch();
  };

  return (
    <>
      <SiteBarNavConteiner>
        <Profile />
        <NavMenu />
        <BottomSection>
          <ContactInfo />
          <Exit>
            <svg className="icon" width="24" height="24">
              <use href={`${symbol}#icon-exit`}></use>{" "}
            </svg>
            <LogOuButton type="button" onClick={handleLogOut}>
              Вихід
            </LogOuButton>
          </Exit>
        </BottomSection>
      </SiteBarNavConteiner>
    </>
  );
};
