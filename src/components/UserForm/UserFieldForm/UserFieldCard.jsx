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
} from "../UserCreateForm.styled";
import ContactFaceField from "./ContactFaceField";
import RegisterNameFieldForm from "./RegisterNameFieldForm";
import CommonFieldForm from "../UserFieldForm/CommonFields";
import { Button } from "../../Button/Button";
import { useForm, Controller } from 'react-hook-form';
const UserFieldForm = ({
  user,
  control,
  handleTypeOfStatus,
  activeSectionCard,
  typeOfStatus,
  typeOfUser,
  isValid,
  errors,
  register,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditActivation = () => {
    // You can perform additional actions if needed before allowing editing
    setIsEditing(true);
  };
  console.log('isEditing', isEditing)
  return (
    <Fieldform>
      <RegisterLeftBlock>
        <RegisterNameFieldForm
          handleTypeOfStatus={handleTypeOfStatus}
          register={register}
          errors={errors}
          typeOfUser={typeOfUser}
          typeOfStatus={typeOfStatus}
          isValid={isValid}
          activeSectionCard={activeSectionCard}
          readOnly={!isEditing}
          user={user}
          handleEditActivation={handleEditActivation}
        />

        {activeSectionCard === "User" && (
          <>
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

            <CommonFieldForm
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
              <RegisterInput
                type="text"
                placeholder="Надання доступу до"
                readOnly={!isEditing}
                value={user.dateOfAccess}
                {...register("dateOfAccess")}
              />
            </RegisterField>
            <RegisterField>
              <RegisterLabel>Остання оплата* </RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="Остання оплата"
                readOnly={!isEditing}
                value={user.lastPay}
                {...register("lastPay")}
              />
            </RegisterField>
            <RegisterField>
              <RegisterLabel>Кількість доданих плейлистів </RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="з бека запрос"
                readOnly={true}
              />
            </RegisterField>
            <RegisterField>
              <RegisterLabel>Кількість доданих пісень </RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="з бека запрос"
                readOnly={true}
              />
            </RegisterField>

            <ContactFaceField
              control={control}
              register={register}
              errors={errors}
              margintop={"36px"}
              readOnly={!isEditing}
              user={user}
            />
          </>
        )}

        {activeSectionCard === "MusicEditor" && (
          <>
            <CommonFieldForm
              typeOfUser={"fop"}
              register={register}
              control={control}
              isValid={isValid}
              errors={errors}
              readOnly={!isEditing}
              user={user}
            />
            <RegisterField>
              <RegisterInput
                type="text"
                placeholder="Логін"
                readOnly={!isEditing}
                {...register("login")}
              />
            </RegisterField>
            <RegisterField>
              <RegisterInput
                type="text"
                placeholder="Пароль"
                readOnly={!isEditing}
                {...register("password")}
              />
            </RegisterField>
          </>
        )}
      </RegisterLeftBlock>
      <RegisterRigthBlock>
        <RegisterCommentField>
          <Commentlabel>Примітка </Commentlabel>
          <CommentTextarea
            type="text"
            placeholder="Примітка"
            readOnly={!isEditing}
            value={user.comment}
            {...register("comment")}
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

export default UserFieldForm;
