import { ERROR_NOT_FOUND } from "../../constants/constants";
import { ErrorWrapper } from "./errors.styled";

export const ErrorNotFound = () => {
  return <ErrorWrapper>{ERROR_NOT_FOUND} </ErrorWrapper>;
};
