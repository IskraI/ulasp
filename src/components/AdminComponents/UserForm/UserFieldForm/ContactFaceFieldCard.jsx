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
  isEditing,
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
            <>
              <RegisterInput
                type="text"
                placeholder="Контактна особа"
                readOnly={readOnly}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                className={
                  !readOnly ? `${errors.contactFace ? "invalid" : "valid"}` : ""
                }
              />
              {errors.contactFace && (
                <Tooltip className={`${errors.contactFace ? "visible" : ""}`}>
                  {errors.contactFace.message}
                </Tooltip>
              )}
            </>
          )}
        />
      </RegisterField>

      <RegisterField>
        <RegisterLabel>Номер телефону* </RegisterLabel>
        <Controller
          name="contactFaceTelNumber"
          control={control}
          defaultValue={user.contactFaceTelNumber}
          render={({ field }) => (
            <>
              <RegisterInput
                type="text"
                placeholder="Номер телефону"
                readOnly={readOnly}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                className={
                  !readOnly
                    ? `${errors.contactFaceTelNumber ? "invalid" : "valid"}`
                    : ""
                }
              />
              {errors.contactFaceTelNumber && (
                <Tooltip
                  className={`${errors.contactFaceTelNumber ? "visible" : ""}`}
                >
                  {errors.contactFaceTelNumber.message}
                </Tooltip>
              )}
            </>
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
            <>
              <RegisterInput
                type="text"
                placeholder="E-mail"
                readOnly={readOnly}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                className={
                  !readOnly
                    ? `${errors.contactFaceEmail ? "invalid" : "valid"}`
                    : ""
                }
              />
              {errors.contactFaceEmail && (
                <Tooltip
                  className={`${errors.contactFaceEmail ? "visible" : ""}`}
                >
                  {errors.contactFaceEmail.message}
                </Tooltip>
              )}
            </>
          )}
        />
      </RegisterField>
    </RegisterContactField>
  );
};

export default ContactFaceFieldCard;
