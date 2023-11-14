import { useState, useRef } from "react";
// import UserCompanyCreateModal from "./UserCompanyCreateForm"
// import UserFopCreateModal from "./UserFopCreateForm"

import { useForm, Controller } from "react-hook-form";
import { UserSchema } from "./UserFopSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useCreateFopUserMutation,
  useCreateCompanyUserMutation,
} from "../../redux/dataUsersSlice";
import { useNavigate } from "react-router-dom";

import {
  RegisterForm,
  ButtonSwitch,
  SectionUserButton,
  SectionUser,
  UserCreateModal,
} from "./UserCreateForm.styled";
import { Title } from "../AdminCabinetPage/AdminCabinetPage.styled";
import UserFieldForm from "./UserFieldForm/UserFieldForm";
import UserFieldCard from "./UserFieldForm/UserFieldCard";

// получаем функцию на закрітие модального окна и значение страниці что открілась форма для добавления нового юзера - модальное окно
//typeOfPage card modal
const UserCreateForm = ({ onCloseModal, typeOfPage, activeSectionCard, user }) => {
  const [activeSection, setActiveSection] = useState("User"); //user or editor следим какой пользователь добавляется
  const [typeOfStatus, setTypeOfStatus] = useState(false); //on/off статус он или офф
  const [typeOfUser, setTypeOfUser] = useState("fop"); // тип юзера fop или tov
  const [dispatchFop, { isLoading: isLoadingFop }] = useCreateFopUserMutation(); //ф-я для отправки формы юзера фоп
  const [dispatchCompany, { isLoading: isLoadingCompany }] = //ф-я для отправки формы юзера тов
    useCreateCompanyUserMutation();

  const navigate = useNavigate();
  //создание формы - юзформ
  const {
    control,
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isValid, dirtyFields },
  } = useForm({
    mode: "onChange",
    // defaultValues: { name: '', email: '', password: '' },
    resolver: yupResolver(UserSchema),
  });

  //перемикач дапуска
  const handleTypeOfStatus = () => {
    setTypeOfStatus(typeOfStatus === true ? false : true);
    clearErrors();
  };

  console.log("typeOfPage", typeOfPage);

  //перемикач типа юзера тов или фоп
  const handleTypeOfUser = () => {
    setTypeOfUser(typeOfUser === "tov" ? "fop" : "tov");
  };

  //отправка данных формы в зависимости о тфоп или тов
  const onFormSubmit = (data) => {
    const formData = { ...data, status: typeOfStatus, userFop: typeOfUser };
    console.log(formData);
    if (typeOfPage === "card") {
      
      return console.log(formData);
    }

    if (typeOfUser === "fop") {
      dispatchFop(formData)
        .unwrap()
        .then(() => {
          navigate("/admin/users");
          onCloseModal();
        })
        .catch((error) => console.log(error.data.message));
    }
    if (typeOfUser === "tov") {
      dispatchCompany(formData)
        .unwrap()
        .then(() => {
          navigate("/admin/users");
          onCloseModal();
        })
        .catch((error) => console.log(error.data));
    }
    if (activeSection === "MusicEditor") {
      dispatchCompany(formData)
        .unwrap()
        .then(() => {
          navigate("/admin/editor");
          onCloseModal();
        })
        .catch((error) => console.log(error.data));
    }
   
  };

  // определяем секцию кого добавляем юзера или муз редактора
  const handleSectionChange = (section) => {
    setActiveSection(section);

    clearErrors();
  };

  return (
    <UserCreateModal>
      {typeOfPage === "modal" && (
        <>
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
        </>
      )}

      {typeOfPage === "card" && (
        <Title margintop="8px" marginbottom="16px">
          {activeSectionCard === "User"
            ? "Картка кориcтувача"
            : "Картка музичного редактора"}
        </Title>
      )}

      {/* форма изпользует компонент  UserFieldForm - в зависимости от пропсов выводятся те или иные поля*/}
      <form onSubmit={handleSubmit(onFormSubmit)}>
        {typeOfPage === "modal" && (
          <UserFieldForm
            control={control}
            handleTypeOfStatus={handleTypeOfStatus}
            typeOfStatus={typeOfStatus}
            register={register}
            isValid={isValid}
            errors={errors}
            activeSection={activeSection}
            typeOfUser={typeOfUser}
          />
        )}
        {typeOfPage === "card" && (
          <UserFieldCard
          user= {user}
            control={control}
            handleTypeOfStatus={handleTypeOfStatus}
            typeOfStatus={typeOfStatus}
            register={register}
            isValid={isValid}
            errors={errors}
            activeSectionCard={activeSectionCard}
            typeOfUser={typeOfUser}
          />
        )}
      </form>
    </UserCreateModal>
  );
};

export default UserCreateForm;
