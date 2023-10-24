import { UserName } from "./Profile.styled"
// import { useState, useEffect } from 'react';
import { getUserState } from "../../redux/userSelectors";
import { useSelector } from "react-redux";

export const Profile = () => {
    const user = useSelector(getUserState);
    
 const { firstName, lastName, fatherName, avatarURL } = user;
 
   const handleAvatarUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Обработка загруженного файла, например, отправка на бэкенд
      // Пример: const formData = new FormData(); formData.append('avatar', file);
      // Пример: fetch('/api/upload-avatar', { method: 'POST', body: formData });
    }
    };
    
  return (
    <>
      {avatarURL ? (
        <img
          src={avatarURL}
          alt="Avatar"
                  style={{
              display:'block',
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
        <label
          htmlFor="fileInput"
          style={{
            width: '124px',
            height: '124px',
            borderRadius: '62px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '53px',
          }}
        >
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleAvatarUpload}
            style={{ display: 'none' }}
          />
          <span style={{ fontSize: '48px' }}>+</span>
        </label>
      )}
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