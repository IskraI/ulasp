import { useState } from "react";
import { Button } from "../../Button/Button";

import { useForm, Controller } from "react-hook-form";
import {
  UserFopSchema,
  UserCompanySchema,
  MusicEditorSchema,
} from "./UserSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useCreateFopUserMutation,
  useCreateCompanyUserMutation,
  useCreateEditorUserMutation,
} from "../../../redux/dataUsersSlice";
import { useNavigate } from "react-router-dom";

import {
  ButtonCompany,
  SectionUserButton,
  SectionUser,
  UserCreateModal,
} from "./UserCreateForm.styled";

import UserFieldForm from "../UserForm/UserFieldForm/UserFieldForm";

// получаем функцию на закрітие модального окна и значение страниці что открілась форма для добавления нового юзера - модальное окно
//typeOfPage card modal
const UserCreateForm = ({ onCloseModal, section }) => {
  const [activeSection, setActiveSection] = useState(section); //user or editor следим какой пользователь добавляется
  const [typeOfAccess, setTypeOfAccess] = useState(false); //on/off статус он или офф
  const [typeOfUser, setTypeOfUser] = useState("fop"); // тип юзера fop или tov
  const [dispatchFop, { isLoading: isLoadingFop }] = useCreateFopUserMutation(); //ф-я для отправки формы юзера фоп
  const [dispatchCompany, { isLoading: isLoadingCompany }] = //ф-я для отправки формы юзера тов
    useCreateCompanyUserMutation();
  const [dispatchEditor, { isLoading: isLoadingEditor }] = //ф-я для отправки формы юзера тов
    useCreateEditorUserMutation();

  const navigate = useNavigate();
  //создание формы - юзформ
  let resolverShema =
    activeSection === "MusicEditor"
      ? MusicEditorSchema
      : typeOfUser === "fop"
      ? UserFopSchema
      : UserCompanySchema;
  // console.log('resolverShema', resolverShema)
  const {
    control,
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: { errors, isValid, dirtyFields },
  } = useForm({
    mode: "onChange",
    // defaultValues: { name: '', email: '', password: '' },
    resolver: yupResolver(resolverShema),
  });

  //перемикач дапуска
  const handleTypeOfAccess = () => {
    setTypeOfAccess(typeOfAccess === true ? false : true);
  };

  //отправка данных формы в зависимости от фоп или тов или редактор
  const onFormSubmit = (data) => {
    if (activeSection === "MusicEditor") {
      const formData = { ...data, editorRole: true, status: false };
      //  console.log('formData', formData);
      dispatchEditor(formData)
        .unwrap()
        .then(() => {
          navigate("/admin/users/editors");
          onCloseModal();
        })
        .catch((error) => alert(error.data));
    }

    if (typeOfUser === "fop") {
      const formData = { ...data, access: typeOfAccess, userFop: typeOfUser };
      // console.log(formData);
      dispatchFop(formData)
        .unwrap()
        .then(() => {
          navigate("/admin/users/allusers");
          onCloseModal();
        })
        .catch((error) => alert(error.data.message));
    }
    if (typeOfUser === "tov") {
      const formData = { ...data, access: typeOfAccess, userFop: typeOfUser };
      console.log(formData);
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
  //перемикач типа юзера тов или фоп
  const handleTypeOfUser = () => {
    setTypeOfUser(typeOfUser === "tov" ? "fop" : "tov");
    reset();
  };

  console.log("activeSection", activeSection);

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
        <ButtonCompany type="button" onClick={handleTypeOfUser}>
          {typeOfUser === "tov" ? "ТОВ" : "ФОП"}
        </ButtonCompany>
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
        {/* <Button
          type="submit"
          padding="8px"
          text="Додати" 
          // onClick={()=>{console.log('click')}}
          // disabled={!isValid}
        />    */}
      </form>
    </UserCreateModal>
  );
};

export default UserCreateForm;
