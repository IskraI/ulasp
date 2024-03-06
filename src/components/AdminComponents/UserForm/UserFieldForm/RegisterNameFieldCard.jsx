import {
  RegisterNameField,
  RegisterNameBlock,
  RegisterNameLabel,
  RegisterNameInput,
  Tooltip,
} from "../UserCreateForm.styled";
import { ButtonSwitch } from "../../ButtonSwitch/ButtonSwitch";
import { Button } from "../../../Button/Button";
import { Controller } from "react-hook-form";
import {
  IconsWrapperUserEdit,
  IconsButtonUserEdit,
  IconsSvgUserEdit,
  IconsButtonUserSave,
} from "../UserCreateForm.styled";

import symbol from "../../../../assets/symbol.svg";
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
}) => {
  return (
    <RegisterNameBlock>
      {!isEditing ? (
        <IconsWrapperUserEdit>
          <IconsButtonUserEdit
            type="button"
            onClick={() => handleEditActivation()}
            // onClick={editGenre}
            // disabled={isEditing}
          >
            <IconsSvgUserEdit width="24" height="24">
              <use href={`${symbol}#icon-pen`}></use>
            </IconsSvgUserEdit>
          </IconsButtonUserEdit>
        </IconsWrapperUserEdit>
      ) : (
        <IconsWrapperUserEdit>
          <IconsButtonUserSave
            type="submit"
            // onClick={() => console.log("object :>> ")}
          >
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
                  <RegisterNameInput
                    type="text"
                    placeholder="Назва компанії"
                    readOnly={readOnly}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                )}
              />
            </RegisterNameField>
          )}

          <ButtonSwitch
            // form={true}
            idUser={user._id}
            type="button"
            isTrue={typeOfAccess}
            onClick={() => handleTypeOfAccess()}
          />
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
            isTrue={typeOfAccess}
            onClick={() => console.log("edite card")}
          />
        </>
      )}
    </RegisterNameBlock>
  );
};

export default RegisterNameFieldCard;
