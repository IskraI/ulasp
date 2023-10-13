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
    // .min(6, 'Password is too short - should be 6 chars minimum.')
    // .max(16, 'Password is too long - should be 16 chars maximum.')
    .matches(/^(?=.*[a-zA-Zа-яА-Я])[a-zA-Zа-яА-Я0-9]{6,16}$/, 'Пароль повинен містити від 6 до 16 символів і хоча б одну букву'),
});