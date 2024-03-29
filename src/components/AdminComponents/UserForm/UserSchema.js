import * as yup from "yup";
export const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const loginAdminRegexp = /^[a-z]+$/;
export const nameRegexp = /^([а-яА-ЯїЇіІєЄ'ʼ-])+$/;
export const onlyNumberRegexp = /^[0-9]+$/;
export const regularDateRegexp = /\d{2}\.\d{2}\.\d{4}/;
export const phoneNumberUaRegexp = /^\+?3?8?(0\d{2}\d{3}\d{2}\d{2})$/;
export const passportUaRegexp = /^([А-ЯЇІЄ]{2}\d{6})$/;
export const nameCompanyRegexp = /^([а-яА-ЯїЇіІєЄ'ʼ]+)$/;
const nameInstitutionRegexp = /^(?=\S*?[а-яА-ЯїЇіІєЄ'ʼ-])\S{2,}(?:\s+\S{2,})*$/;
const passwordRegex = /^(?=.*[a-z])(?=.*\d).{6,}$/;
// /^(?:[^\s]{3,}[а-яА-ЯїЇіІєЄ'ʼ-]+(?:\s+[^\s]{3,}[а-яА-ЯїЇіІєЄ'ʼ-]+)*)$/;
// /^(?:[^\s]+[а-яА-ЯїЇіІєЄ'ʼ-]+(?:\s+[^\s]+[а-яА-ЯїЇіІєЄ'ʼ-]+)*)$/;

export const UserFopSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(nameRegexp, "Ім'я українською"),
  lastName: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(nameRegexp, "Прізвище українською"),
  fatherName: yup
    .string()
    .nullable()
    .test("is-empty-or-valid", "По-батькові українською", (value) => {
      if (!value) return true; // Вернуть true если значение пустое или null
      return nameRegexp.test(value); // проверка имени
    }),

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
  // dayOfBirthday: yup
  //   .string()
  //   // .required("Must be filled!")
  //   .matches(regularDateRegexp, "У форматі дд.мм.рррр"),

  institution: yup
    .string()
    .nullable()
    .test("is-empty-or-valid", "По-батькові українською", (value) => {
      if (!value) return true; // Вернуть true если значение пустое или null
      return nameInstitutionRegexp.test(value); // проверка имени
    }),

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

  lastPay: yup
    .string()
    .nullable()
    .test("is-empty-or-valid", "У форматі дд.мм.рррр", (value) => {
      if (!value) return true; // Вернуть true если значение пустое или null
      return regularDateRegexp.test(value); // проверка даты
    }),

  contactFace: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(nameInstitutionRegexp, "Ім'я українською!"),
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
    .matches(nameInstitutionRegexp, "Назва компанії українською мовою"),

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
  institution: yup
    .string()
    .nullable()
    .test("is-empty-or-valid", "По-батькові українською", (value) => {
      if (!value) return true; // Вернуть true если значение пустое или null
      return nameInstitutionRegexp.test(value); // проверка имени
    }),

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

  contactFace: yup
    .string()

    .required("Обов'язкове поле!")
    .matches(nameInstitutionRegexp, "Ім'я українською!"),

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

  fatherName: yup
    .string()
    .nullable()
    .test("is-empty-or-valid", "По-батькові українською або пусто", (value) => {
      if (!value) return true; // Вернуть true если значение пустое или null
      return nameRegexp.test(value); // проверка имени
    }),

  taxCode: yup
    .string()
    .min(10, "Повинно бути 10 цифр!")
    .max(10, "Повинно бути 10 цифр!")
    .required("Обов'язкове поле!")
    .matches(onlyNumberRegexp, "Повинно бути 10 цифр!"),
  institution: yup
    .string()
    .nullable()
    // .matches(nameCompanyRegexp, "Назва закладу українською мовою")
    .test("is-empty-or-valid", "Назва закладу українською мовою", (value) => {
      if (!value) return true; // Вернуть true если значение пустое или null
      return nameInstitutionRegexp.test(value); // проверка даты
    }),
  // dayOfBirthday: yup
  //   .string()
  //   .required("Обов'язкове поле!")
  //   .matches(regularDateRegexp, "У форматі дд.мм.рррр"),
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
    .matches(loginAdminRegexp, "Логін латинськими літерами")
    .min(5, "Повинно бути від 5 символів!"),

  password: yup
    .string()
    .required("Обов'язкове поле!")
    .min(6, "Повинно бути від 6 символів, одна з них цифра!"),
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
  fatherName: yup
    .string()
    .nullable()
    .test("is-empty-or-valid", "По-батькові українською або пусто", (value) => {
      if (!value) return true; // Вернуть true если значение пустое или null
      return nameRegexp.test(value); // проверка имени
    }),

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
  institution: yup
    .string()
    .nullable()
    // .matches(nameCompanyRegexp, "Назва закладу українською мовою")
    .test("is-empty-or-valid", "Назва закладу українською мовою", (value) => {
      if (!value) return true; // Вернуть true если значение пустое или null
      return nameInstitutionRegexp.test(value); // проверка даты
    }),

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

  lastPay: yup
    .string()
    .nullable()
    .test("is-empty-or-valid", "У форматі дд.мм.рррр", (value) => {
      if (!value) return true; // Вернуть true если значение пустое или null
      return regularDateRegexp.test(value); // проверка даты
    }),

  contactFace: yup
    .string()
    .min(3, "Мінімум 3 символи!")
    .matches(nameInstitutionRegexp, "Ім'я українською!")
    .required("Обов'язкове поле!"),

  contactFaceTaxCode: yup
    .string()
    .min(10, "Повинно бути 10 цифр!")
    .max(10, "Повинно бути 10 цифр!")
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
    .matches(nameInstitutionRegexp, "Назва компанії українською мовою"),

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
  institution: yup
    .string()
    .nullable()
    // .matches(nameCompanyRegexp, "Назва закладу українською мовою")
    .test("is-empty-or-valid", "Назва закладу українською мовою", (value) => {
      if (!value) return true; // Вернуть true если значение пустое или null
      return nameInstitutionRegexp.test(value); // проверка даты
    }),

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

  contactFace: yup
    .string()
    .min(3, "Мінімум 3 символи!")
    .matches(nameInstitutionRegexp, "Ім'я українською!")
    .required("Обов'язкове поле!"),
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

export const CardEditorSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(nameRegexp, "Ім'я українською"),
  lastName: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(nameRegexp, "Прізвище українською"),

  fatherName: yup
    .string()
    .nullable()
    .test("is-empty-or-valid", "По-батькові українською або пусто", (value) => {
      if (!value) return true; // Вернуть true если значение пустое или null
      return nameRegexp.test(value); // проверка имени
    }),

  taxCode: yup
    .string()
    .min(10, "Повинно бути 10 цифр!")
    .max(10, "Повинно бути 10 цифр!")
    .required("Обов'язкове поле!")
    .matches(onlyNumberRegexp, "Повинно бути 10 цифр!"),
  institution: yup
    .string()
    .nullable()
    // .matches(nameCompanyRegexp, "Назва закладу українською мовою")
    .test("is-empty-or-valid", "Назва закладу українською мовою", (value) => {
      if (!value) return true; // Вернуть true если значение пустое или null
      return nameInstitutionRegexp.test(value); // проверка даты
    }),

  telNumber: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(phoneNumberUaRegexp, "У форматі 0503332211 або +380503332211"),
  email: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(emailRegexp, "Невірний формат email"),
  comment: yup.string(),
});

export const loginPasswordEditorSchema = yup.object().shape({
  login: yup
    .string()
    .required("Обов'язкове поле!")
    .matches(loginAdminRegexp, "Логін латинськими літерами")
    .min(3, "Повинно бути від 3 символів!"),

  password: yup
    .string()
    .test(
      "is-empty-or-valid",
      "Повинно бути від 6 символів, одна з них цифра!",
      (value) => {
        if (!value) return true; // Вернуть true если значение пустое или null
        return passwordRegex.test(value); // проверка даты
      }
    ),
});
