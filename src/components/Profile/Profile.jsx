import {
  UserName,
  ProfileAvatar,
  ProfileAvatarWrapper,
} from "./Profile.styled";
// import { useState, useEffect } from 'react';
import { getUserState } from "../../redux/userSelectors";
import { useSelector } from "react-redux";

import { useUpdateAdminAvatarMutation } from "../../redux/authSlice/";
import { useEffect, useRef, useState } from "react";
import FileUpload from "../FIleUpload/FIleUpload";

const BASE_URL = `http://localhost:8000`;

export const Profile = () => {
  const user = useSelector(getUserState);


  const { firstName, lastName, fatherName, avatarURL } = user;

  //для смены аватар
  const [selectedImage, setSelectedImage] = useState(null);
  const [dispatch, { isLoading }] = useUpdateAdminAvatarMutation();

  const handleFormSubmit = () => {
    // e.preventDefault(); 
   
    const formData = new FormData();
 console.log('pfikb d ajhve fd',formData )
    // if (!selectedImage) {
    //   return;
    // }

    formData.append("avatarURL", selectedImage);
   
    dispatch(formData)
      .unwrap()
      .then(() => {
        console.log("Your profile has been updated", "success");
      })
      .catch((e) => console.log(e.data.message));
  };


  useEffect(() => handleFormSubmit(), [selectedImage]);

  // console.log('user', user)
  const handleChooseIcon = (event) => {
    // setSelectedImage(event.target.files[0]);
    setSelectedImage(event.target.files[0]);
  };

  // const [selectedFile, setSelectedFile] = useState(null);
  //     const inputRef = useRef(null);// State to hold the selected file
  //   const updateUserAvatarMutation = useUpdateUserAvatarMutation();

  // const handleAvatarUpload = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const formData = new FormData();
  //     formData.append("avatar", file);
  //     updateUserAvatarMutation.mutate(formData);
  //   }
  // };

  const defaultAvatarSrc = "../avatar.jpg";
  const avatarSrc = selectedImage ? URL.createObjectURL(selectedImage) : `${BASE_URL}/${avatarURL}` || defaultAvatarSrc;
 
  return (
    <>

      {/* <form onSubmit={handleFormSubmit}> */}
      <form>
        <ProfileAvatarWrapper>
          <FileUpload
            selectedImage={""}
            setSelectedImage={setSelectedImage}
            accept="image/*"
            change={handleChooseIcon}
            saveChanges={handleFormSubmit}
          >
            <ProfileAvatar src={avatarSrc} alt="Avatar" />
          </FileUpload> 
         </ProfileAvatarWrapper> 
        {/* Я закомментил */}
        {/* <ProfileAvatar src={avatarSrc} alt="Avatar" />
        <input
          name="name"
          type="file"
          accept="image/*"
          disabled={isLoading}
          onChange={handleChooseIcon}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "<LoadingSpinner size={30} />" : "Save changes"}
        </button>*/}
      </form> 


      {/* <input
        type="file"
        accept="image/*"
        onChange={handleAvatarUpload}
        style={{ display: 'none' }}
        ref={inputRef}
      />
      <span
        style={{ fontSize: '48px', cursor: 'pointer' }}
        onClick={() => inputRef.current.click()}
      >
        +
      </span> */}

      <UserName>
      {lastName&&`${lastName}${" "}`}
        {firstName&&`${firstName.slice(0, 1)}${"."}`}
        {fatherName&&fatherName.slice(0, 1)}
      </UserName>
    </>
  );
};
