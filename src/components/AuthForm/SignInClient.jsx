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
    formState: { errors, isValid, dirtyFields },
  } = useForm({
    mode: "onChange",
    defaultValues: { сontractNumber: "", password: "" },
    resolver: yupResolver(SignInSchema),
  });
  const [dispatch, { isLoading }] = useSignInClientMutation();

  const onSubmit = (data) => {
    const credentials = {
      contractNumber: data.сontract,
      password: data.identification,
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
            errorMessage = mappedMessage;
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
                      top: "75%",
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
                      top: "75%",
                      transform: "translateY(-50%)",
                      right: "12px",
                    }}
                  />
                  <StyledError>{errors.identification.message}</StyledError>
                </div>
              )}
            </StyledInputWrap>
          </StyledInnerDiv>
          <StyledButton type="submit" disabled={!isValid || isLoading}>
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
