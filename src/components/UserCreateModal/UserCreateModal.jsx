import { useState, useRef } from 'react';
import UserCompanyCreateModal from "./UserCompanyCreateForm"
import UserFopCreateModal from "./UserFopCreateForm"
import {RegisterForm, NavCreateModal} from "./UserCreateModal.styled"

const UserCreateModal = () => {

  const [typeOfUser,setTypeOfUser]= useState("fop")
  const [typeStatus,setTypeofAccept]= useState("false")
  const handleTypeOfUser = () => {
    setTypeOfUser(typeOfUser === "tov" ? "fop" : "tov");
};
 
const handleTypeofAccept = () => {

  setTypeofAccept(typeStatus === "true" ? "false" : "true");
console.log('typeStatus', typeStatus)
}
    return (
    <>
      <RegisterForm>
        <NavCreateModal>
      <h3>Новий користувач</h3>
          <h3>Музичний редактор</h3>
          </NavCreateModal>
          <div>
      <button onClick={handleTypeOfUser}>
       {typeOfUser === "tov" ? "ТОВ" : "ФОП"}
      </button>
      <button onClick={handleTypeofAccept}>
       {typeStatus === "true" ? "On" : "Off"}
      </button>
      </div>
     
     {typeOfUser === "tov" &&    <UserCompanyCreateModal/>}
         

     {typeOfUser === "fop" &&   <UserFopCreateModal/>}
     </RegisterForm>
    </>
  );
 
  };
  
  export default UserCreateModal;