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
  } from "../UserCreateModal.styled";

  import { Button } from "../../Button/Button";
  const CommonFieldForm = ({
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
               
                  {...register("taxCode")}
                />
             
              </RegisterField>

              {(typeOfUser === "fop") && (
                <RegisterField>
                  <RegisterLabel>Дата народження</RegisterLabel>
                  <RegisterInput
                    type="text"
                    placeholder="Дата народження"
                     
                    {...register("dayOfBirthday")}
                  />
                            </RegisterField>
              )}
  
              <RegisterField>
                <RegisterLabel>Номер телефону*</RegisterLabel>
                <RegisterInput
                  type="text"
                  placeholder="Номер телефону"
                 
                  {...register("telNumber")}
                />
            
             
              </RegisterField>

              <RegisterField>
                <RegisterLabel>E-mail*</RegisterLabel>
                <RegisterInput
                  type="text"
                  placeholder="E-mail"
                
                  {...register("email")}
                />
                <p>{errors.email && errors.email.message}</p>
              </RegisterField>
              
          
          
    
         </>);

  }
  
  export default CommonFieldForm;
  