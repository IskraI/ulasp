import {
  RegisterField,
  RegisterLabel,
  RegisterInput,
  RegisterContactField,
} from "../UserCreateModal.styled";
import InputMask from 'react-input-mask';
import { Controller } from 'react-hook-form';


const ContactFaceField = ({ register, errors, margintop, control }) => {
  
  return (
    <RegisterContactField margintop={margintop}>
      <RegisterField>
        <RegisterLabel>Контактна особа* </RegisterLabel>
        <RegisterInput
          type="text"
          placeholder="Контактна особа"
          {...register("contactFace")}
        />
        <p>{errors.contactFace && errors.contactFace.message}</p>
      </RegisterField>
      <RegisterField>
        <RegisterLabel>Ідентифікаційний номер* </RegisterLabel>
        <RegisterInput
          type="text"
          placeholder="Ідентифікаційний номер"
          // className={`${scss.input} ${errors.name && scss.invalid}
          //  ${!errors.name && dirtyFields.name && scss.valid}`}
          {...register("contactFaceTaxCode")}
        />
        <p>{errors.contactFaceTaxCode && errors.contactFaceTaxCode.message}</p>
      </RegisterField>
      <RegisterField>
      <RegisterLabel>Номер телефону* </RegisterLabel>
      <RegisterInput
          type="text"
          placeholder="Номер телефону"
          // className={`${scss.input} ${errors.name && scss.invalid}
          //  ${!errors.name && dirtyFields.name && scss.valid}`}
          {...register("contactFaceTelNumber")}
        />


      
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
    {errors.contactFaceTelNumber && errors.contactFaceTelNumber.message}
  </p>
      </RegisterField>

      
      <RegisterField>
        <RegisterLabel>E-mail </RegisterLabel>
        <RegisterInput
          type="text"
          placeholder="E-mail"
          // className={`${scss.input} ${errors.name && scss.invalid}
          //  ${!errors.name && dirtyFields.name && scss.valid}`}
          {...register("contactFaceEmail")}
        />
        <p>{errors.contactFaceEmail && errors.contactFaceEmail.message}</p>
      </RegisterField>
    </RegisterContactField>
  );
};

export default ContactFaceField;
