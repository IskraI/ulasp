import {
  RegisterField,
  RegisterLabel,
  RegisterInput,
  Tooltip,
} from "../UserCreateForm.styled";

const CommonFieldForm = ({
  dirtyFields,
  control,
  isValid,
  errors,
  register,
  typeOfUser,
}) => {
  return (
    <>
      <RegisterField>
        <RegisterLabel>Код ЄДРПОУ (ІНН)*</RegisterLabel>
        <RegisterInput
          type="text"
          placeholder="Код ЄДРПОУ (ІНН)"
          aria-describedby="taxCodeTooltip"
          className={`${errors.taxCode ? "invalid" : ""}${
            !errors.taxCode && dirtyFields.taxCode ? "valid" : ""
          }`}
          {...register("taxCode")}
        />
        <Tooltip
          id="taxCodeTooltip"
          className={`${errors.taxCode ? "visible" : ""}`}
        >
          {errors.taxCode && errors.taxCode.message}
        </Tooltip>
      </RegisterField>

      {typeOfUser === "fop" && (
        <RegisterField>
          <RegisterLabel>Дата народження</RegisterLabel>
          <RegisterInput
            type="text"
            placeholder="Дата народження"
            aria-describedby="dayOfBirthdayTooltip"
            className={`${errors.dayOfBirthday ? "invalid" : ""}${
              !errors.dayOfBirthday && dirtyFields.dayOfBirthday ? "valid" : ""
            }`}
            {...register("dayOfBirthday")}
          />
          <Tooltip
            id="dayOfBirthdayTooltip"
            className={`${errors.dayOfBirthday ? "visible" : ""}`}
          >
            {errors.dayOfBirthday && errors.dayOfBirthday.message}
          </Tooltip>
        </RegisterField>
      )}

      <RegisterField>
        <RegisterLabel>Номер телефону*</RegisterLabel>
        <RegisterInput
          type="text"
          placeholder="Номер телефону"
          aria-describedby="telNumberTooltip"
          className={`${errors.telNumber ? "invalid" : ""}${
            !errors.telNumber && dirtyFields.telNumber ? "valid" : ""
          }`}
          {...register("telNumber")}
        />
        <Tooltip
          id="telNumberTooltip"
          className={`${errors.telNumber ? "visible" : ""}`}
        >
          {errors.telNumber && errors.telNumber.message}
        </Tooltip>
      </RegisterField>

      <RegisterField>
        <RegisterLabel>E-mail*</RegisterLabel>
        <RegisterInput
          type="text"
          placeholder="E-mail"
          aria-describedby="emailTooltip"
          className={`${errors.email ? "invalid" : ""}${
            !errors.email && dirtyFields.email ? "valid" : ""
          }`}
          {...register("email")}
        />{" "}
        <Tooltip
          id="emailTooltip"
          className={`${errors.email ? "visible" : ""}`}
        >
          {errors.email && errors.email.message}
        </Tooltip>
      </RegisterField>
    </>
  );
};

export default CommonFieldForm;
