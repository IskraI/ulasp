import { ContactInfo } from "../../components/ContactInfo/ContactInfo";
import { NavMenu } from "../../components/NavMenu/NavMenu";
import { Profile } from "../../components/Profile/Profile";
import symbol from "../../assets/symbol.svg";
import {
  LogOuButton,
  Exit,
  SiteBarNavConteiner,
  BottomSection,
  SideBarLineWrapper,
  SideBarBottomLineWrapper,
} from "./SiteBarNav.styled";
import { useSelector } from "react-redux";
import { getUserState } from "../../redux/userSelectors";
import { useLogoutMutation } from "../../redux/authSlice";
import {useLogoutClientMutation} from "../../redux/authClientSlice";
import { useNavigate } from "react-router-dom";

export const SiteBarNav = () => {
  const user = useSelector(getUserState);
  const [dispatch] = useLogoutMutation();
  const [dispatchClient] = useLogoutClientMutation();

  const navigate = useNavigate();
  const handleLogOut = () => {
    if (user.userRole) {
      dispatchClient()
      .unwrap()
      .then(() => {
        navigate("/");
      });
    }else { dispatch()
      .unwrap()
      .then(() => {
        navigate("/adminlogin");
      });}
   
  };

  return (
      <SiteBarNavConteiner>
        <SideBarLineWrapper>
          <Profile />
        </SideBarLineWrapper>
        <NavMenu />
        <SideBarBottomLineWrapper>
          <BottomSection>
            <ContactInfo />
            <Exit>
              <svg className="icon" width="24" height="24">
                <use href={`${symbol}#icon-exit`}></use>
              </svg>
              <LogOuButton type="button" onClick={handleLogOut}>
                Вихід
              </LogOuButton>
            </Exit>
          </BottomSection>
        </SideBarBottomLineWrapper>
      </SiteBarNavConteiner>
  );
};
