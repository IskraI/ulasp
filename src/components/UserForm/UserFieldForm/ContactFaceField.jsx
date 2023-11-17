import {
  RegisterField,
  RegisterLabel,
  RegisterInput,
  RegisterContactField,Tooltip
} from "../UserCreateForm.styled";
import InputMask from 'react-input-mask';
import { Controller } from 'react-hook-form';


const ContactFaceField = ({ register, errors, margintop, control, dirtyFields }) => {
  
  return (
    <RegisterContactField margintop={margintop}>
      <RegisterField>
        <RegisterLabel>Контактна особа* </RegisterLabel>
        <RegisterInput
          type="text"
          placeholder="Контактна особа"
          aria-describedby="contactFaceTooltip"
          className={`${errors.contactFace ? "invalid" : ""}${
            !errors.contactFace && dirtyFields.contactFace ? "valid" : ""
          }`}
          {...register("contactFace")}
        />
        <Tooltip
              id="contactFaceTooltip"
              className={`${errors.contactFace ? "visible" : ""}`}
            > {errors.contactFace && errors.contactFace.message}
            </Tooltip>
      </RegisterField>
      <RegisterField>
        <RegisterLabel>Ідентифікаційний номер* </RegisterLabel>
        <RegisterInput
          type="text"
          placeholder="Ідентифікаційний номер"
          aria-describedby="contactFaceTaxCodeTooltip"
          className={`${errors.contactFaceTaxCode ? "invalid" : ""}${
            !errors.contactFaceTaxCode && dirtyFields.contactFaceTaxCode ? "valid" : ""
          }`}
          {...register("contactFaceTaxCode")}
        />
        <Tooltip
              id="contactFaceTaxCodeTooltip"
              className={`${errors.contactFaceTaxCode ? "visible" : ""}`}
            > {errors.contactFaceTaxCode && errors.contactFaceTaxCode.message}
            </Tooltip>
      </RegisterField>
      <RegisterField>
      <RegisterLabel>Номер телефону* </RegisterLabel>
      <RegisterInput
          type="text"
          placeholder="Номер телефону"
          aria-describedby="contactFaceTelNumberTooltip"
          className={`${errors.contactFaceTelNumber ? "invalid" : ""}${
            !errors.contactFaceTelNumber && dirtyFields.contactFaceTelNumber ? "valid" : ""
          }`}
          {...register("contactFaceTelNumber")}
        />
 <Tooltip
              id="contactFaceTelNumberTooltip"
              className={`${errors.contactFaceTelNumber ? "visible" : ""}`}
            > {errors.contactFaceTelNumber && errors.contactFaceTelNumber.message}
            </Tooltip>

      
  {/* <Controller
    name="contactFaceTelNumber"
    control={control}
    defaultValue=""
    render={({ field }) => (
      <InputMask
        mask="+380999999999"
        // maskChar={null}
        type="text"
        placeholder="Номер телефону"
        {...field}
      />
    )}
  /> */}
  <p>
    {/* {errors.contactFaceTelNumber && errors.contactFaceTelNumber.message} */}
  </p>
      </RegisterField>

      
      <RegisterField>
        <RegisterLabel>E-mail </RegisterLabel>
        <RegisterInput
          type="text"
          placeholder="E-mail"
          aria-describedby="contactFaceEmailTooltip"
          className={`${errors.contactFaceEmail ? "invalid" : ""}${
            !errors.contactFaceEmail && dirtyFields.contactFaceEmail ? "valid" : ""
          }`}
          {...register("contactFaceEmail")}
        />
        <Tooltip
              id="contactFaceEmailTooltip"
              className={`${errors.contactFaceEmail ? "visible" : ""}`}
            > {errors.contactFaceEmail && errors.contactFaceEmail.message}
            </Tooltip>
      </RegisterField>
    </RegisterContactField>
  );
};

export default ContactFaceField;
