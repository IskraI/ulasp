import * as Yup from "yup";
export const contractRegexp = /^[0-9]{6,10}$/;
export const identRegexp = /^[0-9]{8,10}$/;
// export const SignInSchema = Yup.object({
//   contract: Yup.string()
//   .test(
//     "is-empty-or-valid",
//     "Перевірте правильність введених даних!",
//     (value) => {
//       if (!value) return true; // Вернуть true если значение пустое или null
//       return contractRegexp.test(value);
//     }
//   ),
//   // .matches(/^[0-9]+$/, "Перевірте правильність введених даних!")
//   // .required("Поле обов'язкове для заповнення")
//   identification: Yup.string() .test(
//     "is-empty-or-valid",
//     "Перевірте правильність введених даних!",
//   (value) => {
//     if (!value) return true; // Вернуть true если значение пустое или null
//     return identRegexp.test(value);
//   }
//     // .matches(/^\d{8}$|^\d{10}$/, "Перевірте правильність введених даних!")
//     // .required("Поле обов'язкове для заповнення"),
// );
export const SignInSchema = Yup.object({
  contractNumber: Yup.string().test(
    "is-empty-or-valid",
    "Перевірте правильність введених даних!",
    (value) => {
      if (!value) return true; // Вернуть true если значение пустое или null
      return contractRegexp.test(value);
    }
  ),
  password: Yup.string().test(
    "is-empty-or-valid",
    "Перевірте правильність введених даних!",
    (value) => {
      // Проверка, что значение не пустое, не равно null и не равно пустой строке
      if (!value) return true;
      if (value === "") return false;
      return identRegexp.test(value);
    }
  ),
});

export const AdminAndEditorSchema = Yup.object({
  login: Yup.string()
    .required("Поле обов'язкове для заповнення")
    .matches(/^[a-zA-Z0-9]{3,10}$/, "Перевірте правильність введених даних!"),
  password: Yup.string()
    .required("Пароль обов'язковий для заповнення")
    // .min(6, 'Password is too short - should be 6 chars minimum.')
    // .max(16, 'Password is too long - should be 16 chars maximum.')
    .matches(
      /^(?=.*[a-zA-Zа-яА-Я])[a-zA-Zа-яА-Я0-9]{6,16}$/,
      "Пароль повинен містити від 6 до 16 символів і хоча б одну букву"
    ),
});
