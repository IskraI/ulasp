import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { MusicEditorSchema } from "../UserForm/UserSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUpdateEditorUserMutation } from "../../../redux/dataUsersSlice";
import { useNavigate } from "react-router-dom";

import { useForm, Controller } from "react-hook-form";
// import { UserSchema, MusicEditorSchema } from "./UserFopSchema";
// import { yupResolver } from "@hookform/resolvers/yup";

import {
  SectionUserButton,
  SectionUser,
  UserCreateModal,
} from "../UserForm/UserCreateForm.styled";
import { Title } from "../AdminCabinetPage/AdminCabinetPage.styled";

import UserFieldCard from "../CardUser/CardUserField";
import { Button } from "../../Button/Button";

const EditorCardForm = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { access, status, editorRole, adminRole, _id: id } = user;
  const activeSectionCard = adminRole || editorRole ? "MusicEditor" : "User"; //user or editor

  const handleEditActivation = () => {
    // You can perform additional actions if needed before allowing editing
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };
  const handleCloseEdit = () => {
    setIsEditing(false);
    reset({ user });
  };
  //   const typeOfStatus = status; //on/off

  const [typeOfAccess, setTypeOfAccess] = useState(access); //on/off статус он или офф

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

  const onFormSubmit = (data) => {
    if (editorRole === true) {
      console.log("data", data);

      const formData = { id, login: user.login, ...data };
      console.log("formData", formData);
      dispatchEditorUpdate(formData)
        .unwrap()
        .then(() => {
          setIsEditing(false);
        })
        .catch((error) => error?.data?.message && alert(error?.data?.message));
    }
  };
  const handleTypeOfAccess = () => {
    setTypeOfAccess(typeOfAccess === true ? false : true);
  };

  return (
    <>
      <Title margintop="8px" marginbottom="16px">
        Картка музичного редактора
      </Title>

      <form onSubmit={handleSubmit(onFormSubmit)}>
        {/* {!isEditing ? (
          <Button
            type="button"
            onClick={() => handleEditActivation()}
            text="Редагувати"
          />
        ) : (
          <button
            type="submit"
            // padding="8px"
            // text="Зберегти"
            // disabled={!isValid}
          />
        )} */}

        <UserFieldCard
          user={user}
          control={control}
          handleTypeOfAccess={handleTypeOfAccess}
          typeOfAccess={typeOfAccess}
          register={register}
          isValid={isValid}
          errors={errors}
          activeSectionCard={activeSectionCard}
          handleEditActivation={handleEditActivation}
          isEditing={isEditing}
          handleCloseEdit={handleCloseEdit}
        />
      </form>
    </>
  );
};

export default EditorCardForm;
