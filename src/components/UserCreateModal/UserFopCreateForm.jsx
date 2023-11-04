import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { InputStyle } from './UserCreateModal.styled';
import { NavLink } from 'react-router-dom';
import {UserFopSchema} from "./UserFopSchema"
import { yupResolver } from '@hookform/resolvers/yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import uk from 'date-fns/locale/uk';
registerLocale('uk', uk);
setDefaultLocale('uk');

import {RegisterBlock, RegisterField, RegisterNameBlock} from "./UserCreateModal.styled"

const UserFopCreateModal = () => {
    const [dayOfBirthday, setDayOfBirthday] = useState(null);
    const { control, register, handleSubmit,  setError, clearErrors,  formState: { errors, isValid, dirtyFields }  } = useForm({
        mode: 'onChange',
        // defaultValues: { name: '', email: '', password: '' },
        resolver: yupResolver(UserFopSchema),
      });

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
  


return(
<form onSubmit={handleSubmit(onFormSubmit)}>
< RegisterBlock>
< RegisterNameBlock>
< RegisterField> 
  <label>Прізвище</label>
  <input
            type="text"
            placeholder="Прізвище"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register('lastName')}
          />
  <p>{errors.lastName && errors.lastName.message}</p>
</RegisterField>

<RegisterField>
  <label>Ім'я</label>
  <input
            type="text"
            placeholder="Ім'я"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register('firstName')}
          />
   <p>{errors.firstName && errors.firstName.message}</p>
</RegisterField>

<RegisterField>
  <label>По-батькові</label>
  <input
            type="text"
            placeholder="По-батькові"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register('fatherName')}
          />
  <p>{errors.fatherName && errors.fatherName.message}</p>
</RegisterField>
</RegisterNameBlock>

<RegisterField>
  <label>№ договору</label>
  <input
            type="text"
            placeholder="№ договору"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register('contractNumber')}
          />
            <p>{errors.contractNumber && errors.contractNumber.message}</p>
 </RegisterField>
<RegisterField>
<label>Код ЄДРПОУ (ІНН)*</label>
<input
            type="text"
            placeholder="Код ЄДРПОУ (ІНН)"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register('taxCode')}
          />
           <p>{errors.taxCode && errors.taxCode.message}</p>
 </RegisterField>
<RegisterField>
  <label>Дата народження</label>
  <input
            type="text"
            placeholder="Дата народження"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register('dayOfBirthday')}
          />
           <p>{errors.dayOfBirthday && errors.dayOfBirthday.message}</p>
  {/* <DatePicker
  selected={dayOfBirthday}
  onChange={(date) => setDayOfBirthday(date)}
  dateFormat="dd.MM.yyyy"
  placeholderText="Выберите дату"
/> */}
</RegisterField>
 

<RegisterField>
  <label>Номер телефону*</label>
  <input
            type="text"
            placeholder="Номер телефону"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register('telNumber')}
          />
          {console.log('errors', errors)}
  <p>{errors.telNumber && errors.telNumber.message}</p>
</RegisterField>
<RegisterField>
  <label>E-mail*</label>
  <input
            type="text"
            placeholder="E-mail"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register('email')}
          />
  <p>{errors.email && errors.email.message}</p>
</RegisterField>
<RegisterField>
  <label>Надання доступу до*</label>
  <input
            type="text"
            placeholder="Надання доступу до"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register('dateOfAccess')}
          />
  <p>{errors.dateOfAccess && errors.dateOfAccess.message}</p>
</RegisterField>
<RegisterField>
  <label>Остання оплата*  </label>
  <input
            type="text"
            placeholder="Остання оплата"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register('lastPay')}
          />
            <p>{errors.lastPay && errors.lastPay.message}</p>
</RegisterField>
</RegisterBlock>
< RegisterBlock>
<RegisterField>
  <label>Контактна особа* </label>
  <input
            type="text"
            placeholder="Контактна особа"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register('contactFace')}
          />
 <p>{errors.contactFace && errors.contactFace.message}</p>
</RegisterField>
<RegisterField>
  <label>Ідентифікаційний номер* </label>
  <input
            type="text"
            placeholder="Ідентифікаційний номер"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register('taxCodeContactFace')}
          />
           <p>{errors.taxCodeContactFace && errors.taxCodeContactFace.message}</p>
</RegisterField>
<RegisterField>
  <label>Номер телефону* </label>
  <input
            type="text"
            placeholder="Номер телефону"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register('telNumberContactFace')}
          />
           <p>{errors.telNumberContactFace && errors.telNumberContactFace.message}</p>
 
</RegisterField>
<RegisterField>
  <label>E-mail </label>
  <input
            type="text"
            placeholder="E-mail"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register('emailContactFace')}
          />
           <p>{errors.emailContactFace && errors.emailContactFace.message}</p>

</RegisterField>
<RegisterField>
  <label>Примітка </label>
  <textarea
            type="text"
            placeholder="Примітка"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register('comment')}
          />
           <p>{errors.comment && errors.comment.message}</p>

</RegisterField>
</RegisterBlock>

<button  type="submit"
          disabled={!isValid}>Отправить</button>
</form>
)}
  export default UserFopCreateModal;