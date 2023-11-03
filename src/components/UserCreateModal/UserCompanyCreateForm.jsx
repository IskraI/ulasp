import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { InputStyle } from './UserCreateModal.styled';
import { NavLink } from 'react-router-dom';
const UserCompanyCreateModal = () => {
    const { control, handleSubmit,  setError, clearErrors, formState  } = useForm();
    const { errors } = formState;
    const onFormSubmit = (data) => {
      console.log(data);
    };
    
      // const handleFormSubmit = e => {
      //   e.preventDefault();
      //   const formData = new FormData();
      //  console.log('formData', formData)
  
      // //   dispatch(formData)
      // //     .unwrap()
      // //     .then(() => {
         
           
      // //     })
      // //     .catch(e => console.log(e.data.message));
      // };
    
  
      const handleNameChange = (e) => {
        const value = e.target.value;
        if (!/^[а-яА-Я\s]+$/.test(value)) {
          setError('firstName', {
            type: 'manual',
            message: 'Имя должно содержать только кириллицу',
          });
        } else {
          clearErrors('firstName'); // Очищаем ошибку, если значение верное
        }
      };
   
  return(
  <form onSubmit={handleSubmit(onFormSubmit)}>
<div>
  <label>Назва :</label>
  <Controller
    name="firstName"
    control={control}
    render={({ field }) => (
      <InputStyle {...field} title="Введите ваше имя (только кириллица)" onChange={handleNameChange} />
    )}
  />
  <p>{errors.firstName && errors.firstName.message}</p>
</div>

<div>
  <label>ЄРДПОУ:</label>
  <Controller
    name="lastName"
    control={control}
    render={({ field }) => <input {...field} />}
  />
</div>

<div>
  <label>ИНН:</label>
  <Controller
    name="taxCode"
    control={control}
    render={({ field }) => <input {...field} />}
  />
</div>

<div>
  <label>Дата рождения:</label>
  <Controller
    name="dayOfBirthday"
    control={control}
    render={({ field }) => <input {...field} />}
  />
</div>

{/* Добавьте остальные поля формы аналогично */}

<button type="submit">Отправить</button>
</form>)};

  export default UserCompanyCreateModal;