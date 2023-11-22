import {
  RegisterField,
  RegisterLabel,
  RegisterInput,
  RegisterContactField,Tooltip
} from "../UserCreateForm.styled";
import InputMask from 'react-input-mask';
import { Controller } from 'react-hook-form';


const ContactFaceFieldCard = ({ user, register, errors, margintop, control, dirtyFields, readOnly }) => {
  
  return (
    <RegisterContactField margintop={margintop}>
      <RegisterField>
        <RegisterLabel>Контактна особа* </RegisterLabel>
        <RegisterInput
          type="text"
          placeholder="Контактна особа"
          readOnly = {readOnly}
                value={user.contactFace}
   
          {...register("contactFace")}
        />
      
      </RegisterField>
      <RegisterField>
        <RegisterLabel>Ідентифікаційний номер* </RegisterLabel>
        <RegisterInput
          type="text"
          placeholder="Ідентифікаційний номер"
          readOnly = {readOnly}
          value={user.contactFaceTaxCode}
          {...register("contactFaceTaxCode")}
        />
   
      </RegisterField>
      <RegisterField>
      <RegisterLabel>Номер телефону* </RegisterLabel>
      <RegisterInput
          type="text"
          placeholder="Номер телефону"
          readOnly = {readOnly}
          value={user.contactFaceTelNumber}
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
    {/* {errors.contactFaceTelNumber && errors.contactFaceTelNumber.message} */}
  </p>
      </RegisterField>

      
      <RegisterField>
        <RegisterLabel>E-mail </RegisterLabel>
        <RegisterInput
          type="text"
          placeholder="E-mail"
          readOnly = {readOnly}
          value={user.contactFaceEmail}
          {...register("contactFaceEmail")}
        />
  
      </RegisterField>
    </RegisterContactField>
  );
};

export default ContactFaceFieldCard;
