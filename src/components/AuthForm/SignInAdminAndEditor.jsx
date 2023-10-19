import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AdminAndEditorSchema } from "./Schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { VscError } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

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

import { useSigninMutation } from "../../redux/authSlice";

export const SignInAdminAndEditor = () => {
  const navigate = useNavigate();
  const [dispatch] = useSigninMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, dirtyFields },
  } = useForm({
    mode: "onChange",
    defaultValues: { login: "", password: "" },
    resolver: yupResolver(AdminAndEditorSchema),
  });

  const onSubmit = ({ login, password }) => {
    dispatch({ login, password })
      .unwrap()
      .then(() => {
        navigate("/admin");
        reset();
      })
      .catch((e) => console.log(e.data.message));
  };

  return (
    <>
      <StyledForm autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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
