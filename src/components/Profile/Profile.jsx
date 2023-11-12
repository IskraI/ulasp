import { UserName } from "./Profile.styled";
// import { useState, useEffect } from 'react';
import { getUserState } from "../../redux/userSelectors";
import { useSelector } from "react-redux";
import { useUpdateUserAvatarMutation } from "../../redux/authSlice/";
import { useRef, useState } from "react";
const BASE_URL = `http://localhost:8000`;


export const Profile = () => {
  const user = useSelector(getUserState);

  const { firstName, lastName, fatherName, avatarURL } = user;
  //для смены аватар
  const [selectedImage, setSelectedImage] = useState(null);
  const [dispatch, { isLoading }] = useUpdateUserAvatarMutation();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("avatarURL", selectedImage);

    dispatch(formData)
      .unwrap()
      .then(() => {
        console.log("Your profile has been updated", "success");
      })
      .catch((e) => console.log(e.data.message));
  };
// console.log('user', user)
  const handleChooseIcon = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  // const [selectedFile, setSelectedFile] = useState(null);
  //     const inputRef = useRef(null);// State to hold the selected file
  //   const updateUserAvatarMutation = useUpdateUserAvatarMutation();

  //    const handleAvatarUpload = (event) => {
  //         const file = event.target.files[0];
  //         if (file) {
  //             const formData = new FormData();
  //             formData.append('avatar', file);
  //             updateUserAvatarMutation.mutate(formData);
  //         }
  //     };
  const defaultAvatarSrc = "../avatar.jpg";

  const avatarSrc = avatarURL
    ? selectedImage
      ? URL.createObjectURL(selectedImage)
      : `${BASE_URL}/${avatarURL}`
    : defaultAvatarSrc;
  return (
    <>
      <form onSubmit={handleFormSubmit}>
       <img
          src={
            avatarSrc
          }
          alt="Avatar"
          style={{
            display: "block",
            width: "62px",
            height: "62px",
            borderRadius: "62px",
            // background: `url(${avatarURL}) lightgray 50% / cover no-repeat`,
            marginTop: "25px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        /> 
        <input
          name="name"
          type="file"
          accept="image/*"
          disabled={isLoading}
          onChange={handleChooseIcon}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "<LoadingSpinner size={30} />" : "Save changes"}
        </button>
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
        {firstName}
        <br />
        {lastName}
        <br />
        {fatherName}
      </UserName>
    </>
  );
};
