import {
  ButtonCustomSwitch,
  ContentButton,
  Circle,
  Text,
} from "../ButtonSwitch/ButtonSwitch.styled";
import { useAccessUserUpdateByIdMutation } from "../../../redux/dataUsersSlice";
import { LoaderButton } from "../../Loader/Loader";
import { useState } from "react";

export const ButtonSwitch = ({
  isTrue,
  type,
  idUser,
  onClick,
  form,
  handleTypeOfAccess,
}) => {
  const [typeOfAccess, setTypeOfAccess] = useState(isTrue);

  const [isHovered, setIsHovered] = useState(false);
  const [dispatchAccess, { isLoading: isLoadingAccess }] =
    useAccessUserUpdateByIdMutation();

  const handleSwitchAccess = (idUser) => {
    dispatchAccess(idUser)
      .unwrap()
      .then(() => {
        setIsHovered(false);
        setTypeOfAccess((prev) => !prev);
        console.log("dispatchAccess", idUser);
      })
      .catch((error) => console.log(error.data.message));
  };
  // console.log("isTrue :>> ", isTrue);
  return (
    <>
      {/* Если form равен false или не определен */}
      {!form && (
        <>
          {isLoadingAccess && (
            <ButtonCustomSwitch type="button">
              <LoaderButton height={12} width={12} color={"#113f10"} />
            </ButtonCustomSwitch>
          )}
          {!isLoadingAccess && typeOfAccess && (
            <ButtonCustomSwitch
              type="button"
              isTrue={typeOfAccess}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => handleSwitchAccess(idUser)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <Circle
                  cx="6"
                  cy="6"
                  r="6"
                  isTrue={typeOfAccess}
                  isHovered={isHovered}
                />
              </svg>
              On
            </ButtonCustomSwitch>
          )}
          {!isLoadingAccess && !typeOfAccess && (
            <ButtonCustomSwitch
              type="button"
              isTrue={typeOfAccess}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => handleSwitchAccess(idUser)}
            >
              Off
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <Circle
                  cx="6"
                  cy="6"
                  r="6"
                  isTrue={typeOfAccess}
                  isHovered={isHovered}
                />
              </svg>
            </ButtonCustomSwitch>
          )}
        </>
      )}

      {/* Если form равен true */}
      {form && (
        <>
          {isTrue ? (
            <ButtonCustomSwitch
              type="button"
              isTrue={isTrue}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => handleTypeOfAccess()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <Circle
                  cx="6"
                  cy="6"
                  r="6"
                  isTrue={isTrue}
                  isHovered={isHovered}
                />
              </svg>
              On
            </ButtonCustomSwitch>
          ) : (
            <ButtonCustomSwitch
              type="button"
              isTrue={isTrue}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => handleTypeOfAccess()}
            >
              Off
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <Circle
                  cx="6"
                  cy="6"
                  r="6"
                  isTrue={isTrue}
                  isHovered={isHovered}
                />
              </svg>
            </ButtonCustomSwitch>
          )}
        </>
      )}
    </>
  );
};
