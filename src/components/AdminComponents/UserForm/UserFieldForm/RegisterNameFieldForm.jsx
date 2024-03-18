import {
  RegisterNameField,
  RegisterNameBlock,
  RegisterNameLabel,
  RegisterNameInput,
  Tooltip,
} from "../UserCreateForm.styled";
import { Button } from "../../../Button/Button";
import { ButtonSwitch } from "../../ButtonSwitch/ButtonSwitch";
const RegisterNameFieldForm = ({
  form,
  register,
  errors,
  typeOfUser,
  typeOfStatus,
  handleTypeOfAccess,
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
            width={"100%"}
            placeholder="Назва компанії"
            aria-describedby="nameTooltip"
            className={`${errors.name ? "invalid" : ""}${
              !errors.name && dirtyFields.name ? "valid" : ""
            }`}
            {...register("name")}
          />{" "}
          <Tooltip
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
        handleTypeOfAccess={handleTypeOfAccess}
        form={true}
      />
    </RegisterNameBlock>
  );
};

export default RegisterNameFieldForm;
