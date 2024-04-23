//typeOfUser - fop , tov
//activeSection createuser, create editor, carduser, cardeditor
import { useState } from "react";
import DatePicker from "react-datepicker";
import { uk } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import React, { forwardRef } from "react";
import { format } from "date-fns";
import CustomInputDate from "./CustomInputDate";
import {
  RegisterField,
  RegisterLabel,
  RegisterInput,
  RegisterRigthBlock,
  Commentlabel,
  Fieldform,
  RegisterLeftBlock,
  RegisterCommentField,
  CommentTextarea,
  Tooltip,
  RegisterLoginForm,
  RegisterLoginInput,
  StyledDatePicker,
} from "../UserCreateForm.styled";
import ContactFaceField from "./ContactFaceField";
import RegisterNameFieldForm from "./RegisterNameFieldForm";
import CommonFieldForm from "./CommonFields";
import { Button } from "../../../Button/Button";
import "../../../../styles/datePicker.css";
import { Controller } from "react-hook-form";

const UserFieldForm = ({
  form,
  control,
  handleTypeOfAccess,
  activeSection,
  typeOfStatus,
  typeOfUser,
  isValid,
  errors,
  register,
  dirtyFields,
  setValue,
}) => {
  // console.log("errors", errors);
  // console.log("isValid", isValid);
  const [selectedDate, setSelectedDate] = useState(null);
  const today = new Date();
  function range(start, end, step = 1) {
    const result = [];
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
    return result;
  }
  const { ref: dateOfAccessRef } = register("dateOfAccess");

  console.log("selectedDate :>> ", selectedDate);
  console.log("errors.dateOfAccess :>> ", errors.dateOfAccess);

  return (
    <Fieldform>
      <RegisterLeftBlock>
        <RegisterNameFieldForm
          form={form}
          handleTypeOfAccess={handleTypeOfAccess}
          register={register}
          errors={errors}
          typeOfUser={typeOfUser}
          typeOfStatus={typeOfStatus}
          isValid={isValid}
          activeSection={activeSection}
          dirtyFields={dirtyFields}
        />

        {activeSection === "User" && (
          <>
            <RegisterField>
              <RegisterLabel>№ договору*</RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="№ договору"
                aria-describedby="contractNumberTooltip"
                className={`${errors.contractNumberDoc ? "invalid" : ""}${
                  !errors.contractNumberDoc && dirtyFields.contractNumberDoc
                    ? "valid"
                    : ""
                }`}
                {...register("contractNumberDoc")}
              />
              <Tooltip
                id="contractNumberTooltip"
                className={`${errors.contractNumberDoc ? "visible" : ""}`}
              >
                {errors.contractNumber && errors.contractNumber.message}
              </Tooltip>
            </RegisterField>
            <RegisterField>
              <RegisterLabel>№ договору (логін)*</RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="№ договору логін"
                aria-describedby="contractNumberLoginTooltip"
                className={`${errors.contractNumber ? "invalid" : ""}${
                  !errors.contractNumber && dirtyFields.contractNumber
                    ? "valid"
                    : ""
                }`}
                {...register("contractNumber")}
              />
              <Tooltip
                id="contractNumberTooltip"
                className={`${errors.contractNumber ? "visible" : ""}`}
              >
                {errors.contractNumber && errors.contractNumber.message}
              </Tooltip>
            </RegisterField>

            <CommonFieldForm
              typeOfUser={typeOfUser}
              register={register}
              control={control}
              isValid={isValid}
              errors={errors}
              readOnly="false"
              dirtyFields={dirtyFields}
            />

            {/* <RegisterField>
              <RegisterLabel>Дата договору</RegisterLabel>
              <DatePicker
                wrapperClassName="datePicker"
                todayButton="Сьогодні"
                selected={selectedDate} // Передайте значение даты
                dateFormat="dd.MM.yyyy" // Устанавливаем формат даты
                // minDate={subMonths(new Date(), 20)}
                // showMonthYearDropdown
                maxDate={today}
                locale={uk}
                onChange={(date) => {
                  // setValue("dateOfAccess", date); // Установите значение даты с помощью setValue из React Hook Form
                  setSelectedDate(date); // Обновите локальное состояние для отображения выбранной даты
                }}
                placeholderText="Оберіть дату"
                className={`${errors.dateOfAccess ? "invalid" : ""}${
                  !errors.dateOfAccess && dirtyFields.dateOfAccess
                    ? "valid"
                    : "date"
                }`} */}
            {/* {...register("dateOfAccess")} // Подключите к React Hook Form
              /> */}
            {/* <RegisterInput
                type="text"
                placeholder="Дата договору"
                aria-describedby="dateOfAccessTooltip"
                className={`${errors.dateOfAccess ? "invalid" : ""}${
                  !errors.dateOfAccess && dirtyFields.dateOfAccess
                    ? "valid"
                    : ""
                }`}
                {...register("dateOfAccess")}
              /> */}
            {/* <Tooltip
                id="dateOfAccessTooltip"
                className={`${errors.dateOfAccess ? "visible" : ""}`}
              >
                {errors.dateOfAccess && errors.dateOfAccess.message}
              </Tooltip> */}
            {/* </RegisterField> */}
            <RegisterField>
              <RegisterLabel>Дата договору</RegisterLabel>
              <Controller
                name="dateOfAccess"
                control={control}
                render={({ field }) => (
                  <>
                    <DatePicker
                      ref={dateOfAccessRef}
                      wrapperClassName="datePicker"
                      todayButton="Сьогодні"
                      selected={selectedDate} // Передайте значение даты
                      dateFormat="dd.MM.yyyy" // Устанавливаем формат даты
                      // minDate={subMonths(new Date(), 20)}
                      // showMonthYearDropdown
                      maxDate={today}
                      locale={uk}
                      onChange={(date) => {
                        if (date) {
                          // setValue("dateOfAccess", format(date, "dd.MM.yyyy"));
                          setValue("dateOfAccess", date);

                          setSelectedDate(date);
                        } else {
                          setValue("dateOfAccess", null);
                          setSelectedDate(null);
                        }
                      }}
                      placeholderText="Оберіть дату"
                      className={`date ${errors.dateOfAccess ? "invalid" : ""}${
                        !errors.dateOfAccess && dirtyFields.dateOfAccess
                          ? "valid"
                          : ""
                      }`}
                      isClearable
                    />
                    {errors && errors.dateOfAccess && (
                      <Tooltip
                        className={`${errors.dateOfAccess ? "visible" : ""}`}
                      >
                        {errors.dateOfAccess.message}
                      </Tooltip>
                    )}
                  </>
                )}
              />
            </RegisterField>

            {/* <RegisterField>
              <RegisterLabel>Остання оплата* </RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="Остання оплата"
                aria-describedby="lastPayTooltip"
                className={`${errors.lastPay ? "invalid" : ""}${
                  !errors.lastPay && dirtyFields.lastPay ? "valid" : ""
                }`}
                {...register("lastPay")}
              />
              <Tooltip
                id="lastPayTooltip"
                className={`${errors.lastPay ? "visible" : ""}`}
              >
                {errors.lastPay && errors.lastPay.message}
              </Tooltip>
            </RegisterField> */}

            <ContactFaceField
              control={control}
              register={register}
              errors={errors}
              margintop={"36px"}
              isValid={isValid}
              dirtyFields={dirtyFields}
            />
          </>
        )}

        {activeSection === "MusicEditor" && (
          <>
            <CommonFieldForm
              typeOfUser={"fop"}
              register={register}
              control={control}
              isValid={isValid}
              errors={errors}
              readOnly="false"
              dirtyFields={dirtyFields}
              editor={true}
            />
            <RegisterLoginForm>
              <RegisterField>
                <RegisterLoginInput
                  type="text"
                  placeholder="Логін"
                  aria-describedby="loginTooltip"
                  className={`${errors.login ? "invalid" : ""}${
                    !errors.login && dirtyFields.login ? "valid" : ""
                  }`}
                  {...register("login")}
                />
                <Tooltip
                  id="loginTooltip"
                  className={`${errors.login ? "visible" : ""}`}
                >
                  {errors.login && errors.login.message}
                </Tooltip>
              </RegisterField>
              <RegisterField>
                <RegisterLoginInput
                  type="text"
                  placeholder="Пароль"
                  aria-describedby="passwordTooltip"
                  className={`${errors.password ? "invalid" : ""}${
                    !errors.password && dirtyFields.password ? "valid" : ""
                  }`}
                  {...register("password")}
                />
                <Tooltip
                  id="passwordTooltip"
                  className={`${errors.password ? "visible" : ""}`}
                >
                  {errors.password && errors.password.message}
                </Tooltip>
              </RegisterField>
            </RegisterLoginForm>
          </>
        )}
      </RegisterLeftBlock>
      <RegisterRigthBlock>
        <RegisterCommentField>
          <Commentlabel>Примітка </Commentlabel>
          <CommentTextarea
            type="text"
            placeholder="Примітка"
            {...register("comment")}
          />
        </RegisterCommentField>
        <Button
          type="submit"
          padding="8px"
          text="Додати"
          disabled={
            !isValid
            // || (dirtyFields.dateOfAccess && errors.dateOfAccess)
          }
          showIcon={false}
        />
      </RegisterRigthBlock>
    </Fieldform>
  );
};

export default UserFieldForm;
