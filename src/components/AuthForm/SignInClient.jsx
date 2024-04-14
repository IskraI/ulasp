import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { SignInSchema } from "./Schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { VscError } from "react-icons/vsc";
import { Modal } from "../Modal/Modal";
import { ModalInfoText } from "../Modal/Modal.styled";
import { errorMappings } from "../../constants/errorMessage";
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

import { useSignInClientMutation } from "../../redux/authClientSlice";

export const SignInClient = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleShowModal = () => {
    setShowModal(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal = () => {
    document.body.classList.remove("modal-open");
    setShowModal(false);
  };

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isValid, dirtyFields },
  } = useForm({
    mode: "onBlur",
    // defaultValues: { contractNumber: "", password: "" },
    resolver: yupResolver(SignInSchema),
  });
  const [dispatch, { isLoading }] = useSignInClientMutation();

  const onSubmit = (data) => {
    const credentials = {
      contractNumber: data.contractNumber,
      password: data.password,
    };

    dispatch(credentials)
      .unwrap()
      .then(() => {
        navigate("/user/cabinet");

        reset();
      })
      .catch((e) => {
        let errorMessage = e.data?.message;
        if (e.data.message) {
          const mappedMessage = errorMappings[e.status];

          if (mappedMessage) {
            if (typeof mappedMessage === "object") {
              errorMessage = mappedMessage[e.data.message];
            } else {
              errorMessage = mappedMessage;
            }
          }
        }

        setErrorMessage(errorMessage);
        handleShowModal();
      });
  };

  return (
    <>
      <StyledForm autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <StyledFormInsight>
          <StyledTitle>Номер договору</StyledTitle>
          <StyledInnerDiv>
            <StyledInputWrap>
              <StyledInput
                // type="сontract"
                type="text"
                name="contractNumber"
                placeholder="№"
                autoComplete="none"
                className={
                  errors.contractNumber
                    ? "invalid-border"
                    : dirtyFields.contractNumber
                    ? "valid-border"
                    : ""
                }
                {...register("contractNumber")}
              />
              {errors.contractNumber && (
                <div>
                  {/* <VscError
                    style={{
                      width: "25px",
                      height: "25px",
                      color: "red",
                      display: "flex",
                      position: "absolute",
                      top: "75%",
                      transform: "translateY(-50%)",
                      right: "12px",
                    }} */}
                  {/* /> */}
                  <StyledError>{errors.contractNumber.message}</StyledError>
                </div>
              )}
            </StyledInputWrap>
          </StyledInnerDiv>
          <StyledTitle>Ідентифікаційний номер</StyledTitle>
          <StyledInnerDiv>
            <StyledInputWrap>
              <StyledInput
                type="text"
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
                  {/* <VscError
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
                  /> */}
                  <StyledError>{errors.password.message}</StyledError>
                </div>
              )}
            </StyledInputWrap>
          </StyledInnerDiv>
          <StyledButton
            type="submit"
            disabled={
              !isValid ||
              Object.values(getValues()).some((element) => element === "")
            }
          >
            Вхід
          </StyledButton>
        </StyledFormInsight>
      </StyledForm>
      {showModal && (
        <Modal
          width={"520px"}
          padding={"24px"}
          onClose={handleCloseModal}
          showCloseButton={true}
        >
          <ModalInfoText> {errorMessage}</ModalInfoText>
        </Modal>
      )}
    </>
  );
};
