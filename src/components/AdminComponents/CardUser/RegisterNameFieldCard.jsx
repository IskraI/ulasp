import {
  RegisterNameField,
  RegisterNameBlock,
  RegisterNameLabel,
  RegisterNameInput,
  Tooltip,
} from "../UserForm/UserCreateForm.styled";
import { ButtonSwitch } from "../ButtonSwitch/ButtonSwitch";
import { Button } from "../../Button/Button";
import { Controller } from "react-hook-form";
import {
  IconsWrapperUserEdit,
  IconsButtonUserEdit,
  IconsSvgUserEdit,
  IconsButtonUserSave,
} from "../UserForm/UserCreateForm.styled";

import symbol from "../../../assets/symbol.svg";

const RegisterNameFieldCard = ({
  user,
  activeSectionCard,
  register,
  errors,
  typeOfUser,
  typeOfAccess,
  handleTypeOfAccess,
  isValid,
  readOnly,
  isEditing,
  control,
  handleEditActivation,
  handleCloseEdit,
  editor,
}) => {
  return (
    <RegisterNameBlock>
      {!isEditing ? (
        <IconsWrapperUserEdit>
          <IconsButtonUserEdit
            type="button"
            onClick={() => handleEditActivation()}
          >
            <IconsSvgUserEdit width="24" height="24">
              <use href={`${symbol}#icon-pen`}></use>
            </IconsSvgUserEdit>
          </IconsButtonUserEdit>
        </IconsWrapperUserEdit>
      ) : (
        <IconsWrapperUserEdit marginTop={"8px"}>
          <IconsButtonUserSave type="submit">
            <IconsSvgUserEdit width="24" height="24">
              <use href={`${symbol}#icon-check-in`}></use>
            </IconsSvgUserEdit>
          </IconsButtonUserSave>
          <IconsButtonUserEdit type="button" onClick={() => handleCloseEdit()}>
            <IconsSvgUserEdit width="24" height="24">
              <use href={`${symbol}#icon-close`}></use>
            </IconsSvgUserEdit>
          </IconsButtonUserEdit>
        </IconsWrapperUserEdit>
      )}

      {!readOnly ? (
        <>
          {typeOfUser === "fop" || activeSectionCard === "MusicEditor" ? (
            <>
              <RegisterNameField>
                <RegisterNameLabel>Прізвище</RegisterNameLabel>
                <Controller
                  name="lastName"
                  control={control}
                  defaultValue={user.lastName}
                  render={({ field }) => (
                    <>
                      <RegisterNameInput
                        type="text"
                        placeholder="Прізвище"
                        readOnly={readOnly}
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                        className={
                          isEditing
                            ? `${errors.lastName ? "invalid" : "valid"}`
                            : ""
                        }
                      />
                      {errors && errors.lastName && (
                        <Tooltip
                          className={`${errors.lastName ? "visible" : ""}`}
                        >
                          {errors.lastName.message}
                        </Tooltip>
                      )}
                    </>
                  )}
                />
              </RegisterNameField>

              <RegisterNameField>
                <RegisterNameLabel>Ім'я</RegisterNameLabel>
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue={user.firstName}
                  render={({ field }) => (
                    <>
                      <RegisterNameInput
                        type="text"
                        placeholder="Ім'я"
                        readOnly={readOnly}
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                        className={
                          isEditing
                            ? `${errors.firstName ? "invalid" : "valid"}`
                            : ""
                        }
                      />
                      {errors && errors.firstName && (
                        <Tooltip
                          className={`${errors.firstName ? "visible" : ""}`}
                        >
                          {errors.firstName.message}
                        </Tooltip>
                      )}
                    </>
                  )}
                />
              </RegisterNameField>

              <RegisterNameField>
                <RegisterNameLabel>По-батькові</RegisterNameLabel>
                <Controller
                  name="fatherName"
                  control={control}
                  defaultValue={user.fatherName}
                  render={({ field }) => (
                    <>
                      <RegisterNameInput
                        type="text"
                        placeholder="По-батькові"
                        readOnly={readOnly}
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                        className={
                          isEditing
                            ? `${errors.fatherName ? "invalid" : "valid"}`
                            : ""
                        }
                      />
                      {errors && errors.fatherName && (
                        <Tooltip
                          className={`${errors.fatherName ? "visible" : ""}`}
                        >
                          {errors.fatherName.message}
                        </Tooltip>
                      )}
                    </>
                  )}
                />
              </RegisterNameField>
            </>
          ) : (
            <RegisterNameField>
              <Controller
                name="name"
                control={control}
                defaultValue={user.name}
                render={({ field }) => (
                  <>
                    <RegisterNameInput
                      type="text"
                      placeholder="Назва компанії"
                      readOnly={readOnly}
                      value={field.value}
                      width={"200px"}
                      onChange={(e) => field.onChange(e.target.value)}
                      className={
                        isEditing ? `${errors.name ? "invalid" : "valid"}` : ""
                      }
                    />
                    {errors && errors.name && (
                      <Tooltip className={`${errors.name ? "visible" : ""}`}>
                        {errors.name.message}
                      </Tooltip>
                    )}
                  </>
                )}
              />
            </RegisterNameField>
          )}
          <IconsWrapperUserEdit marginTop={"8px"}>
            <ButtonSwitch
              marginTop={"8px"}
              // form={true}
              idUser={user._id}
              type="button"
              isTrue={typeOfAccess}
              // handleTypeOfAccess={handleTypeOfAccess}
              onClick={() => handleTypeOfAccess()}
            />
          </IconsWrapperUserEdit>
        </>
      ) : (
        <>
          {typeOfUser === "fop" || activeSectionCard === "MusicEditor" ? (
            <>
              <RegisterNameField>
                {` ${user.firstName} ${user.lastName}`}
              </RegisterNameField>
            </>
          ) : (
            <RegisterNameField>{` ${user.name} `}</RegisterNameField>
          )}
          <ButtonSwitch
            // form={true}
            type="button"
            idUser={user._id}
            editor={user.editorRole || user.adminRole}
            isTrue={typeOfAccess}
            onClick={() => handleTypeOfAccess()}
          />
        </>
      )}
    </RegisterNameBlock>
  );
};

export default RegisterNameFieldCard;
