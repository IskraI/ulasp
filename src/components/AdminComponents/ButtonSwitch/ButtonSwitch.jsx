import {
  ButtonCustomSwitch,
  ContentButton,
} from "../ButtonSwitch/ButtonSwitch.styled";
import { useAccessUserUpdateByIdMutation } from "../../../redux/dataUsersSlice";

import { useState } from "react";

export const ButtonSwitch = ({
  isTrue,
  type,
  idUser,
  onClick,
  form = false,
}) => {
  const [typeOfAccess, setTypeOfAccess] = useState(isTrue);
  console.log("form", form);

  const [dispatchAccess, { isLoading: isLoadingAccess }] =
    useAccessUserUpdateByIdMutation();

  const handleSwitchAccess = (idUser) => {
    dispatchAccess(idUser)
      .unwrap()
      .then(() => {
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
              onClick={() => handleSwitchAccess(idUser)}
            >
              On
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <circle cx="6.5" cy="6.5" r="6" fill="#8CACD7" />
              </svg>
            </ButtonCustomSwitch>
          )}
          {!isLoadingAccess && !typeOfAccess && (
            <ButtonCustomSwitch
              type="button"
              isTrue={typeOfAccess}
              onClick={() => handleSwitchAccess(idUser)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <circle cx="6.5" cy="6.5" r="6" fill="#FFF3BF" />
              </svg>
              Off
            </ButtonCustomSwitch>
          )}
        </>
      )}
      {form && (
        <>
          {isTrue ? (
            <ButtonCustomSwitch type={type} isTrue={isTrue} onClick={onClick}>
              On
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <circle cx="6.5" cy="6.5" r="6" fill="#8CACD7" />
              </svg>
            </ButtonCustomSwitch>
          ) : (
            <ButtonCustomSwitch type={type} isTrue={isTrue} onClick={onClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <circle cx="6.5" cy="6.5" r="6" fill="#FFF3BF" />
              </svg>
              Off
            </ButtonCustomSwitch>
          )}
        </>
      )}
    </>
  );
};
