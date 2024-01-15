/* eslint-disable react/prop-types */
import {
  ERROR_NOT_FOUND,
  SERVER_ERROR,
  SERVER_ERROR_M,
} from "../../constants/constants";
import { ErrorWrapper, ErrorText } from "./errors.styled";

import error500 from "../../assets/error500.png";

export const ErrorNotFound = ({ error }) => {
  return <ErrorWrapper>{error || ERROR_NOT_FOUND}</ErrorWrapper>;
};

export const WithOutGenre = () => {
  return <p style={{ fontWeight: "500", fontSize: "16px" }}>без жанру</p>;
};

export const Error500 = () => {
  return (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <img src={error500} alt="ServerError" width={"300px"} />
      <ErrorWrapper>{SERVER_ERROR}</ErrorWrapper>

      <ErrorText>{SERVER_ERROR_M}</ErrorText>
    </div>
  );
};
