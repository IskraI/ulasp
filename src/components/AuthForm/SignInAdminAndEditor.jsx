import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AdminAndEditorSchema } from "./Schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { VscError } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
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
  const [dispatch, error, isFetching] = useSigninMutation();
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
    // console.log("login", login);
    // console.log("password", password);
    dispatch({ login, password })
      .unwrap()
      .then((res) => {
        // console.log("res", res);
        res.admin && navigate("/admin/cabinet");
        res.editor && navigate("/editor/cabinet"); //добавил /cabinet
        reset();
      })
      .catch((e) => {
        if (e.data?.message === "Login  or password is wrong") {
          alert(e.data?.message);
        }
        // console.log(e.data?.message || e);
        if (e?.status === "FETCH_ERROR") {
          navigate("/error", { state: { errorMessage: e?.status } });
        }
      });
  };

  return (
    <>
      <StyledForm autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        {/* <StyledFormInsight> */}

        {/* <StyledInnerDiv> */}
        <StyledInputWrap>
          <StyledTitle>Логін</StyledTitle>
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
                  top: "75%",
                  transform: "translateY(-50%)",
                  right: "12px",
                }}
              />
              <StyledError>{errors.login.message}</StyledError>
            </div>
          )}
        </StyledInputWrap>
        {/* </StyledInnerDiv> */}

        {/* <StyledInnerDiv> */}
        <StyledInputWrap>
          <StyledTitle>Пароль</StyledTitle>
          <StyledInput
            type="password"
            name="password"
            placeholder="№"
            autoComplete="none"
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
                  top: "75%",
                  transform: "translateY(-50%)",
                  right: "12px",
                }}
              />
              <StyledError>{errors.password.message}</StyledError>
            </div>
          )}
        </StyledInputWrap>

        {/* </StyledInnerDiv> */}
        <StyledButton type="submit" disabled={!isValid}>
          Вхід
        </StyledButton>
        {/* </StyledFormInsight> */}
      </StyledForm>
    </>
  );
};
