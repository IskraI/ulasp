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
  user,
  control,
  handleTypeOfStatus,
  activeSection,
  typeOfStatus,
  typeOfUser,
  isValid,
  errors,
  register,
}) => {
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
            
                {...register("contractNumber")}
              />
            </RegisterField>

            <CommonFieldForm
              typeOfUser={typeOfUser}
              register={register}
              control={control}
              isValid={isValid}
              errors={errors}
            />

            <RegisterField>
              <RegisterLabel>Надання доступу до*</RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="Надання доступу до"
     
                {...register("dateOfAccess")}
              />
            </RegisterField>
            <RegisterField>
              <RegisterLabel>Остання оплата* </RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="Остання оплата"
               
                {...register("lastPay")}
              />
            </RegisterField>

            <ContactFaceField
              control={control}
              register={register}
              errors={errors}
              margintop={"36px"}
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
          />
 <RegisterField>
             
             <RegisterInput
               type="text"
               placeholder="Логін"
    
               {...register("login")}
             />
           </RegisterField>
           <RegisterField>
            
             <RegisterInput
               type="text"
               placeholder="Пароль"
    
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
