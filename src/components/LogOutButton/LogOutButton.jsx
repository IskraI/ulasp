import { useNavigate } from "react-router-dom";
import symbol from "../../assets/symbol.svg";

import { useDispatch, useSelector } from "react-redux";
import { getUserState } from "../../redux/userSelectors";
import { useLogoutMutation } from "../../redux/authSlice";
import { useLogoutClientMutation } from "../../redux/authClientSlice";

import { setDefaultState } from "../../redux/playerSlice";

import { Exit, LogOutButton, Wrapper } from "./LogOutButton.styled";

const LogOutBtn = () => {
  const resetPlayer = useDispatch();
  const user = useSelector(getUserState);
  const [dispatch] = useLogoutMutation();
  const [dispatchClient] = useLogoutClientMutation();

  const navigate = useNavigate();
  const handleLogOut = () => {
    resetPlayer(setDefaultState());
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
      {user.isLoggedIn && (
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
