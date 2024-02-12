import * as yup from "yup";
export const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const loginAdminRegexp = /^[a-z]+$/;
export const nameRegexp = /^([а-яА-ЯїЇіІєЄ'ʼ-])+$/;
export const onlyNumberRegexp = /^[0-9]+$/;
export const regularDateRegexp = /\d{2}\.\d{2}\.\d{4}/;
export const phoneNumberUaRegexp = /^\+?3?8?(0\d{2}\d{3}\d{2}\d{2})$/;
export const passportUaRegexp = /^([А-ЯЇІЄ]{2}\d{6})$/;
export const nameCompanyRegexp = /^([а-яА-ЯїЇіІєЄ'ʼ-])/;

export const UserFopSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(nameRegexp, "Ім'я українською"),
  lastName: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(nameRegexp, "Прізвище українською"),
  fatherName: yup.string().matches(nameRegexp, "По-батькові українською"),

  contractNumber: yup
    .string()
    .min(6, "Повинно бути від 6 до 16 цифр!")
    .max(16, "Повинно бути від 6 до 16 цифр!")
    .matches(onlyNumberRegexp, "Повинно бути від 6 до 16 цифр!")
    .required("Обов'язкове поле!"),
  taxCode: yup
    .string()
    .min(10, "Повинно бути 10 цифр!")
    .max(10, "Повинно бути 10 цифр!")
    .required("Обов'язкове поле!")
    .matches(onlyNumberRegexp, "Повинно бути 10 цифр!"),
  dayOfBirthday: yup
    .string()
    // .required("Must be filled!")
    .matches(regularDateRegexp, "У форматі дд.мм.рррр"),
  telNumber: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(phoneNumberUaRegexp, "У форматі 0503332211 або +380503332211"),
  email: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(emailRegexp, "Невірний формат email"),
  dateOfAccess: yup
    .string()
    .nullable()
    .test("is-empty-or-valid", "У форматі дд.мм.рррр", (value) => {
      if (!value) return true; // Вернуть true если значение пустое или null
      return regularDateRegexp.test(value); // проверка даты
    }),
  // .required("Обов'язкове поле!")
  // .matches(regularDateRegexp, "TУ форматі дд.мм.рррр"),
  lastPay: yup
    .string()
    .nullable()
    .test("is-empty-or-valid", "У форматі дд.мм.рррр", (value) => {
      if (!value) return true; // Вернуть true если значение пустое или null
      return regularDateRegexp.test(value); // проверка даты
    }),
  // .required("Обов'язкове поле!")
  // .matches(regularDateRegexp, "У форматі дд.мм.рррр"),

  contactFace: yup.string().required("Обов'язкове поле!"),

  contactFaceTaxCode: yup
    .string()
    .min(10, "Повинно бути 10 цифр!")
    .max(10, "Повинно бути 10 цифр!")
    .required("Обов'язкове поле!")
    .matches(onlyNumberRegexp, "Повинно бути 10 цифр!"),

  contactFaceTelNumber: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(phoneNumberUaRegexp, "У форматі 0503332211 або +380503332211"),

  contactFaceEmail: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(emailRegexp, "Невірний формат email"),
  comment: yup.string(),
});

export const UserCompanySchema = yup.object().shape({
  name: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(nameCompanyRegexp, "Назва компанії українською мовою"),

  contractNumber: yup
    .string()
    .min(6, "Повинно бути від 6 до 16 цифр!")
    .max(16, "Повинно бути від 6 до 16 цифр!")
    .matches(onlyNumberRegexp, "Повинно бути від 6 до 16 цифр!")
    .required("Обов'язкове поле!"),
  taxCode: yup
    .string()
    .min(8, "Повинно від 8 до 10 цифр!")
    .max(10, "Повинно від 8 до 10 цифр!")
    .required("Обов'язкове поле!")
    .matches(onlyNumberRegexp, "Помилка"),

  telNumber: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(phoneNumberUaRegexp, "У форматі 0503332211 або +380503332211"),
  email: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(emailRegexp, "Невірний формат email"),
  dateOfAccess: yup
    .string()
    .test("is-empty-or-valid", "У форматі дд.мм.рррр", (value) => {
      if (!value) return true; // Вернуть true если значение пустое или null
      return regularDateRegexp.test(value); // проверка даты
    }),
  lastPay: yup
    .string()
    .test("is-empty-or-valid", "У форматі дд.мм.рррр", (value) => {
      if (!value) return true; // Вернуть true если значение пустое или null
      return regularDateRegexp.test(value); // проверка даты
    }),

  contactFace: yup.string().required("Обов'язкове поле!"),

  contactFaceTaxCode: yup
    .string()
    .min(10, "Повинно бути 10 цифр!")
    .max(10, "Повинно бути 10 цифр!")
    .required("Обов'язкове поле!")
    .matches(onlyNumberRegexp, "10 цифр"),

  contactFaceTelNumber: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(phoneNumberUaRegexp, "У форматі 0503332211 або +380503332211"),

  contactFaceEmail: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(emailRegexp, "Невірний формат email"),
  comment: yup.string(),
});

export const MusicEditorSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(nameRegexp, "Ім'я українською"),
  lastName: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(nameRegexp, "Прізвище українською"),

  fatherName: yup.string().matches(nameRegexp, "По-батькові українською"),

  taxCode: yup
    .string()
    .min(10, "Повинно бути 10 цифр!")
    .max(10, "Повинно бути 10 цифр!")
    .required("Обов'язкове поле!")
    .matches(onlyNumberRegexp, "Повинно бути 10 цифр!"),
  dayOfBirthday: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(regularDateRegexp, "У форматі дд.мм.рррр"),
  telNumber: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(phoneNumberUaRegexp, "У форматі 0503332211 або +380503332211"),
  email: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(emailRegexp, "Невірний формат email"),
  comment: yup.string(),
  login: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(loginAdminRegexp, "латинські літери"),

  password: yup
    .string()
    .required("Обов'язкове поле!")
    .min(6, "Повинно бути від 6 знаків!"),
});

export const UserFopCardSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(nameRegexp, "Ім'я українською"),
  lastName: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(nameRegexp, "Прізвище українською"),
  fatherName: yup.string().matches(nameRegexp, "По-батькові українською"),

  contractNumber: yup
    .string()
    .min(6, "Повинно бути від 6 до 16 знаків!")
    .max(16, "Повинно бути від 6 до 16 знаків!")
    .matches(onlyNumberRegexp, "Повинно бути від 6 до 16 цифр!")
    .required("Обов'язкове поле!"),
  taxCode: yup
    .string()
    .min(10, "Повинно бути 10 цифр!")
    .max(10, "Повинно бути 10 цифр!")
    .required("Обов'язкове поле!")
    .matches(onlyNumberRegexp, "Повинно бути 10 цифр!"),
  dayOfBirthday: yup
    .string()
    // .required("Must be filled!")
    .matches(regularDateRegexp, "У форматі дд.мм.рррр"),
  telNumber: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(phoneNumberUaRegexp, "У форматі 0503332211 або +380503332211"),
  email: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(emailRegexp, "Невірний формат email"),
  dateOfAccess: yup
    .string()
    // .required("Обов'язкове поле!")
    .nullable()
    .test("is-empty-or-valid", "У форматі дд.мм.рррр", (value) => {
      if (!value) return true; // Вернуть true если значение пустое или null
      return regularDateRegexp.test(value); // проверка даты
    }),
  // .matches(regularDateRegexp, "TУ форматі дд.мм.рррр"),
  lastPay: yup
    .string()
    // .required("Обов'язкове поле!")
    .nullable()
    .test("is-empty-or-valid", "У форматі дд.мм.рррр", (value) => {
      if (!value) return true; // Вернуть true если значение пустое или null
      return regularDateRegexp.test(value); // проверка даты
    }),
  // .matches(regularDateRegexp, "У форматі дд.мм.рррр"),

  contactFace: yup.string().required("Обов'язкове поле!"),

  contactFaceTaxCode: yup
    .string()
    .min(10, "Повинно бути 10 цифр!")
    .max(10, "Повинно бути 10 цифр!")
    // .required("Обов'язкове поле!")
    .matches(onlyNumberRegexp, "Повинно бути 10 цифр!"),

  contactFaceTelNumber: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(phoneNumberUaRegexp, "У форматі 0503332211 або +380503332211"),

  contactFaceEmail: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(emailRegexp, "Невірний формат email"),
  comment: yup.string(),
});

export const UserCompanyCardSchema = yup.object().shape({
  name: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(nameCompanyRegexp, "Назва компанії українською мовою"),

  contractNumber: yup
    .string()
    .min(6, "Повинно бути від 6 до 16 цифр!")
    .max(16, "Повинно бути від 6 до 16 цифр!")
    .matches(onlyNumberRegexp, "Повинно бути від 6 до 16 цифр!")
    .required("Обов'язкове поле!"),
  taxCode: yup
    .string()
    .min(8, "Повинно від 8 до 10 цифр!")
    .max(10, "Повинно від 8 до 10 цифр!")
    .required("Обов'язкове поле!")
    .matches(onlyNumberRegexp, "Помилка"),

  telNumber: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(phoneNumberUaRegexp, "У форматі 0503332211 або +380503332211"),
  email: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(emailRegexp, "Невірний формат email"),
  dateOfAccess: yup
    .string()
    .test("is-empty-or-valid", "У форматі дд.мм.рррр", (value) => {
      if (!value) return true; // Вернуть true если значение пустое или null
      return regularDateRegexp.test(value); // проверка даты
    }),
  lastPay: yup
    .string()
    .test("is-empty-or-valid", "У форматі дд.мм.рррр", (value) => {
      if (!value) return true; // Вернуть true если значение пустое или null
      return regularDateRegexp.test(value); // проверка даты
    }),

  contactFace: yup.string().required("Обов'язкове поле!"),

  contactFaceTelNumber: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(phoneNumberUaRegexp, "У форматі 0503332211 або +380503332211"),

  contactFaceEmail: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(emailRegexp, "Невірний формат email"),
  comment: yup.string(),
});
