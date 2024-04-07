import {
  RegisterField,
  RegisterLabel,
  RegisterInput,
  Tooltip,
} from "../UserCreateForm.styled";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const CommonFieldForm = ({
  dirtyFields,
  control,
  isValid,
  errors,
  register,
  typeOfUser,
  editor,
}) => {
  return (
    <>
      {!editor && (
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
      )}

      {!editor && (
        <RegisterField>
          <RegisterLabel>Назва закладу</RegisterLabel>
          <RegisterInput
            type="text"
            placeholder="Назва закладу"
            aria-describedby="institutionTooltip"
            className={`${errors.institution ? "invalid" : ""}${
              !errors.institution && dirtyFields.institution ? "valid" : ""
            }`}
            {...register("institution")}
          />
          <Tooltip
            id="institutionTooltip"
            className={`${errors.institution ? "visible" : ""}`}
          >
            {errors.institution && errors.institution.message}
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
