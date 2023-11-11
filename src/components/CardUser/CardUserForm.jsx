import { useState } from "react";
import { useForm} from "react-hook-form";
import { UserSchema } from "../UserForm/UserFopSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useCreateFopUserMutation,
  useCreateCompanyUserMutation,
} from "../../redux/dataUsersSlice";
import { useNavigate } from "react-router-dom";

import {
    ButtonSwitch,
  SectionUserButton,
  SectionUser,
  UserCreateModal,
} from "../UserForm/UserCreateModal.styled";

import UserFieldForm from "../UserForm/UserFieldForm/UserField";

const UserCardForm = () => {
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
          Картка користувача
        </SectionUserButton>
        <SectionUserButton
          isActive={activeSection === "MusicEditor"}
          onClick={() => handleSectionChange("MusicEditor")}
        >
          Картка музичного редактора
        </SectionUserButton>
      </SectionUser>
      {/* {activeSection === "NewUser" && (
        <ButtonSwitch type="button" onClick={handleTypeOfUser}>
          {typeOfUser === "tov" ? "ТОВ" : "ФОП"}
        </ButtonSwitch>
      )} */}
        <form >
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

export default UserCardForm;