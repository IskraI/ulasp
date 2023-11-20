import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { UserSchema, MusicEditorSchema } from "../UserForm/UserFopSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useCreateFopUserMutation,
  useCreateCompanyUserMutation,
} from "../../redux/dataUsersSlice";
import { useNavigate } from "react-router-dom";



import UserCreateForm from "../UserForm/UserCreateForm";
import { useForm, Controller } from "react-hook-form";
// import { UserSchema, MusicEditorSchema } from "./UserFopSchema";
// import { yupResolver } from "@hookform/resolvers/yup";


import {

  ButtonSwitch,
  SectionUserButton,
  SectionUser,
  UserCreateModal,
} from "../UserForm/UserCreateForm.styled";
import { Title } from "../AdminCabinetPage/AdminCabinetPage.styled";

import UserFieldCard from "../UserForm/UserFieldForm/UserFieldCard";
import { Button } from "../Button/Button";


const UserCardForm = ({ user }) => {
const {userFop, access, status, editorRole, adminRole} = user;
  const activeSectionCard =  adminRole||editorRole? "Editor" : "User"; //user or editor

  // const typeOfStatus = status; //on/off
  const typeOfUser = userFop; //fop/tov

  const [isEditing, setIsEditing] = useState(false);
  const [typeOfAccess, setTypeOfAccess] = useState(access); //on/off статус он или офф
  
  


  const navigate = useNavigate();
  //создание формы - юзформ
  const {
    control,
    register,
    handleSubmit,
    setError,
    clearErrors, reset,
    formState: { errors, isValid, dirtyFields },
  } = useForm({
    mode: "onChange",
    // defaultValues: { name: '', email: '', password: '' },
    // resolver: activeSectionCard === 'User' ? yupResolver(UserSchema) : yupResolver(MusicEditorSchema)
  });
  

  const handleEditActivation = () => {
    // You can perform additional actions if needed before allowing editing
    setIsEditing( true);
   
  };

  const onFormSubmit = (data) => {
   
    console.log("data", data);
    setIsEditing( false);

   
  };
  const handleTypeOfAccess = () => {
    setTypeOfAccess(typeOfAccess === true ? false : true);
  
  };


  return (<>

   {/* <UserCreateModal> */}
     
      <Title margintop="8px" marginbottom="16px">
        {activeSectionCard === "User"
          ? "Картка кориcтувача"
          : "Картка музичного редактора"}
      </Title>
     
      <form onSubmit={handleSubmit(onFormSubmit)}>
      {!isEditing ?(  <Button type="button" onClick={()=>handleEditActivation()}   text="Редагувати" />
      ):  (   <button
        type="submit"
        // padding="8px"
        // text="Зберегти" 
        // disabled={!isValid}
      />)}
 

    <UserFieldCard
    user= {user}
      control={control}
      handleTypeOfAccess={handleTypeOfAccess}
      typeOfAccess={typeOfAccess}
      register={register}
      isValid={isValid}
      errors={errors}
      activeSectionCard={activeSectionCard}
      typeOfUser={typeOfUser}
      handleEditActivation={handleEditActivation}
      isEditing={isEditing}
    />
        
    </form>

    {/* <UserCreateForm style={{ marginTop: "24px" }} typeOfPage="card" user={user} activeSectionCard ={activeSectionCard} typeOfStatus={typeOfStatus} typeOfUser = {typeOfUser}/> */}
    {/* </UserCreateModal> */}
    </>
  );
};

export default UserCardForm;
