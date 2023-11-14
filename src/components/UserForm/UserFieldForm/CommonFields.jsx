import {
    RegisterForm,
    RegisterBlock,
    ButtonSwitch,
    RegisterField,
    RegisterNameBlock,
    RegisterLabel,
    RegisterInput,
    RegisterArea,
   
    RegisterRigthBlock,
    Commentlabel,
    Fieldform,
  
    RegisterCommentField,
    CommentTextarea,
  } from "../UserCreateForm.styled";

  import { Button } from "../../Button/Button";
  const CommonFieldForm = ({
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
                <RegisterInput
                  type="text"
                  placeholder="Код ЄДРПОУ (ІНН)"
                  readOnly={readOnly}
                  value ={user.taxCode}
                  {...register("taxCode")}
                />
             
              </RegisterField>

              {(typeOfUser === "fop") && (
                <RegisterField>
                  <RegisterLabel>Дата народження</RegisterLabel>
                  <RegisterInput
                    type="text"
                    placeholder="Дата народження"
                    readOnly={readOnly}
                    value ={user.dayOfBirthday}
                    {...register("dayOfBirthday")}
                  />
                            </RegisterField>
              )}
  
              <RegisterField>
                <RegisterLabel>Номер телефону*</RegisterLabel>
                <RegisterInput
                  type="text"
                  placeholder="Номер телефону"
                  readOnly={readOnly}
                    value ={user.telNumber}
                  {...register("telNumber")}
                />
            
             
              </RegisterField>

              <RegisterField>
                <RegisterLabel>E-mail*</RegisterLabel>
                <RegisterInput
                  type="text"
                  placeholder="E-mail"
                  readOnly={readOnly}
                    value ={user.email}
                  {...register("email")}
                />
             
              </RegisterField>
              
          
          
    
         </>);

  }
  
  export default CommonFieldForm;
  