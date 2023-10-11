import { useForm } from "react-hook-form";
// import { SignInSchema } from "./Schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { BiErrorCircle } from "react-icons/bi";



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
    // resolver: yupResolver(SignInSchema),
  });


  
  return (
    <>
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
                  <BiErrorCircle
                    style={{
                      width: "24px",
                      height: "24px",
                      color: "red",
                      display: "flex",
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                      right: "24px",
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
                  <BiErrorCircle
                    style={{
                      width: "24px",
                      height: "24px",
                      color: "red",
                      display: "flex",
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                      right: "24px",
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