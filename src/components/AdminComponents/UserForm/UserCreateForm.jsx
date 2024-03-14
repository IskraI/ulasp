import { useState } from "react";
import { Button } from "../../Button/Button";

import { useForm } from "react-hook-form";
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

import { Modal } from "../../Modal/Modal";
import { TextModal, ModalBtnContainer } from "../../Modal/Modal.styled";
import {
  ButtonCompany,
  SectionUserButton,
  SectionUser,
  UserCreateModal,
} from "./UserCreateForm.styled";

import UserFieldForm from "../UserForm/UserFieldForm/UserFieldForm";
import { Loader } from "../../Loader/Loader";

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

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, dirtyFields },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(resolverShema),
  });
  // модальне вікно для додавання еще одного юзера
  const [activeModal, setActiveModal] = useState(null); //после успешного добавления спрашиваем добавить ли еще
  const [errorMessage, setErrorMessage] = useState(""); //сповіщення про помилку для модального вікна

  const handleShowModal = (modalContent) => {
    setActiveModal(modalContent);
  };
  const handleCloseErrorModal = () => {
    setActiveModal(null);
  }; // сповіщення про помилку додавання з бекенду

  const handleCloseAndAddUserModal = () => {
    reset();
    setActiveModal(null);
  }; // заводимо ще одного юзера

  const handleCloseModal = () => {
    onCloseModal();
    setActiveModal(null);
  }; //юзер додан - модальні закриті

  //перемикач допуска
  const handleTypeOfAccess = () => {
    setTypeOfAccess(typeOfAccess === true ? false : true);
  };

  //отправка данных формы в зависимости от фоп или тов или редактор
  const onFormSubmit = (data) => {
    // Object.keys(data).forEach((key) => {
    //   setValue(key, data[key].trim());
    // });
    if (activeSection === "MusicEditor") {
      const formData = {
        ...data,
        editorRole: true,
        status: true,
        access: true,
      };
      // console.log("formData", formData);
      dispatchEditor(formData)
        .unwrap()
        .then(() => {
          navigate("/admin/users/editors");
          handleShowModal("successAdd");
        })
        .catch((e) => {
          let errorMessage = e.data?.message;
          setErrorMessage(errorMessage);
          handleShowModal("error");
        });
      return;
    }

    if (typeOfUser === "fop") {
      const formData = { ...data, access: typeOfAccess, userFop: typeOfUser };
      console.log(formData);
      dispatchFop(formData)
        .unwrap()
        .then(() => {
          handleShowModal("successAdd");
          navigate("/admin/users/allusers");
        })
        .catch((e) => {
          let errorMessage = e.data?.message;
          setErrorMessage(errorMessage);
          handleShowModal("error");
        });
    }
    if (typeOfUser === "tov") {
      const formData = { ...data, access: typeOfAccess, userFop: typeOfUser };

      dispatchCompany(formData)
        .unwrap()
        .then(() => {
          navigate("/admin/users/allusers");
          handleShowModal("successAdd");
        })
        .catch((e) => {
          let errorMessage = e.data?.message;
          setErrorMessage(errorMessage);
          handleShowModal("error");
        });
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

  return (
    <>
      {/* {(isLoadingFop || isLoadingCompany || isLoadingEditor) && <Loader />} */}
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

        {/* форма использует компонент  UserFieldForm - в зависимости от пропсов выводятся те или иные поля*/}
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

      {activeModal === "successAdd" && (
        <Modal
          width={"664px"}
          padding={"138px 138px 74px"}
          onClose={handleCloseModal}
          showCloseButton={true}
          flexDirection="column"
        >
          <TextModal>Новий користувач успішно додан</TextModal>

          <ModalBtnContainer>
            <Button
              type="button"
              padding="8px 37px"
              height="48px"
              text="Готово"
              showIcon={false}
              onClick={handleCloseModal}
            />
            <Button
              type="button"
              padding="8px 44px"
              height="48px"
              text="Додати ще"
              showIcon={false}
              marginleft="31px"
              onClick={handleCloseAndAddUserModal}
            />
          </ModalBtnContainer>
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

export default UserCreateForm;
