import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { UserFopSchema, MusicEditorSchema } from "../UserForm/UserSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useUpdateEditorUserMutation,
  useUpdateCompanyUserMutation,
  useUpdateFopUserMutation,
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
const {userFop, access, status, editorRole, adminRole, _id:id} = user;
  const activeSectionCard =  adminRole||editorRole? "Editor" : "User"; //user or editor

  // const typeOfStatus = status; //on/off
  const typeOfUser = userFop; //fop/tov

  const [isEditing, setIsEditing] = useState(false);
  const [typeOfAccess, setTypeOfAccess] = useState(access); //on/off статус он или офф
  const [dispatchFopUpdate, { isLoading: isLoadingFop }] = useUpdateFopUserMutation(); //ф-я для отправки формы юзера фоп
  const [dispatchCompanyUpdate, { isLoading: isLoadingCompany }] = //ф-я для отправки формы юзера тов
    useUpdateCompanyUserMutation();
    const [dispatchEditorUpdate, { isLoading: isLoadingEditor }] = //ф-я для отправки формы юзера тов
    useUpdateEditorUserMutation();
  


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
    
  
    // if (editorRole === true) {
    //   const formData = { ...data};
    //   //  console.log('formData', formData);
    //    dispatchEditorUpdate(formData)
    //     .unwrap()
    //     .then(() => {
    //       navigate("/admin/editor");
    //       onCloseModal();
    //     })
    //     .catch((error) => console.log(error.data));
        
    // }

    if (typeOfUser === "fop") {
      const formData = { ...data, access: typeOfAccess};
      console.log("formData", id, formData);
      dispatchFopUpdate(id, formData)
        .unwrap()
        .then(() => {
          setIsEditing( false);
          // navigate("/admin/users");
         
        })
        .catch((error) => console.log(error.data.message));
    }
    if (typeOfUser === "tov") {
      const formData = { ...data, access: typeOfAccess, userFop: typeOfUser };
      console.log("formData тов", formData);
      dispatchCompanyUpdate(formData)
        .unwrap()
        .then(() => {
          // navigate("/admin/users");
          setIsEditing( false);
        })
        .catch((error) => console.log(error.data));
    }
    
   
   
    


   
  };
  const handleTypeOfAccess = () => {
    setTypeOfAccess(typeOfAccess === true ? false : true);
  
  };

console.log('typeOfAccess', typeOfAccess)
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
