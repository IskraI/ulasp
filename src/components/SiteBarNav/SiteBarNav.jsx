import { ContactInfo } from "../../components/ContactInfo/ContactInfo";
import { NavMenu } from "../../components/NavMenu/NavMenu";
import { Profile } from "../../components/Profile/Profile";
import symbol from "../../assets/symbol.svg";
import {
  LogOuButton,
  Exit,
  SiteBarNavConteiner,
  Con,
  BottomSection,
} from "./SiteBarNav.styled";

import { useLogoutMutation } from "../../redux/authSlice";

import { useNavigate } from 'react-router-dom';

export const SiteBarNav = () => {
  const [dispatch] = useLogoutMutation();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch()
     .unwrap()
      .then(() => {
        navigate("/")
       
      })
    
  };

  return (
    <Con>
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
    </Con>
  );
};
