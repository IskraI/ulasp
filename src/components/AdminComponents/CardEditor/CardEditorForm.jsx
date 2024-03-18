import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Modal } from "../../Modal/Modal";
import { Button } from "../../Button/Button";
import { TextModal } from "../../Modal/Modal.styled";
import { CardEditorSchema } from "../UserForm/UserSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUpdateEditorUserMutation } from "../../../redux/dataUsersSlice";
import { useNavigate } from "react-router-dom";

import { useForm, Controller } from "react-hook-form";
import { Title } from "../AdminCabinetPage/AdminCabinetPage.styled";

import CardUserField from "../CardUser/CardUserField";

const CardEditorForm = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeModal, setActiveModal] = useState(null); //после успешного добавления спрашиваем добавить ли еще
  const [errorMessage, setErrorMessage] = useState("");
  const { access, status, editorRole, adminRole, _id: id } = user;

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
    resolver: yupResolver(CardEditorSchema),
  });

  const onFormSubmit = (data) => {
    console.log("formData", data);
    if (editorRole === true) {
      const formData = { id, login: user.login, ...data };
      console.log("formData", formData);
      dispatchEditorUpdate(formData)
        .unwrap()
        .then(() => {
          setIsEditing(false);
          handleShowModal("successUpdate");
        })
        .catch((e) => {
          let errorMessage = e.data?.message;
          setErrorMessage(errorMessage);
          handleShowModal("error");
        });
    }
  };
  const handleTypeOfAccess = () => {
    setTypeOfAccess(typeOfAccess === true ? false : true);
  };
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
        {user.editorRole && <span>Картка музичного редактора</span>}
        {user.adminRole && <span>Картка адміністратора</span>}
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
          activeSectionCard={"MusicEditor"}
          handleEditActivation={handleEditActivation}
          isEditing={isEditing}
          handleCloseEdit={handleCloseEdit}
        />
      </form>
      {activeModal === "successUpdate" && (
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
          onClose={handleCloseErrorModal}
          showCloseButton={true}
        >
          <TextModal> {errorMessage}</TextModal>
        </Modal>
      )}
    </>
  );
};

export default CardEditorForm;
