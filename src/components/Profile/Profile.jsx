import { UserName } from "./Profile.styled";
// import { useState, useEffect } from 'react';
import { getUserState } from "../../redux/userSelectors";
import { useSelector } from "react-redux";

const BASE_URL = `http://localhost:8000`;


export const Profile = () => {
  const user = useSelector(getUserState);

  const { firstName, lastName, fatherName, avatarURL } = user;
  const defaultAvatarSrc = "../avatar.jpg";
  const avatarSrc = avatarURL
      ?  `${BASE_URL}/${avatarURL}`
      : defaultAvatarSrc;
 
  return (
    <>
     
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
