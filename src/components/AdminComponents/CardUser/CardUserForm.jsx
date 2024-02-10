import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useUpdateCompanyUserMutation,
  useUpdateFopUserMutation,
  useAccessUserUpdateByIdMutation,
} from "../../../redux/dataUsersSlice";
import { useNavigate } from "react-router-dom";

import UserCreateForm from "../UserForm/UserCreateForm";
import { useForm, Controller } from "react-hook-form";

import {
  SectionUserButton,
  SectionUser,
  UserCreateModal,
} from "../UserForm/UserCreateForm.styled";
import { Title } from "../AdminCabinetPage/AdminCabinetPage.styled";
import { UserFopCardSchema, UserCompanySchema } from "../UserForm/UserSchema";

import CardUserField from "./CardUserField";

const CardUserForm = ({ user, playlistCount, tracksCount }) => {
  const { userFop, access, status, editorRole, adminRole, _id: id } = user;
  const activeSectionCard = adminRole || editorRole ? "Editor" : "User"; //user or editor

  const typeOfUser = userFop; //fop/tov

  const [isEditing, setIsEditing] = useState(false);
  const [typeOfAccess, setTypeOfAccess] = useState(access); //on/off статус он или офф
  const [dispatchFopUpdate, { isLoading: isLoadingFop }] =
    useUpdateFopUserMutation(); //ф-я для отправки формы юзера фоп
  const [dispatchCompanyUpdate, { isLoading: isLoadingCompany }] = //ф-я для отправки формы юзера тов
    useUpdateCompanyUserMutation();
  const [dispatchAccess, { isLoading: isLoadingAccess }] =
    useAccessUserUpdateByIdMutation(); //изменение access on/off
  const navigate = useNavigate();
  //создание формы - юзформ

  let resolverShema =
    typeOfUser === "fop" ? UserFopCardSchema : UserCompanySchema;

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

  const handleEditActivation = () => {
    // You can perform additional actions if needed before allowing editing
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const onFormSubmit = (data) => {
    console.log("formData сработала", data);
    if (typeOfUser === "fop") {
      const formData = {
        ...data,
        access: typeOfAccess,
        id,
        userFop: typeOfUser,
      };
      // console.log("formData", formData);

      dispatchFopUpdate(formData)
        .unwrap()
        .then(() => {
          setIsEditing(false);
          // navigate("/admin/users");
        })
        .catch((error) => console.log(error.data.message));
    }
    if (typeOfUser === "tov") {
      const formData = {
        ...data,
        access: typeOfAccess,
        id,
        userFop: typeOfUser,
      };
      console.log("formData тов", formData);
      dispatchCompanyUpdate(formData)
        .unwrap()
        .then(() => {
          // navigate("/admin/users");
          setIsEditing(false);
        })
        .catch((error) => console.log(error.data));
    }
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
    reset({ user });
  };
  const handleTypeOfAccess = () => {
    setTypeOfAccess(typeOfAccess === true ? false : true);
  };

  // console.log("typeOfAccess", typeOfAccess);
  return (
    <>
      {/* <UserCreateModal> */}

      <Title margintop="8px" marginbottom="16px">
        {activeSectionCard === "User"
          ? "Картка кориcтувача"
          : "Картка музичного редактора"}
      </Title>

      <form onSubmit={handleSubmit(onFormSubmit)}>
        <CardUserField
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
          handleCloseEdit={handleCloseEdit}
          playlistCount={playlistCount}
          access={access}
        />
      </form>
    </>
  );
};

export default CardUserForm;
