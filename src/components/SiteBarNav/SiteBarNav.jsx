import { ContactInfo } from "../../components/ContactInfo/ContactInfo";
import { NavMenu } from "../../components/NavMenu/NavMenu";
import {Profile} from "../../components/Profile/Profile"
import symbol from "../../assets/symbol.svg";
import { LogOutLink, Exit, SiteBarNavConteiner } from "./SiteBarNav.styled";


export const SiteBarNav = () => {
 
  return (
    <>
          <SiteBarNavConteiner>
              <Profile/>
      <NavMenu />
      <ContactInfo />
      <Exit>
        <svg className="icon" width="24" height="24">
          <use href={`${symbol}#icon-exit`}></use>{" "}
        </svg>
        <LogOutLink to="/adminlogin"> Вихід </LogOutLink>
      </Exit>
     </SiteBarNavConteiner>
    </>
  );
};

