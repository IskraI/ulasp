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
  CommentTextarea,Tooltip
} from "../UserCreateForm.styled";
import ContactFaceField from "./ContactFaceField";
import RegisterNameFieldForm from "./RegisterNameFieldForm";
import CommonFieldForm from "./CommonFields";
import { Button } from "../../../Button/Button";
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
          dirtyFields={dirtyFields}
        />

        {activeSection === "User" && (
          <>
            <RegisterField>
              <RegisterLabel>№ договору</RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="№ договору"
                aria-describedby="contractNumberTooltip"
                className={`${errors.contractNumber ? "invalid" : ""}${
                  !errors.contractNumber && dirtyFields.contractNumber ? "valid" : ""
                }`}
                     
                {...register("contractNumber")}
              />
               <Tooltip
              id="contractNumberTooltip"
              className={`${errors.contractNumber ? "visible" : ""}`}
            >
                    {errors.contractNumber && errors.contractNumber.message}
            </Tooltip>
            </RegisterField>

            <CommonFieldForm
              typeOfUser={typeOfUser}
              register={register}
              control={control}
              isValid={isValid}
              errors={errors}
              readOnly="false"
              dirtyFields={dirtyFields}
            
            />

            <RegisterField>
              <RegisterLabel>Надання доступу до*</RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="Надання доступу до"
                aria-describedby="dateOfAccessTooltip"
                className={`${errors.dateOfAccess ? "invalid" : ""}${
                  !errors.dateOfAccess && dirtyFields.dateOfAccess ? "valid" : ""
                }`}
                {...register("dateOfAccess")}
              />
               <Tooltip
              id="dateOfAccessTooltip"
              className={`${errors.dateOfAccess ? "visible" : ""}`}
            >
                    {errors.dateOfAccess && errors.dateOfAccess.message}
            </Tooltip>
            </RegisterField>
            <RegisterField>
              <RegisterLabel>Остання оплата* </RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="Остання оплата"
                aria-describedby="lastPayTooltip"
                className={`${errors.lastPay ? "invalid" : ""}${
                  !errors.lastPay && dirtyFields.lastPay ? "valid" : ""
                }`}
                {...register("lastPay")}
              />
                <Tooltip
              id="lastPayTooltip"
              className={`${errors.lastPay ? "visible" : ""}`}
            >
                    {errors.lastPay && errors.lastPay.message}
            </Tooltip>
            </RegisterField>

            <ContactFaceField
              control={control}
              register={register}
              errors={errors}
              margintop={"36px"}
              isValid={isValid}
              dirtyFields={dirtyFields}
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
            dirtyFields={dirtyFields}
          />
 <RegisterField>
             
             <RegisterInput
               type="text"
               placeholder="Логін"
               valid={`${errors.login ? 'invalid' : ""}${!errors.login && dirtyFields.login?'valid':""}`}
               {...register("login")}
             />
           </RegisterField>
           <RegisterField>
            
             <RegisterInput
               type="text"
               placeholder="Пароль"
               valid={`${errors.password ? 'invalid' : ""}${!errors.password && dirtyFields.password?'valid':""}`}
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
