import {
   
    RegisterField,
 
    RegisterLabel,
    RegisterInput,

  } from "../UserCreateForm.styled";

  import { useForm, Controller } from "react-hook-form";
  
  const CommonFieldCard = ({
    user,
    readOnly,
    control,
    isValid,
    errors,
    register,
    typeOfUser
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
                  <RegisterInput
                    type="text"
                    placeholder="Код ЄДРПОУ (ІНН)"
                    readOnly={readOnly}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  )}
                  />
               
             
              </RegisterField>

              {(typeOfUser === "fop") && (
                <RegisterField>
                  <RegisterLabel>Дата народження</RegisterLabel>
                  <Controller
                name="dayOfBirthday"
                control={control}
                defaultValue={user.dayOfBirthday}
                render={({ field }) => (
                  <RegisterInput
                    type="text"
                    placeholder="Дата народження"
                    readOnly={readOnly}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  )}
                  />
                 
                            </RegisterField>
              )}
  
              <RegisterField>
                <RegisterLabel>Номер телефону*</RegisterLabel>
                <Controller
                name="telNumber"
                control={control}
                defaultValue={user.telNumber}
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
                <RegisterLabel>E-mail*</RegisterLabel>
                  <Controller
                name="email"
                control={control}
                defaultValue={user.email}
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
              
          
          
    
         </>);

  }
  
  export default CommonFieldCard;
  