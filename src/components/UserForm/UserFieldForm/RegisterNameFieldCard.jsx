import {
  RegisterNameField,
  RegisterNameBlock,
  RegisterNameLabel,
  RegisterNameInput,
  ButtonSwitch,
} from "../UserCreateForm.styled";
import {Button} from "../../Button/Button"
import { Controller } from 'react-hook-form';

const RegisterNameFieldCard = ({
  user,
  activeSectionCard,
  register,
  errors,
  typeOfUser,
  typeOfAccess,
  handleTypeOfAccess,
  isValid,
  readOnly,
  
  control
}) => {

  return (
    <RegisterNameBlock>
     
{!readOnly ? (<>

      {typeOfUser === "fop" || activeSectionCard === "MusicEditor" ? (
        <>
          <RegisterNameField>
            <RegisterNameLabel>Прізвище</RegisterNameLabel>
            <Controller
                name="lastName"
                control={control}
                defaultValue={user.lastName}
                render={({ field }) => (
                  <RegisterNameInput
                    type="text"
                    placeholder="Прізвище"
                    readOnly={readOnly}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                )}
              />
        
          </RegisterNameField>

          <RegisterNameField>
            <RegisterNameLabel>Ім'я</RegisterNameLabel>
            <Controller
                name="firstName"
                control={control}
                defaultValue={user.firstName}
                render={({ field }) => (
                  <RegisterNameInput
                    type="text"
                    placeholder="Ім'я"
                    readOnly={readOnly}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                )}
              />
           
          </RegisterNameField>

          <RegisterNameField>
            <RegisterNameLabel>По-батькові</RegisterNameLabel>
            <Controller
                name="fatherName"
                control={control}
                defaultValue={user.fatherName}
                render={({ field }) => (
                  <RegisterNameInput
                    type="text"
                    placeholder="По-батькові"
                    readOnly={readOnly}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                )}
              />
          
          </RegisterNameField>
        
        </>
      ) : (
              <RegisterNameField>
                <Controller
                name="name"
                control={control}
                defaultValue={user.name}
                render={({ field }) => (
                  <RegisterNameInput
                    type="text"
                    placeholder="Назва компанії"
                    readOnly={readOnly}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  )}
                  />
                    </RegisterNameField>

            )}
        <ButtonSwitch
            type="button"
            isTrue={typeOfAccess}
            onClick={() => handleTypeOfAccess()}
          >
            {typeOfAccess ? (
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
          </>):
          (
            <>
   {typeOfUser === "fop" || activeSectionCard === "MusicEditor" ? (
        <>
          <RegisterNameField>
          { ` ${user.firstName} ${user.lastName}` } 
          </RegisterNameField>

              
        
        </>
      ) : (
              <RegisterNameField>
             { ` ${user.name} ` } 
          </RegisterNameField>

            )}
        <ButtonSwitch
            type="button"
            isTrue={user.status}
          
          >
            {typeOfAccess ? (
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
            </>
          )}


    </RegisterNameBlock>
   
  )
};

export default RegisterNameFieldCard;
