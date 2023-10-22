import { UserName } from "./Profile.styled"
import { useState, useEffect } from 'react';

export const Profile = () => {
 const [admin, setAdmin] = useState({
    firstName: 'John',
    lastName: 'Doe',
    fatherName: 'Smith',
    avatarURL: null, // Изначально нет аватара
  });
 
    // Функция для загрузки существующего аватара с бэка
  const fetchAvatarFromBackend = () => {
        fetch('/api/get-avatar').then(response => response.json()).then(data => setAdmin({ ...admin, avatarURL: data.avatarURL }));
  };

  useEffect(() => {
    // При монтировании компонента загружаем аватар с бэка
    fetchAvatarFromBackend();
  }, []);

  const handleAvatarUpload = (event) => {
    const file = event.target.files[0]; // Получаем выбранный файл

    if (file) {
      // Обработка загруженного файла, например, отправка на бэкенд
      // Пример: const formData = new FormData(); formData.append('avatar', file);
      // Пример: fetch('/api/upload-avatar', { method: 'POST', body: formData });
    }
  };
  return (
      <>
          {admin.avatarURL ? (
        <img src={admin.avatarURL} alt="Avatar" style={{
    width: '124px', 
    height: '124px', 
    borderRadius: '62px',
    background: `url(${admin.avatarURL}) lightgray 50% / cover no-repeat`,
  }} />
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
              {`${admin.firstName} ${admin.lastName} ${admin.fatherName}`} 
          </UserName> 
    </>
  );
};