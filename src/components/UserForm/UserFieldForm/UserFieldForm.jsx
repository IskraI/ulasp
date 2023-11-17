//typeOfUser - fop , tov
//activeSection createuser, create editor, carduser, cardeditor
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
import CommonFieldForm from "./CommonFields";
import { Button } from "../../Button/Button";
const UserFieldForm = ({
   control,
  handleTypeOfStatus,
  activeSection,
  typeOfStatus,
  typeOfUser,
  isValid,
  errors,
  register,
  dirtyFields
}) => {
  console.log('errors.contractNumber', errors.contractNumber)

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
          activeSection={activeSection}
        />

        {activeSection === "User" && (
          <>
            <RegisterField>
              <RegisterLabel>№ договору</RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="№ договору"
                valid={`${errors.contractNumber ? 'invalid' : ""}${!errors.contractNumber && dirtyFields.contractNumber?'valid':""}`}
                // valid={`${errors.contractNumber ? 'invalid' : "valid"} ${!errors.contractNumber && dirtyFields.contractNumber &&'valid' }`}
                     
                {...register("contractNumber")}
              />
            </RegisterField>

            <CommonFieldForm
              typeOfUser={typeOfUser}
              register={register}
              control={control}
              isValid={isValid}
              errors={errors}
              readOnly="false"
            
            />

            <RegisterField>
              <RegisterLabel>Надання доступу до*</RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="Надання доступу до"
                valid={`${errors.contractNumber ? 'invalid' : ""}${!errors.contractNumber && dirtyFields.contractNumber?'valid':""}`}
                {...register("dateOfAccess")}
              />
            </RegisterField>
            <RegisterField>
              <RegisterLabel>Остання оплата* </RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="Остання оплата"
                valid={`${errors.contractNumber ? 'invalid' : ""}${!errors.contractNumber && dirtyFields.contractNumber?'valid':""}`}
                {...register("lastPay")}
              />
            </RegisterField>

            <ContactFaceField
              control={control}
              register={register}
              errors={errors}
              margintop={"36px"}
              isValid={isValid}
            />
            
          </>
        )}

        {activeSection === "MusicEditor" && (<>
          <CommonFieldForm
            typeOfUser={"fop"}
            register={register}
            control={control}
            isValid={isValid}
            errors={errors}
            readOnly="false"
          />
 <RegisterField>
             
             <RegisterInput
               type="text"
               placeholder="Логін"
               valid={`${errors.contractNumber ? 'invalid' : ""}${!errors.contractNumber && dirtyFields.contractNumber?'valid':""}`}
               {...register("login")}
             />
           </RegisterField>
           <RegisterField>
            
             <RegisterInput
               type="text"
               placeholder="Пароль"
               valid={`${errors.contractNumber ? 'invalid' : ""}${!errors.contractNumber && dirtyFields.contractNumber?'valid':""}`}
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
        
            {...register("comment")}
          />
        </RegisterCommentField>
        <Button
          type="submit"
          padding="8px"
          text="Додати" 
          // disabled={!isValid}
        />
      </RegisterRigthBlock>
    </Fieldform>
  );
};

export default UserFieldForm;
