/* eslint-disable react/prop-types */
import { ERROR_NOT_FOUND } from "../../constants/constants";
import { ErrorWrapper } from "./errors.styled";

export const ErrorNotFound = ({ error }) => {
  return <ErrorWrapper>{error || ERROR_NOT_FOUND}</ErrorWrapper>;
};
