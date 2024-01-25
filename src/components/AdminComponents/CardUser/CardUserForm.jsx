import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { UserFopSchema, MusicEditorSchema } from "../UserForm/UserSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useUpdateEditorUserMutation,
  useUpdateCompanyUserMutation,
  useUpdateFopUserMutation,
} from "../../../redux/dataUsersSlice";
import { useNavigate } from "react-router-dom";

import UserCreateForm from "../UserForm/UserCreateForm";
import { useForm, Controller } from "react-hook-form";
// import { UserSchema, MusicEditorSchema } from "./UserFopSchema";
// import { yupResolver } from "@hookform/resolvers/yup";

import {
  SectionUserButton,
  SectionUser,
  UserCreateModal,
} from "../UserForm/UserCreateForm.styled";
import { Title } from "../AdminCabinetPage/AdminCabinetPage.styled";

import UserFieldCard from "../UserForm/UserFieldForm/UserFieldCard";
import { Button } from "../../Button/Button";

const UserCardForm = ({ user }) => {
  const { userFop, access, status, editorRole, adminRole, _id: id } = user;
  const activeSectionCard = adminRole || editorRole ? "Editor" : "User"; //user or editor

  // const typeOfStatus = status; //on/off
  const typeOfUser = userFop; //fop/tov

  const [isEditing, setIsEditing] = useState(false);
  const [typeOfAccess, setTypeOfAccess] = useState(access); //on/off статус он или офф
  const [dispatchFopUpdate, { isLoading: isLoadingFop }] =
    useUpdateFopUserMutation(); //ф-я для отправки формы юзера фоп
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
    clearErrors,
    reset,
    formState: { errors, isValid, dirtyFields },
  } = useForm({
    mode: "onChange",
    // defaultValues: { name: '', email: '', password: '' },
    // resolver: activeSectionCard === 'User' ? yupResolver(UserSchema) : yupResolver(MusicEditorSchema)
  });

  const handleEditActivation = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const onFormSubmit = async (data) => {
    try {
      if (typeOfUser === "fop") {
        const formData = {
          ...data,
          access: typeOfAccess,
          id,
          userFop: typeOfUser,
        };
        console.log("formData", formData);

        await dispatchFopUpdate(formData);
      } else if (typeOfUser === "tov") {
        const formData = {
          ...data,
          access: typeOfAccess,
          id,
          userFop: typeOfUser,
        };
        console.log("formData тов", formData);
        await dispatchCompanyUpdate(formData);
      }

      handleEditActivation();
    } catch (error) {
      console.log(error);
      // Обработка ошибок, если необходимо
    }
  };

  const handleTypeOfAccess = () => {
    setTypeOfAccess(typeOfAccess === true ? false : true);
  };

  console.log("isEditing", isEditing);
  return (
    <>
      {/* <UserCreateModal> */}

      <Title margintop="8px" marginbottom="16px">
        {activeSectionCard === "User"
          ? "Картка кориcтувача"
          : "Картка музичного редактора"}
      </Title>

      <form onSubmit={() => handleSubmit(onFormSubmit)}>
        {!isEditing ? (
          <Button
            type="button"
            display="none"
            onClick={handleEditActivation}
            text="Редагувати"
          />
        ) : (
          <Button
            type="submit"
            display="none"
            padding="8px"
            text="Зберегти"
            // disabled={!isValid}
          />
        )}

        <UserFieldCard
          user={user}
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
