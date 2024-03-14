import {
  RegisterField,
  RegisterLabel,
  RegisterInput,
  Tooltip,
} from "../UserCreateForm.styled";

import { useForm, Controller } from "react-hook-form";

const CommonFieldCard = ({
  user,
  readOnly,
  control,
  isValid,
  errors,
  register,
  typeOfUser,
  isEditing,
}) => {
  return (
    <>
      <RegisterField>
        <RegisterLabel>Код ЄДРПОУ (ІНН)*</RegisterLabel>
        <Controller
          name="taxCode"
          control={control}
          defaultValue={user.taxCode}
          render={({ field }) => (
            <>
              <RegisterInput
                type="text"
                placeholder="Код ЄДРПОУ (ІНН)"
                readOnly={readOnly}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                className={
                  isEditing ? `${errors.taxCode ? "invalid" : "valid"}` : ""
                }
              />
              {errors && errors.taxCode && (
                <Tooltip className={`${errors.taxCode ? "visible" : ""}`}>
                  {errors.taxCode.message}
                </Tooltip>
              )}
            </>
          )}
        />
      </RegisterField>

      <RegisterField>
        <RegisterLabel>Назва закладу</RegisterLabel>
        <Controller
          name="institution"
          control={control}
          defaultValue={user.institution}
          render={({ field }) => (
            <>
              <RegisterInput
                type="text"
                placeholder="Назва закладу"
                readOnly={readOnly}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                className={
                  isEditing ? `${errors.institution ? "invalid" : "valid"}` : ""
                }
              />
              {errors && errors.institution && (
                <Tooltip className={`${errors.institution ? "visible" : ""}`}>
                  {errors.institution.message}
                </Tooltip>
              )}
            </>
          )}
        />
      </RegisterField>

      <RegisterField>
        <RegisterLabel>Номер телефону*</RegisterLabel>
        <Controller
          name="telNumber"
          control={control}
          defaultValue={user.telNumber}
          render={({ field }) => (
            <>
              <RegisterInput
                type="text"
                placeholder="Номер телефону"
                readOnly={readOnly}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                className={
                  isEditing ? `${errors.telNumber ? "invalid" : "valid"}` : ""
                }
              />
              {errors && errors.telNumber && (
                <Tooltip className={`${errors.telNumber ? "visible" : ""}`}>
                  {errors.telNumber.message}
                </Tooltip>
              )}
            </>
          )}
        />
      </RegisterField>

      <RegisterField>
        <RegisterLabel>E-mail*</RegisterLabel>
        <Controller
          name="email"
          control={control}
          defaultValue={user.email}
          render={({ field }) => (
            <>
              <RegisterInput
                type="text"
                placeholder="Номер телефону"
                readOnly={readOnly}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                className={
                  isEditing ? `${errors.email ? "invalid" : "valid"}` : ""
                }
              />
              {errors && errors.email && (
                <Tooltip className={`${errors.email ? "visible" : ""}`}>
                  {errors.email.message}
                </Tooltip>
              )}
            </>
          )}
        />
      </RegisterField>
    </>
  );
};

export default CommonFieldCard;
