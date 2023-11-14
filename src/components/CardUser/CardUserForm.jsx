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
} from "../UserForm/UserCreateForm.styled";

import UserCreateForm from "../UserForm/UserCreateForm";

const UserCardForm = ({ user }) => {
const {userFop, status, editorRole, adminRole} = user;
  const activeSectionCard =  adminRole||editorRole? "Editor" : "User"; //user or editor

  const typeOfStatus = status; //on/off
  const typeOfUser = userFop; //fop/tov



  
  return (
    <UserCreateForm style={{ marginTop: "24px" }} typeOfPage="card" user={user} activeSectionCard ={activeSectionCard} typeOfStatus={typeOfStatus} typeOfUser = {typeOfUser}/>
      
  );
};

export default UserCardForm;
