import { useState, useRef } from "react";
import { useSelector } from "react-redux";

import { InputStyle } from "./UserCreateModal.styled";
import { NavLink } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import uk from "date-fns/locale/uk";
registerLocale("uk", uk);
setDefaultLocale("uk");

import {
  RegisterBlock,
  RegisterField,
  RegisterNameBlock,
  RegisterLabel,
  RegisterInput,
} from "./UserCreateModal.styled";

const UserFopCreateModal = ({ register, errors }) => {
  const [typeStatus, setTypeofAccept] = useState("false");
  // const [dayOfBirthday, setDayOfBirthday] = useState(null);
  const handleTypeofAccept = () => {
    setTypeofAccept(typeStatus === "true" ? "false" : "true");
    console.log("typeStatus", typeStatus);
  };

  return (
    <>
      <RegisterBlock>
        <RegisterNameBlock>
          <RegisterField>
            <label>Прізвище</label>
            <input
              type="text"
              placeholder="Прізвище"
              // className={`${scss.input} ${errors.name && scss.invalid}
              //  ${!errors.name && dirtyFields.name && scss.valid}`}
              {...register("lastName")}
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
              {...register("firstName")}
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
              {...register("fatherName")}
            />
            <p>{errors.fatherName && errors.fatherName.message}</p>
          </RegisterField>
          <button onClick={handleTypeofAccept}>
            {typeStatus === "true" ? "On" : "Off"}
          </button>
        </RegisterNameBlock>

        <RegisterField>
          <RegisterLabel>№ договору</RegisterLabel>
          <RegisterInput
            type="text"
            placeholder="№ договору"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register("contractNumber")}
          />
          <p>{errors.contractNumber && errors.contractNumber.message}</p>
        </RegisterField>
        <RegisterField>
          <RegisterLabel>Код ЄДРПОУ (ІНН)*</RegisterLabel>
          <RegisterInput
            type="text"
            placeholder="Код ЄДРПОУ (ІНН)"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register("taxCode")}
          />
          <p>{errors.taxCode && errors.taxCode.message}</p>
        </RegisterField>
        <RegisterField>
          <RegisterLabel>Дата народження</RegisterLabel>
          <RegisterInput
            type="text"
            placeholder="Дата народження"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register("dayOfBirthday")}
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
          <RegisterLabel>Номер телефону*</RegisterLabel>
          <RegisterInput
            type="text"
            placeholder="Номер телефону"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register("telNumber")}
          />
          {console.log("errors", errors)}
          <p>{errors.telNumber && errors.telNumber.message}</p>
        </RegisterField>
        <RegisterField>
          <RegisterLabel>E-mail*</RegisterLabel>
          <RegisterInput
            type="text"
            placeholder="E-mail"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register("email")}
          />
          <p>{errors.email && errors.email.message}</p>
        </RegisterField>
        <RegisterField>
          <RegisterLabel>Надання доступу до*</RegisterLabel>
          <RegisterInput
            type="text"
            placeholder="Надання доступу до"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register("dateOfAccess")}
          />
          <p>{errors.dateOfAccess && errors.dateOfAccess.message}</p>
        </RegisterField>
        <RegisterField>
          <RegisterLabel>Остання оплата* </RegisterLabel>
          <RegisterInput
            type="text"
            placeholder="Остання оплата"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register("lastPay")}
          />
          <p>{errors.lastPay && errors.lastPay.message}</p>
        </RegisterField>
      </RegisterBlock>
      <RegisterBlock>
        <RegisterField>
          <RegisterLabel>Контактна особа* </RegisterLabel>
          <RegisterInput
            type="text"
            placeholder="Контактна особа"
            {...register("contactFace")}
          />
          <p>{errors.contactFace && errors.contactFace.message}</p>
        </RegisterField>
        <RegisterField>
          <RegisterLabel>Ідентифікаційний номер* </RegisterLabel>
          <RegisterInput
            type="text"
            placeholder="Ідентифікаційний номер"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register("taxCodeContactFace")}
          />
          <p>
            {errors.taxCodeContactFace && errors.taxCodeContactFace.message}
          </p>
        </RegisterField>
        <RegisterField>
          <RegisterLabel>Номер телефону* </RegisterLabel>
          <RegisterInput
            type="text"
            placeholder="Номер телефону"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register("telNumberContactFace")}
          />
          <p>
            {errors.telNumberContactFace && errors.telNumberContactFace.message}
          </p>
        </RegisterField>
        <RegisterField>
          <RegisterLabel>E-mail </RegisterLabel>
          <RegisterInput
            type="text"
            placeholder="E-mail"
            // className={`${scss.input} ${errors.name && scss.invalid}
            //  ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register("emailContactFace")}
          />
          <p>{errors.emailContactFace && errors.emailContactFace.message}</p>
        </RegisterField>
        <></>
      </RegisterBlock>
      <RegisterField>
        <label>Примітка </label>
        <textarea
          type="text"
          placeholder="Примітка"
          // className={`${scss.input} ${errors.name && scss.invalid}
          //  ${!errors.name && dirtyFields.name && scss.valid}`}
          {...register("comment")}
        />
        <p>{errors.comment && errors.comment.message}</p>
      </RegisterField>
    </>
  );
};
export default UserFopCreateModal;
