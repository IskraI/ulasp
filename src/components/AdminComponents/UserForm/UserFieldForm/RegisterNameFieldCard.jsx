import {
  RegisterNameField,
  RegisterNameBlock,
  RegisterNameLabel,
  RegisterNameInput,
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
  handleCloseEdit
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
            // onClick={() => handleEditActivation()}
            // disabled={isEmptyGenreUpdateData(genreTitle, title)}
          >
            <IconsSvgUserEdit width="24" height="24">
              <use href={`${symbol}#icon-check-in`}></use>
            </IconsSvgUserEdit>
          </IconsButtonUserSave>
          <IconsButtonUserEdit type="button" onClick={()=>handleCloseEdit()} >
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
                    <RegisterNameInput
                      type="text"
                      placeholder="Прізвище"
                      readOnly={readOnly}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
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
                    <RegisterNameInput
                      type="text"
                      placeholder="Ім'я"
                      readOnly={readOnly}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
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
                    <RegisterNameInput
                      type="text"
                      placeholder="По-батькові"
                      readOnly={readOnly}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
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
            type="button"
            isTrue={typeOfAccess}
            onClick={() => console.log("edite card")}
          />
        </>
      )}
    </RegisterNameBlock>
  );
};

export default RegisterNameFieldCard;
