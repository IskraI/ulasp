import * as Yup from 'yup';

export const SignInSchema = Yup.object({
  сontract: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]{3}\d{6}[a-zA-Zа-яА-Я]$/, 'Перевірте правельність введенних данних!')
    .required("Поле обов'язкове для заповнення"),
  identification: Yup.string()  
        .matches(/^\d{10}$/, 'Перевірте правельність введенних данних!')
       .required("Поле обов'язкове для заповнення"),
});


export const AdminAndEditorSchema = Yup.object({
  login: Yup.string()
   .required("Поле обов'язкове для заповнення")
    .matches(/^[a-zA-Z0-9]{3,10}$/, 'Перевірте правельність введенних данних!'),
  password: Yup.string()  
        .required("Пароль обов'язковий для заповнення")
    .matches(/^(?=.*[a-zA-Z])[a-zA-Z0-9]{6}$/, 'Пароль повинен містити 6 символів, включно з хоча б однією літерою'),
});