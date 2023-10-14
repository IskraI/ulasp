import { useForm } from "react-hook-form";
import { SignInSchema, } from "./Schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { VscError } from "react-icons/vsc";
// import { useDispatch } from "react-redux";
// import { signin, refreshUser } from "../../redux/operations";



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

export const SignInClient = () => {
  const {
    register,
    // handleSubmit,
    formState: { errors, isValid, dirtyFields },
  } = useForm({
    mode: "onChange",
    defaultValues: { сontract: "", identification: "" },
    resolver: yupResolver(SignInSchema),
  });

  // const dispatch = useDispatch();
  // const onSubmit = async (values) => {
  //   try {
  //     const res = await dispatch(signin(values));
  //     if (res.payload.response?.status === 401) {
  //       // toast.error(res.payload.response.data.message);
  //       throw new Error(res.payload.response.data.message);
  //     }

  //     // toast.success("Authentication successful");
  //     dispatch(refreshUser());
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  
  return (
    <>
      {/* onSubmit={handleSubmit(onSubmit)} */}
      <StyledForm autoComplete="off" >
        <StyledFormInsight>
          <StyledTitle>Номер договору</StyledTitle>
          <StyledInnerDiv>
            <StyledInputWrap>
              <StyledInput
                type="сontract"
                name="сontract"
                placeholder="№"
                {...register("сontract")}
                className={
                  errors.сontract
                    ? "invalid-border"
                    : dirtyFields.сontract
                    ? "valid-border"
                    : ""
                }
              />
              {errors.сontract && (
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
                  <StyledError>{errors.сontract.message}</StyledError>
                </div>
              )}
                 </StyledInputWrap>
           
                  </StyledInnerDiv>
                       <StyledTitle>Ідентифікаційний номер</StyledTitle>
          <StyledInnerDiv>
            <StyledInputWrap>
              <StyledInput
                type="identification"
                name="identification"
                placeholder="№"
                {...register("identification")}
                className={
                  errors.identification
                    ? "invalid-border"
                    : dirtyFields.identification
                    ? "valid-border"
                    : ""
                }
              />
              {errors.identification && (
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
                  <StyledError>{errors.identification.message}</StyledError>
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