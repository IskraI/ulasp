import { useState, useRef } from 'react';
import UserCompanyCreateModal from "./UserCompanyCreateForm"
import UserFopCreateModal from "./UserFopCreateForm"
import {RegisterForm, NavCreateModal} from "./UserCreateModal.styled"

const UserCreateModal = () => {

  const [typeOfUser,setTypeOfUser]= useState("fop")
  const handleTypeOfUser = () => {
    setTypeOfUser(typeOfUser === "tov" ? "fop" : "tov");
};
 
    return (
    <>
      <RegisterForm>
        <NavCreateModal>
      <h3>Новий користувач</h3>
          <h3>Музичний редактор</h3>
          </NavCreateModal>
      <button onClick={handleTypeOfUser}>
       {typeOfUser === "tov" ? "ТОВ" : "ФОП"}
      </button>
     
     {typeOfUser === "tov" &&    <UserCompanyCreateModal/>}
         

     {typeOfUser === "fop" &&   <UserFopCreateModal/>}
     </RegisterForm>
    </>
  );
 
  };
  
  export default UserCreateModal;