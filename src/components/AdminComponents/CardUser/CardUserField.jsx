//typeOfUser - fop , tov
//activeSection createuser, create editor, carduser, cardeditor
import { useState } from "react";
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
} from "../UserForm/UserCreateForm.styled";
import ContactFaceFieldCard from "../UserForm/UserFieldForm/ContactFaceFieldCard";
import RegisterNameFieldCard from "../UserForm/UserFieldForm/RegisterNameFieldCard";
import CommonFieldCard from "../UserForm/UserFieldForm/CommonFieldsCard";
import { Button } from "../../Button/Button";
import { useForm, Controller } from "react-hook-form";
const CardUserField = ({
  user,
  control,
  handleTypeOfAccess,
  activeSectionCard,
  typeOfAccess,
  typeOfUser,
  isValid,
  errors,
  register,
  isEditing,
  handleEditActivation,
  handleCloseEdit,
  playlistCount,
  dirtyFields,
}) => {
  console.log("isEditing", isEditing);

  console.log("activeSectionCard", activeSectionCard);
  return (
    <Fieldform>
      <RegisterLeftBlock>
        <RegisterNameFieldCard
          isEditing={isEditing}
          handleEditActivation={handleEditActivation}
          handleTypeOfAccess={handleTypeOfAccess}
          register={register}
          errors={errors}
          typeOfUser={typeOfUser}
          typeOfAccess={typeOfAccess}
          isValid={isValid}
          activeSectionCard={activeSectionCard}
          readOnly={!isEditing}
          user={user}
          control={control}
          handleCloseEdit={handleCloseEdit}
        />

        {activeSectionCard === "User" && (
          <>
            {/* <RegisterField>
              <RegisterLabel>№ договору</RegisterLabel>
              <RegisterInput
                type="text"
                defaultValue={user?.contractNumber}
                readOnly={!isEditing}
                placeholder="№ договору"
                aria-describedby="contractNumberTooltip"
                className={`${errors.contractNumber ? "invalid" : ""}${
                  isEditing ? (!errors.contractNumber ? "valid" : "") : ""
                }`}
                {...register("contractNumber")}
              />
              <Tooltip
                id="contractNumberTooltip"
                className={`${errors.contractNumber ? "visible" : ""}`}
              >
                {errors.contractNumber && errors.contractNumber.message}
              </Tooltip>
            </RegisterField> */}

            <RegisterField>
              <RegisterLabel>№ договору</RegisterLabel>

              <Controller
                name="contractNumber"
                control={control}
                defaultValue={user.contractNumber}
                render={({ field }) => (
                  <RegisterInput
                    type="text"
                    placeholder="№ договору"
                    readOnly={!isEditing}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                )}
              />
            </RegisterField>

            <CommonFieldCard
              typeOfUser={typeOfUser}
              register={register}
              control={control}
              isValid={isValid}
              errors={errors}
              readOnly={!isEditing}
              user={user}
            />

            <RegisterField>
              <RegisterLabel>Надання доступу до*</RegisterLabel>
              <Controller
                name="dateOfAccess"
                control={control}
                defaultValue={user.dateOfAccess}
                render={({ field }) => (
                  <RegisterInput
                    type="text"
                    placeholder="Надання доступу до"
                    readOnly={!isEditing}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                )}
              />
            </RegisterField>
            <RegisterField>
              <RegisterLabel>Остання оплата* </RegisterLabel>
              <Controller
                name="lastPay"
                control={control}
                defaultValue={user.lastPay}
                render={({ field }) => (
                  <RegisterInput
                    type="text"
                    placeholder="Остання оплата"
                    readOnly={!isEditing}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                )}
              />
            </RegisterField>
            <RegisterField>
              <RegisterLabel>Кількість доданих плейлистів </RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="загружається"
                defaultValue={playlistCount}
                readOnly={true}
              />
            </RegisterField>
            <RegisterField>
              <RegisterLabel>Кількість доданих пісень </RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="в розробці"
                readOnly={true}
              />
            </RegisterField>

            <ContactFaceFieldCard
              control={control}
              register={register}
              errors={errors}
              margintop={"16px"}
              readOnly={!isEditing}
              user={user}
            />
          </>
        )}

        {activeSectionCard === "MusicEditor" && (
          <>
            <CommonFieldCard
              typeOfUser={"fop"}
              register={register}
              control={control}
              isValid={isValid}
              errors={errors}
              readOnly={!isEditing}
              user={user}
            />
            {/* <RegisterField>
            <Controller
                name="login"
                control={control}
                defaultValue={user.login}
                render={({ field }) => (
                  <RegisterInput
                    type="text"
                    placeholder="Остання оплата"
                    readOnly={!isEditing}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  )}
                  />
            </RegisterField>
            <RegisterField>
              <RegisterInput
                type="text"
                placeholder="Пароль"
                readOnly={!isEditing}
                {...register("password")}
              />
            </RegisterField> */}
          </>
        )}
      </RegisterLeftBlock>
      <RegisterRigthBlock>
        <RegisterCommentField>
          <Commentlabel>Примітка </Commentlabel>
          <Controller
            name="comment"
            control={control}
            defaultValue={user.comment}
            render={({ field }) => (
              <CommentTextarea
                type="text"
                placeholder="Примітка"
                readOnly={!isEditing}
                value={field.value}
                height="178px"
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
        </RegisterCommentField>
        {/* <
       Button
         type="submit"
         padding="8px"
         text="Додати" 
         // disabled={!isValid}
       /> 
       */}
      </RegisterRigthBlock>
    </Fieldform>
  );
};

export default CardUserField;
