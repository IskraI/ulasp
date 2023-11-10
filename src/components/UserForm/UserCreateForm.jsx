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
} from "./UserCreateModal.styled";

import UserFieldForm from "./UserFieldForm/UserField";

const UserCreateForm = ({ onCloseModal }) => {
  const [activeSection, setActiveSection] = useState("NewUser");//user or editor
  const [typeOfStatus, setTypeOfStatus] = useState(false); //on/off
  const [typeOfUser, setTypeOfUser] = useState("fop"); //fop/tov
  const [dispatchFop, { isLoading: isLoadingFop }] = useCreateFopUserMutation();
  const [dispatchCompany, { isLoading: isLoadingCompany }] =
    useCreateCompanyUserMutation();
  const navigate = useNavigate();
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

  console.log("typeStatus", typeOfStatus);

  const handleTypeOfUser = () => {
    setTypeOfUser(typeOfUser === "tov" ? "fop" : "tov");
  };

  const onFormSubmit = (data) => {
      const formData = { ...data, status: typeOfStatus, userFop: typeOfUser };
    console.log(formData);
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
  };
  const handleSectionChange = (section) => {
    setActiveSection(section);

    clearErrors();
  };
  console.log("ButtonSwitch.props", ButtonSwitch);
  return (
    <UserCreateModal>
      <SectionUser>
        <SectionUserButton
          isActive={activeSection === "NewUser"}
          onClick={() => handleSectionChange("NewUser")}
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
      {activeSection === "NewUser" && (
        <ButtonSwitch type="button" onClick={handleTypeOfUser}>
          {typeOfUser === "tov" ? "ТОВ" : "ФОП"}
        </ButtonSwitch>
      )}
        <form onSubmit={handleSubmit(onFormSubmit)}>
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
        </form>
     
    </UserCreateModal>
  );
};

export default UserCreateForm;
