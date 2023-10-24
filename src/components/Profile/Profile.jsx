import { UserName } from "./Profile.styled"
// import { useState, useEffect } from 'react';
import { getUserState } from "../../redux/userSelectors";
import { useSelector } from "react-redux";
import { useUpdateUserAvatarMutation } from '../../redux/authSlice/'; 
import { useRef, useState } from 'react';

export const Profile = () => {
    const user = useSelector(getUserState);
    
    const { firstName, lastName, fatherName, avatarURL } = user;
 
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
    
    console.log(avatarURL);

     return (
    <>
      {avatarURL ? (
        <img
          src={avatarURL}
          alt="Avatar"
          style={{
            display: 'block',
            width: '62px',
            height: '62px',
            borderRadius: '62px',
            background: `url(${avatarURL}) lightgray 50% / cover no-repeat`,
            marginTop: '25px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      ) : (
        <img
          src="../../assets/avatar.jpg"
          alt="Avatar"
          style={{
            display: 'block',
            width: '62px',
            height: '62px',
            borderRadius: '62px',
            background: 'url("../../assets/avatar.jpg") lightgray 50% / cover no-repeat',
            marginTop: '25px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      )}

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