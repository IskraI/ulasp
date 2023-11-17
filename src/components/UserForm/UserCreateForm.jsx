import { useState } from "react";


import { useForm, Controller } from "react-hook-form";
import { UserSchema, MusicEditorSchema } from "./UserFopSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useCreateFopUserMutation,
  useCreateCompanyUserMutation, useCreateEditorUserMutation
} from "../../redux/dataUsersSlice";
import { useNavigate } from "react-router-dom";

import {

  ButtonSwitch,
  SectionUserButton,
  SectionUser,
  UserCreateModal,
} from "./UserCreateForm.styled";

import UserFieldForm from "./UserFieldForm/UserFieldForm";


// получаем функцию на закрітие модального окна и значение страниці что открілась форма для добавления нового юзера - модальное окно
//typeOfPage card modal
const UserCreateForm = ({ onCloseModal   }) => {
  const [activeSection, setActiveSection] = useState("User"); //user or editor следим какой пользователь добавляется
  const [typeOfAccess, setTypeOfAccess] = useState(false); //on/off статус он или офф
  const [typeOfUser, setTypeOfUser] = useState("fop"); // тип юзера fop или tov
  const [dispatchFop, { isLoading: isLoadingFop }] = useCreateFopUserMutation(); //ф-я для отправки формы юзера фоп
  const [dispatchCompany, { isLoading: isLoadingCompany }] = //ф-я для отправки формы юзера тов
    useCreateCompanyUserMutation();
    const [dispatchEditor, { isLoading: isLoadingEditor }] = //ф-я для отправки формы юзера тов
    useCreateEditorUserMutation();


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
    resolver: activeSection === 'User' ? yupResolver(UserSchema) : yupResolver(MusicEditorSchema)
  });

  //перемикач дапуска
  const handleTypeOfAccess = () => {
    setTypeOfAccess(typeOfAccess === true ? false : true);
  
  };

  // console.log("typeOfPage", typeOfPage);
  // console.log("user", user);

  //перемикач типа юзера тов или фоп
  const handleTypeOfUser = () => {
    setTypeOfUser(typeOfUser === "tov" ? "fop" : "tov");
  };

  //отправка данных формы в зависимости от фоп или тов или редактор
  const onFormSubmit = (data) => {
   
   
  
    if (activeSection === "MusicEditor") {
      const formData = { ...data};
       console.log('formData', formData);
       dispatchEditor(formData)
        .unwrap()
        .then(() => {
          navigate("/admin/editor");
          onCloseModal();
        })
        .catch((error) => console.log(error.data));
        
    }

    if (typeOfUser === "fop") {
      const formData = { ...data, access: typeOfAccess, userFop: typeOfUser };
      console.log(formData);
      dispatchFop(formData)
        .unwrap()
        .then(() => {
          navigate("/admin/users");
          onCloseModal();
        })
        .catch((error) => console.log(error.data.message));
    }
    if (typeOfUser === "tov") {
      const formData = { ...data, access: typeOfAccess, userFop: typeOfUser };
      dispatchCompany(formData)
        .unwrap()
        .then(() => {
          navigate("/admin/users");
          onCloseModal();
        })
        .catch((error) => console.log(error.data));
    }
    
   
  };

  // определяем секцию кого добавляем юзера или муз редактора
  const handleSectionChange = (section) => {
    setActiveSection(section);
    reset();
  };
  console.log("typeOfAccess", typeOfAccess);

  return (
    <UserCreateModal>
          
          <SectionUser>
            <SectionUserButton
              isActive={activeSection === "User"}
              onClick={() => handleSectionChange("User")}
            >
              Новий користувач
            </SectionUserButton>
            <SectionUserButton
              isActive={activeSection === "MusicEditor"}
              onClick={() => handleSectionChange("MusicEditor")}
            >
              Музичний редактор
            </SectionUserButton>
          </SectionUser>
          {activeSection === "User" && (
            <ButtonSwitch type="button" onClick={handleTypeOfUser}>
              {typeOfUser === "tov" ? "ТОВ" : "ФОП"}
            </ButtonSwitch>
          )}
   
 
      {/* форма изпользует компонент  UserFieldForm - в зависимости от пропсов выводятся те или иные поля*/}
      <form onSubmit={handleSubmit(onFormSubmit)}>
       
          <UserFieldForm
            control={control}
            handleTypeOfStatus={handleTypeOfAccess}
            typeOfStatus={typeOfAccess}
            register={register}
            isValid={isValid}
            errors={errors}
            activeSection={activeSection}
            typeOfUser={typeOfUser}
            dirtyFields={dirtyFields}
           
          />
                  
      </form>
    </UserCreateModal>
  );
};

export default UserCreateForm;
