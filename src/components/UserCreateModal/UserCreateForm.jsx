import { useState, useRef } from 'react';
import UserCompanyCreateModal from "./UserCompanyCreateForm"
import UserFopCreateModal from "./UserFopCreateForm"
import {RegisterForm, NavCreateModal} from "./UserCreateModal.styled"
import { useForm, Controller } from 'react-hook-form';
import {UserFopSchema} from "./UserFopSchema"
import { yupResolver } from '@hookform/resolvers/yup';
import {useCreateFopUserMutation, useCreateCompanyUserMutation} from "../../redux/dataUsersSlice"
import { useNavigate } from 'react-router-dom';

const UserCreateForm = ({onCloseModal}) => {
  const [ dispatchFop , { isLoading: isLoadingFop }] = useCreateFopUserMutation();
  const [ dispatchCompany, { isLoading: isLoadingCompany }] = useCreateCompanyUserMutation();
  const navigate = useNavigate();
  const { control, register, handleSubmit,  setError, clearErrors,  formState: { errors, isValid, dirtyFields }  } = useForm({
    mode: 'onChange',
    // defaultValues: { name: '', email: '', password: '' },
    resolver: yupResolver(UserFopSchema),
  });

  const [typeOfUser,setTypeOfUser]= useState("fop")
  const [typeStatus,setTypeofAccept]= useState("false")
  const handleTypeOfUser = () => {
    setTypeOfUser(typeOfUser === "tov" ? "fop" : "tov");
};
 
const handleTypeofAccept = () => {

  setTypeofAccept(typeStatus === "true" ? "false" : "true");
console.log('typeStatus', typeStatus)
}

  const onFormSubmit = (data) => {
const userFop = true
    const formData = {...data, 'status': typeStatus, 'userFop': typeOfUser};
    console.log(formData);
    if(typeOfUser ==="fop") { dispatchFop(formData)
      .unwrap()
      .then(() => {
        navigate('/admin/users');
        onCloseModal();
      
      })
      .catch(error => console.log(error.data.message));}
      if(typeOfUser ==="tov") { dispatchCompany(formData)
        .unwrap()
        .then(() => {
          navigate('/admin/users');
          onCloseModal();
        
        })
        .catch(error => console.log(error.data.message));}

   
  };
    return (
    <>
      <RegisterForm>
      <form onSubmit={handleSubmit(onFormSubmit)}>
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
     
     {typeOfUser === "tov" &&    <UserCompanyCreateModal register={register} errors={errors}/>}
         

     {typeOfUser === "fop" &&   <UserFopCreateModal register={register} errors={errors}/>}
     <button  type="submit"
          // disabled={!isValid}
          >
            Отправить</button>
           </form>
     </RegisterForm>
    </>
   );

  };
  
  export default UserCreateForm;