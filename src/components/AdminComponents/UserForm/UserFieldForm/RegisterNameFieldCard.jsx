import {
  RegisterNameField,
  RegisterNameBlock,
  RegisterNameLabel,
  RegisterNameInput,
 
} from "../UserCreateForm.styled";
import {ButtonSwitch} from "../../ButtonSwitch/ButtonSwitch"
import {Button} from "../../../Button/Button"
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
            
        <ButtonSwitch type="button"
             isTrue={typeOfAccess}
            onClick={() => handleTypeOfAccess()}
         />
          
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
            isTrue={typeOfAccess}
            onClick={() => console.log('edite card')}
          />
                       
            </>
          )}


    </RegisterNameBlock>
   
  )
};

export default RegisterNameFieldCard;
