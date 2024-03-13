import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import symbol from "../../assets/symbol.svg";

import { useSelector } from "react-redux";
import { getUserState } from "../../redux/userSelectors";
import { useLogoutMutation } from "../../redux/authSlice";
import { useLogoutClientMutation } from "../../redux/authClientSlice";

import { Exit, LogOutButton, Wrapper } from "./LogOutButton.styled";

const LogOutBtn = () => {
  const user = useSelector(getUserState);
  const [dispatch] = useLogoutMutation();
  const [dispatchClient] = useLogoutClientMutation();
  const [visibleExit, setVisibleExit] = useState(false);

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setVisibleExit(false);
        break;
      case "/signin":
        setVisibleExit(false);
        break;
      case "/adminlogin":
        setVisibleExit(false);
        break;
      default:
        setVisibleExit(true);
    }
  }, [location.pathname]);

  const navigate = useNavigate();
  const handleLogOut = () => {
    if (user.userRole) {
      dispatchClient()
        .unwrap()
        .then(() => {
          navigate("/");
        });
    } else {
      dispatch()
        .unwrap()
        .then(() => {
          navigate("/adminlogin");
        });
    }
  };

  return (
    <Exit>
      {user.isLoggedIn && visibleExit && (
        <>
          <LogOutButton type="button" onClick={handleLogOut}>
            <Wrapper>
              <svg className="icon" width="24px" height="24px">
                <use href={`${symbol}#icon-exit`}></use>
              </svg>
              Вихід
            </Wrapper>
          </LogOutButton>
        </>
      )}
    </Exit>
  );
};

export default LogOutBtn;
