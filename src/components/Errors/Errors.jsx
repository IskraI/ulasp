/* eslint-disable react/prop-types */
import {
  ERROR_NOT_FOUND,
  SERVER_ERROR,
  SERVER_ERROR_M,
} from "../../constants/constants";
import { ErrorWrapper, ErrorText } from "./errors.styled";

import error500 from "../../assets/error500.png";

export const ErrorNotFound = ({ error, children }) => {
  return (
    <ErrorWrapper>
      <ErrorText>{error || ERROR_NOT_FOUND}</ErrorText>
      {children}
    </ErrorWrapper>
  );
};

export const WithOutGenre = () => {
  return <p style={{ fontWeight: "500", fontSize: "16px" }}></p>;
};

export const NoData = ({ text, textColor, children }) => {
  return (
    <ErrorWrapper textColor={textColor}>
      {text}
      {children}
    </ErrorWrapper>
  );
};

export const Error500 = () => {
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <img
        src={error500}
        alt="ServerError"
        width={"300px"}
        style={{ marginLeft: "auto", marginRight: "auto" }}
      />
      <ErrorWrapper>{SERVER_ERROR}</ErrorWrapper>

      <ErrorText style={{ justifyContent: "center" }}>
        {SERVER_ERROR_M}
      </ErrorText>
    </div>
  );
};
