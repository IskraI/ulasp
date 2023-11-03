import { useState, useRef } from 'react';
import UserCompanyCreateModal from "./UserCompanyCreateForm"
import UserFopCreateModal from "./UserFopCreateForm"
const UserCreateModal = () => {

  const [typeOfUser,setTypeOfUser]= useState("fop")
  const handleTypeOfUser = () => {
    setTypeOfUser(typeOfUser === "tov" ? "fop" : "tov");
};
 
    return (
    <>
      <div>
      <button onClick={handleTypeOfUser}>
       {typeOfUser === "tov" ? "ТОВ" : "ФОП"}
      </button>
     
     {typeOfUser === "tov" &&    <UserCompanyCreateModal/>}
         

     {typeOfUser === "fop" &&   <UserFopCreateModal/>}
     </div>
    </>
  );
 
  };
  
  export default UserCreateModal;