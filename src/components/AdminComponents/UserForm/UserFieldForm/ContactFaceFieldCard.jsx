import {
  RegisterField,
  RegisterLabel,
  RegisterInput,
  RegisterContactField,
  Tooltip,
} from "../UserCreateForm.styled";
import InputMask from "react-input-mask";
import { Controller } from "react-hook-form";

const ContactFaceFieldCard = ({
  user,
  register,
  errors,
  margintop,
  control,
  dirtyFields,
  readOnly,
  card,
}) => {
  return (
    <RegisterContactField margintop={margintop}>
      <RegisterField>
        <RegisterLabel>Контактна особа* </RegisterLabel>
        <Controller
          name="contactFace"
          control={control}
          defaultValue={user.contactFace}
          render={({ field }) => (
            <RegisterInput
              type="text"
              placeholder="Контактна особа"
              readOnly={readOnly}
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
        />
      </RegisterField>
      {/*     
      <RegisterField>
        <RegisterLabel>Ідентифікаційний номер* </RegisterLabel>
        <Controller
                name="contactFaceTaxCode"
                control={control}
                defaultValue={user.contactFaceTaxCode}
                render={({ field }) => (
                  <RegisterInput
                    type="text"
                    placeholder="Ідентифікаційний номер"
                    readOnly={readOnly}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  )}
                  />
      
   
      </RegisterField> */}
      <RegisterField>
        <RegisterLabel>Номер телефону* </RegisterLabel>
        <Controller
          name="contactFaceTelNumber"
          control={control}
          defaultValue={user.contactFaceTelNumber}
          render={({ field }) => (
            <RegisterInput
              type="text"
              placeholder="Номер телефону"
              readOnly={readOnly}
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
        />
      </RegisterField>

      <RegisterField>
        <RegisterLabel>E-mail </RegisterLabel>
        <Controller
          name="contactFaceEmail"
          control={control}
          defaultValue={user.contactFaceEmail}
          render={({ field }) => (
            <RegisterInput
              type="text"
              placeholder="E-mail"
              readOnly={readOnly}
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
        />
      </RegisterField>
    </RegisterContactField>
  );
};

export default ContactFaceFieldCard;
