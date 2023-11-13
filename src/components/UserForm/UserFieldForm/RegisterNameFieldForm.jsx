import {
  RegisterNameField,
  RegisterNameBlock,
  RegisterNameLabel,
  RegisterNameInput,
  ButtonSwitch,
} from "../UserCreateModal.styled";



const RegisterNameFieldForm = ({
  activeSection,
  register,
  errors,
  typeOfUser,
  typeOfStatus,
  handleTypeOfStatus,
  isValid,
}) => {

  return (
    <RegisterNameBlock>
      {typeOfUser === "fop" || activeSection === "MusicEditor" ? (
        <>
          <RegisterNameField>
            <RegisterNameLabel>Прізвище</RegisterNameLabel>
            <RegisterNameInput
              type="text"
              placeholder="Прізвище"
              {...register("lastName")}
            />
          </RegisterNameField>

          <RegisterNameField>
            <RegisterNameLabel>Ім'я</RegisterNameLabel>
            <RegisterNameInput
              type="text"
              placeholder="Ім'я"
              {...register("firstName")}
            />
          </RegisterNameField>

          <RegisterNameField>
            <RegisterNameLabel>По-батькові</RegisterNameLabel>
            <RegisterNameInput
              type="text"
              placeholder="По-батькові"
              {...register("fatherName")}
            />
          </RegisterNameField>
        
        </>
      ) : (
              <RegisterNameField>
            <RegisterNameLabel >Назва компанії</RegisterNameLabel>
            <RegisterNameInput
            width = {"270px"}
              type="text"
              placeholder="Назва компанії"
              {...register("name")}
            />
          </RegisterNameField>

            )}
        <ButtonSwitch
            type="button"
            isTrue={typeOfStatus}
            onClick={() => handleTypeOfStatus()}
          >
            {typeOfStatus ? (
              <>
                On
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <circle cx="6.5" cy="6.5" r="6" fill="#8CACD7" />
                </svg>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <circle cx="6.5" cy="6.5" r="6" fill="#FFF3BF" />
                </svg>
                Off
              </>
            )}
          </ButtonSwitch>
    </RegisterNameBlock>
  );
};

export default RegisterNameFieldForm;
