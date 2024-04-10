import { useState } from "react";
import { Modal } from "../../Modal/Modal";
import { TextModal } from "../../Modal/Modal.styled";
import { Button } from "../../Button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useUpdateCompanyUserMutation,
  useUpdateFopUserMutation,
  useAccessUserUpdateByIdMutation,
} from "../../../redux/dataUsersSlice";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import { Title } from "../AdminCabinetPage/AdminCabinetPage.styled";
import {
  UserFopCardSchema,
  UserCompanyCardSchema,
} from "../UserForm/UserSchema";

import CardUserField from "./CardUserField";

const CardUserForm = ({ user, playlistCount, tracksCount }) => {
  const { userFop, access, status, editorRole, adminRole, _id: id } = user;
  const activeSectionCard = adminRole || editorRole ? "Editor" : "User"; //user or editor

  const typeOfUser = userFop; //fop/tov

  const [isEditing, setIsEditing] = useState(false);

  const [dispatchFopUpdate, { isLoading: isLoadingFop }] =
    useUpdateFopUserMutation(); //ф-я для отправки формы юзера фоп
  const [dispatchCompanyUpdate, { isLoading: isLoadingCompany }] = //ф-я для отправки формы юзера тов
    useUpdateCompanyUserMutation();

  const navigate = useNavigate();
  //создание формы - юзформ

  let resolverShema =
    typeOfUser === "fop" ? UserFopCardSchema : UserCompanyCardSchema;

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
    resolver: yupResolver(resolverShema),
  });

  const handleEditActivation = () => {
    // You can perform additional actions if needed before allowing editing
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const onFormSubmit = (data) => {
    if (typeOfUser === "fop") {
      console.log("data :>> ", data);
      const formData = {
        ...data,
        access,
        id,
        userFop: typeOfUser,
      };

      dispatchFopUpdate(formData)
        .unwrap()
        .then(() => {
          setIsEditing(false);
          handleShowModal("update");
        })
        .catch((e) => {
          let errorMessage = e.data?.message;
          setErrorMessage(errorMessage);
          handleShowModal("error");
        });
    }
    if (typeOfUser === "tov") {
      const formData = {
        ...data,
        access,
        id,
        userFop: typeOfUser,
      };

      dispatchCompanyUpdate(formData)
        .unwrap()
        .then(() => {
          handleShowModal("update");
          setIsEditing(false);
        })
        .catch((e) => {
          let errorMessage = e.data?.message;
          setErrorMessage(errorMessage);
          handleShowModal("error");
        });
    }
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
    reset({ user });
  };

  const [activeModal, setActiveModal] = useState(null); //после успешного добавления спрашиваем добавить ли еще
  const [errorMessage, setErrorMessage] = useState("");
  const handleShowModal = (modalContent) => {
    setActiveModal(modalContent);
  };
  const handleCloseModal = () => {
    document.body.classList.remove("modal-open");
    setActiveModal(null);
  };

  return (
    <>
      <Title margintop="8px" marginbottom="16px">
        Картка кориcтувача
      </Title>

      <form onSubmit={handleSubmit(onFormSubmit)}>
        <CardUserField
          user={user}
          control={control}
          typeOfAccess={access}
          register={register}
          isValid={isValid}
          errors={errors}
          activeSectionCard={activeSectionCard}
          typeOfUser={typeOfUser}
          handleEditActivation={handleEditActivation}
          isEditing={isEditing}
          handleCloseEdit={handleCloseEdit}
          playlistCount={playlistCount}
          tracksCount={tracksCount}
          access={access}
        />
      </form>
      {activeModal === "update" && (
        <Modal
          width={"520px"}
          padding={"44px 24px"}
          onClose={handleCloseModal}
          showCloseButton={true}
          flexDirection="column"
        >
          <TextModal>Дані успішно оновлені</TextModal>

          <Button
            type="button"
            padding="8px 44px"
            height="48px"
            text="Ок"
            showIcon={false}
            margintop="24px"
            onClick={handleCloseModal}
          />
        </Modal>
      )}
      {activeModal === "error" && (
        <Modal
          width={"520px"}
          padding={"24px"}
          onClose={handleCloseModal}
          showCloseButton={true}
        >
          <TextModal> {errorMessage}</TextModal>
        </Modal>
      )}
    </>
  );
};

export default CardUserForm;
