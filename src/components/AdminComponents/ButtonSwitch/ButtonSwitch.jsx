import {
  ButtonCustomSwitch,
  ContentButton,
  Circle,
  Text,
} from "../ButtonSwitch/ButtonSwitch.styled";
import { useAccessUserUpdateByIdMutation } from "../../../redux/dataUsersSlice";

import { useState } from "react";

export const ButtonSwitch = ({
  isTrue,
  type,
  idUser,
  onClick,
  form = "false",
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

  return (
    <>
      {!form && (
        <>
          {isLoadingAccess && (
            <ButtonCustomSwitch type="button">Loading</ButtonCustomSwitch>
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
      {form && (
        <>
          {isTrue ? (
            <ButtonCustomSwitch
              form={form}
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
          ) : (
            <ButtonCustomSwitch
              form={form}
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
    </>
  );
};
