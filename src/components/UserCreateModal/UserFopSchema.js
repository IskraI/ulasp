import * as yup from "yup";
export const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const loginAdminRegexp = /^[a-z]+$/;
export const nameRegexp = /^([а-яА-ЯїЇіІєЄ'ʼ-])+$/;
export const onlyNumberRegexp = /^[0-9]+$/;
export const regularDateRegexp = /\d{2}\.\d{2}\.\d{4}/;
export const phoneNumberUaRegexp = /^\+?3?8?(0\d{2}\d{3}\d{2}\d{2})$/;
export const passportUaRegexp = /^([А-ЯЇІЄ]{2}\d{6})$/;

export const UserFopSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Must be filled!")
    .matches(nameRegexp, "This is an ERROR name"),
  lastName: yup
    .string()
    .required("Must be filled!")
    .matches(nameRegexp, "This is an ERROR name"),
  fatherName: yup.string().matches(nameRegexp, "This is an ERROR name"),

  contractNumber: yup
    .string()
    .min(6, "Must be between 6 and 16 characters!")
    .max(16, "Must be between 6 and 16 characters!")
    .required("Must be filled!"),
  taxCode: yup
    .string()
    .min(10, "Must be between 6 and 16 characters!")
    .max(10, "Must be between 6 and 16 characters!")
    .required("Must be filled!")
    .matches(onlyNumberRegexp, "This is an ERROR taxCode"),
    dayOfBirthday: yup
    .string()
    .min(10, "Must be between 6 and 16 characters!")
    .max(10, "Must be between 6 and 16 characters!")
    .required("Must be filled!")
    .matches(regularDateRegexp, "This is an ERROR taxCode"),
    
});
