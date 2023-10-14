import { useForm } from "react-hook-form";
import { AdminAndEditorSchema } from "./Schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { VscError } from "react-icons/vsc";



import {
  StyledButton,
  StyledError,
  StyledForm,
  StyledFormInsight,
  StyledInput,
  StyledInputWrap,
  StyledTitle,
  StyledInnerDiv,
 } from "./SignInClient.styled";

export const SignInAdminAndEditor = () => {
  const {
    register,
    // handleSubmit,
    formState: { errors, isValid, dirtyFields },
  } = useForm({
    mode: "onChange",
    defaultValues: { login: "", password: "" },
    resolver: yupResolver(AdminAndEditorSchema),
  });


  
  return (
    <>
      <StyledForm autoComplete="off" >
        <StyledFormInsight>
          <StyledTitle>Логін</StyledTitle>
          <StyledInnerDiv>
            <StyledInputWrap>
              <StyledInput
                type="login"
                name="login"
                placeholder="№"
                {...register("login")}
                className={
                  errors.login
                    ? "invalid-border"
                    : dirtyFields.login
                    ? "valid-border"
                    : ""
                }
              />
              {errors.login && (
                <div>
                  <VscError
                    style={{
                      width: "25px",
                      height: "25px",
                      color: "red",
                      display: "flex",
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                      right: "12px",
                    }}
                  />
                  <StyledError>{errors.login.message}</StyledError>
                </div>
              )}
                 </StyledInputWrap>
           
                  </StyledInnerDiv>
                       <StyledTitle>Пароль</StyledTitle>
          <StyledInnerDiv>
            <StyledInputWrap>
              <StyledInput
                type="password"
                name="password"
                placeholder="№"
                {...register("password")}
                className={
                  errors.password
                    ? "invalid-border"
                    : dirtyFields.password
                    ? "valid-border"
                    : ""
                }
              />
              {errors.password && (
                <div>
                  <VscError
                    style={{
                      width: "25px",
                      height: "25px",
                      color: "red",
                      display: "flex",
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                      right: "12px",
                    }}
                  />
                  <StyledError>{errors.password.message}</StyledError>
                </div>
              )}
                          </StyledInputWrap>
           
          </StyledInnerDiv>
          <StyledButton type="submit" disabled={!isValid}>
            Вхід
          </StyledButton>
        </StyledFormInsight>
      </StyledForm>
    </>
  );
};