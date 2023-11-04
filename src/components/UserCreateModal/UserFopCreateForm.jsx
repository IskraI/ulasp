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
  <label>Прізвище</label>
  <input
            type="text"
            placeholder="Прізвище"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register('lastName')}
          />
  <p>{errors.firstName && errors.firstName.message}</p>
</div>

<div>
  <label>Ім'я</label>
  <input
            type="text"
            placeholder="Ім'я"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register('firstName')}
          />
  
</div>

<div>
  <label>По-батькові</label>
  <input
            type="text"
            placeholder="Ім'я"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register('fatherName')}
          />
 
</div>

<div>
  <label>№ договору</label>
  <input
            type="text"
            placeholder="Ім'я"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register('contractNumber')}
          />
 </div>
<div>
<label>Код ЄДРПОУ (ІНН)*</label>
<input
            type="text"
            placeholder="Ім'я"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register('taxCode')}
          />
 </div>
<div>
  <label>Дата народження</label>

  <DatePicker
  selected={dayOfBirthday}
  onChange={(date) => setDayOfBirthday(date)}
  dateFormat="dd.MM.yyyy"
  placeholderText="Выберите дату"
/>
</div>
  {/* <input
            type="text"
            placeholder="Ім'я"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register('dayOfBirthday')}
            as={<DateInput />}
          /> */}

{/* </div> */}
<div>
  <label>Номер телефону*</label>
  <Controller
    name="telNumber"
    control={control}
    render={({ field }) => <input {...field} />}
  />
</div>
<div>
  <label>E-mail*</label>
  <Controller
    name="email"
    control={control}
    render={({ field }) => <input {...field} />}
  />
</div>
<div>
  <label>Надання доступу до*</label>
  <Controller
    name="dateOfAccess"
    control={control}
    render={({ field }) => <input {...field} />}
  />
</div>
<div>
  <label>Остання оплата*  </label>
  <Controller
    name="lastPay"
    control={control}
    render={({ field }) => <input {...field} />}
  />
</div>
<div>
  <label>Контактна особа* </label>
  <Controller
    name="contactFace"
    control={control}
    render={({ field }) => <input {...field} />}
  />
</div>
<div>
  <label>Ідентифікаційний номер* </label>
  <Controller
    name="taxCodeContactFace"
    control={control}
    render={({ field }) => <input {...field} />}
  />
</div>
<div>
  <label>Номер телефону* </label>
  <Controller
    name="telNumberContactFace"
    control={control}
    render={({ field }) => <input {...field} />}
  />
</div>
<div>
  <label>E-mail </label>
  <Controller
    name="emailContactFace"
    control={control}
    render={({ field }) => <input {...field} />}
  />
</div>
<div>
  <label>Примітка </label>
  <Controller
    name="comment"
    control={control}
    render={({ field }) => <textarea {...field} />}
  />
</div>


{/* Добавьте остальные поля формы аналогично */}

<button  type="submit"
          disabled={!isValid}>Отправить</button>
</form>
)}
  export default UserFopCreateModal;