import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

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

import UserFieldForm from "../UserForm/UserFieldForm/UserFieldForm";

const UserCardForm = ({ user }) => {
  const [activeSection, setActiveSection] = useState("User"); //user or editor
  const [typeOfStatus, setTypeOfStatus] = useState(false); //on/off
  const [typeOfUser, setTypeOfUser] = useState("fop"); //fop/tov
  const [dispatchFop, { isLoading: isLoadingFop }] = useCreateFopUserMutation();
  const [dispatchCompany, { isLoading: isLoadingCompany }] =
    useCreateCompanyUserMutation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("carduser")) {
      setActiveSection("User");
    } else if (location.pathname.includes("cardeditor")) {
      setActiveSection("MusicEditor");
    }
  }, [location.pathname]);

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
  };

  //     clearErrors();
  //   };
  console.log("ButtonSwitch.props", ButtonSwitch);
  return (
    <UserCreateModal style={{ marginTop: "24px" }}>
      <SectionUser>
        <SectionUserButton
          isActive={activeSection === "User"}
          //   onClick={() => handleSectionChange("NewUser")}
        >
          Картка користувача
        </SectionUserButton>
        <SectionUserButton
          isActive={activeSection === "MusicEditor"}
          //   onClick={() => handleSectionChange("MusicEditor")}
        >
          Картка музичного редактора
        </SectionUserButton>
      </SectionUser>
      {/* {activeSection === "NewUser" && (
        <ButtonSwitch type="button" onClick={handleTypeOfUser}>
          {typeOfUser === "tov" ? "ТОВ" : "ФОП"}
        </ButtonSwitch>
      )} */}
      <form>
        <UserFieldForm
          user={user}
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
