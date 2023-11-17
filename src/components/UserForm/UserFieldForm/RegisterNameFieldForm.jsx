import {
  RegisterNameField,
  RegisterNameBlock,
  RegisterNameLabel,
  RegisterNameInput,
  ButtonSwitch,
  Tooltip,
} from "../UserCreateForm.styled";
import { Button } from "../../Button/Button";

const RegisterNameFieldForm = ({
  register,
  errors,
  typeOfUser,
  typeOfStatus,
  handleTypeOfStatus,
  isValid,
  activeSection,
  dirtyFields,
}) => {

  return (
    <RegisterNameBlock>
      {typeOfUser === "fop" || activeSection === "MusicEditor" ? (
        <>
          <RegisterNameField>
            <RegisterNameLabel>Прізвище</RegisterNameLabel>
            <RegisterNameInput
              type="text"
              placeholder="Прізвище"
              aria-describedby="lastNameTooltip"
              // className={`${errors.lastName ? 'invalid' : ''}`}
              className={`${errors.lastName ? "invalid" : ""}${
                !errors.lastName && dirtyFields.lastName ? "valid" : ""
              }`}
              {...register("lastName")}
            />
            <Tooltip
              id="lastNameTooltip"
              className={`${errors.lastName ? "visible" : ""}`}
            >
           {errors.lastName && errors.lastName.message}
            </Tooltip>
          </RegisterNameField>

          <RegisterNameField>
            <RegisterNameLabel>Ім'я</RegisterNameLabel>
            <RegisterNameInput
              type="text"
              placeholder="Ім'я"
              aria-describedby="firstNameTooltip"
              className={`${errors.firstName ? "invalid" : ""}${
                !errors.firstName && dirtyFields.firstName ? "valid" : ""
              }`}
              {...register("firstName")}
            />
            <Tooltip
              id="firstNameTooltip"
              className={`${errors.firstName ? "visible" : ""}`}
            >
                      {errors.firstName && errors.firstName.message}
            </Tooltip>
          </RegisterNameField>

          <RegisterNameField>
            <RegisterNameLabel>По-батькові</RegisterNameLabel>
            <RegisterNameInput
              type="text"
              placeholder="По-батькові"
              aria-describedby="fatherNameTooltip"
              className={`${errors.fatherName ? "invalid" : ""}${
                !errors.fatherName && dirtyFields.fatherName ? "valid" : ""
              }`}
              {...register("fatherName")}
            />
            <Tooltip
              id="firstNameTooltip"
              className={`${errors.fatherName ? "visible" : ""}`}
            >
                    {errors.fatherName && errors.fatherName.message}
            </Tooltip>
          </RegisterNameField>
        </>
      ) : (
        <RegisterNameField>
          <RegisterNameLabel>Назва компанії</RegisterNameLabel>
          <RegisterNameInput
            type="text"
            placeholder="Назва компанії"
            aria-describedby="nameTooltip"
            className={`${errors.name ? "invalid" : ""}${
              !errors.name && dirtyFields.name ? "valid" : ""
            }`}
            {...register("name")}
          />  <Tooltip
          id="firstNameTooltip"
          className={`${errors.name ? "visible" : ""}`}
        >
                    {errors.name && errors.name.message}
        </Tooltip>
        </RegisterNameField>
      )}

      <ButtonSwitch
        type="button"
        isTrue={typeOfStatus}
        onClick={() => handleTypeOfStatus()}
      >
        {typeOfStatus ? (
          <>
            On
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <circle cx="6.5" cy="6.5" r="6" fill="#8CACD7" />
            </svg>
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <circle cx="6.5" cy="6.5" r="6" fill="#FFF3BF" />
            </svg>
            Off
          </>
        )}
      </ButtonSwitch>
    </RegisterNameBlock>
  );
};

export default RegisterNameFieldForm;
