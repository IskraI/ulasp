import {
    ButtonCustomSwitch,
  } from "../ButtonSwitch/ButtonSwitch.styled";
  import { useAccessUserUpdateByIdMutation } from "../../../redux/dataUsersSlice";

  import { useState } from "react";


export const ButtonSwitch = ({isTrue,idUser })=>{
  const [typeOfAccess, setTypeOfAccess] = useState(isTrue);

const [dispatchAccess, { isLoading: isLoadingAccess }] = useAccessUserUpdateByIdMutation();

const handleSwitchAccess = (idUser) => {
    dispatchAccess(idUser)
      .unwrap()
      .then(() => {
        setTypeOfAccess(prev =>!prev)
    console.log('dispatchAccess',idUser )
      })
      .catch((error) => console.log(error.data.message));
  };

    return(<>

      {isLoadingAccess && <>Loading</>}
      {!isLoadingAccess && typeOfAccess && (
  <ButtonCustomSwitch   type="button"
  isTrue={typeOfAccess}
  disable = {isLoadingAccess}
  onClick={()=>handleSwitchAccess(idUser)}>
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
) }
{!isLoadingAccess && !typeOfAccess && 
 (
  <ButtonCustomSwitch type="button"
  isTrue={typeOfAccess}
  onClick={()=>handleSwitchAccess(idUser)}>
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
      </>)}
      


