import { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { Modal } from "../../Modal/Modal";
import { TextModal } from "../../Modal/Modal.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEditorLoginPasswordUpdateMutation } from "../../../redux/dataUsersSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Button/Button";
import {
  LoginLabel,
  LoginForm,
  LoginField,
  LoginInput,
} from "../UserForm/UserCreateForm.styled";
import { loginPasswordEditorSchema } from "../UserForm/UserSchema";
import { Tooltip } from "../UserForm/UserCreateForm.styled";

const EditorLoginForm = ({ user }) => {
  const [activeModal, setActiveModal] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [dispatch, { isLoading: isLoadingEditor }] = //ф-я для отправки формы юзера тов
    useEditorLoginPasswordUpdateMutation();

  const navigate = useNavigate();
  //создание формы - юзформ
  const [isEditing, setIsEditing] = useState(false);
  // const [isSaved, setIsSaved] = useState(false);
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
    defaultValue: { password: "" },
    resolver: yupResolver(loginPasswordEditorSchema),
  });
  const handleEditActivation = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const onFormSubmit = ({ login, password }) => {
    const formData = {
      login,
      password: password !== undefined ? password : "",
      id: user._id,
    };
    console.log("formData :>> ", formData);
    dispatch(formData)
      .unwrap()
      .then(() => {
        setIsEditing(false);
        setActiveModal("update");
      })
      .catch((e) => {
        let errorMessage = e.data?.message;
        setErrorMessage(errorMessage);
        setActiveModal("error");
      });
  };

  const handleCloseModal = () => {
    document.body.classList.remove("modal-open");
    setActiveModal(null);
  };

  return (
    <>
      <LoginForm onSubmit={handleSubmit(onFormSubmit)}>
        <LoginField>
          <LoginLabel>Логін</LoginLabel>
          <Controller
            name="login"
            control={control}
            defaultValue={user.login}
            render={({ field }) => (
              <>
                <LoginInput
                  type="text"
                  placeholder="Логін"
                  readOnly={!isEditing}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  className={
                    isEditing ? `${errors.login ? "invalid" : "valid"}` : ""
                  }
                />
                {errors.contractNumber && (
                  <Tooltip className={`${errors.login ? "visible" : ""}`}>
                    {errors.login.message}
                  </Tooltip>
                )}
              </>
            )}
          />
        </LoginField>
        <LoginField>
          {/* <LoginLabel>Пароль</LoginLabel> */}
          <Controller
            name="password"
            control={control}
            defaultValue={""}
            render={({ field }) => (
              <>
                <LoginInput
                  type="text"
                  placeholder="Пароль"
                  readOnly={!isEditing}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  className={
                    isEditing ? `${errors.login ? "invalid" : "valid"}` : ""
                  }
                />
                {errors.contractNumber && (
                  <Tooltip className={`${errors.login ? "visible" : ""}`}>
                    {errors.login.message}
                  </Tooltip>
                )}
              </>
            )}
          />
        </LoginField>
        <Button
          type={"button"}
          // padding="8px 12px"
          width={"118px"}
          height="48px"
          marginright="auto"
          onClick={
            !isEditing ? handleEditActivation : handleSubmit(onFormSubmit)
          }
          text={isEditing ? "Зберегти" : "Змінити"}
          disabled={isEditing ? !isValid : false}
        />
      </LoginForm>
      {activeModal === "update" && (
        <Modal
          // width={"664px"}
          padding={"24px 74px"}
          onClose={handleCloseModal}
          showCloseButton={true}
          flexDirection="column"
        >
          <TextModal>Дані успшно оновлені</TextModal>
        </Modal>
      )}
      {activeModal === "error" && (
        <Modal
          width={"520px"}
          padding={"24px 74px"}
          onClose={handleCloseModal}
          showCloseButton={true}
        >
          <TextModal> {errorMessage}</TextModal>
        </Modal>
      )}
    </>
  );
};

export default EditorLoginForm;
