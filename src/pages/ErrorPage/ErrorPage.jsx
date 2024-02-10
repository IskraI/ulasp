import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SERVER_ERROR, ERROR_NOT_FOUND } from "../../constants/constants";
import { WelcomeSection } from "../WelcomePage/WelcomPage.styled";

const ErrorPage = ({ error }) => {
  const location = useLocation();
  const errorMessage = location.state.errorMessage;
  return (
    <WelcomeSection>
      {errorMessage === "FETCH_ERROR" ? SERVER_ERROR : ERROR_NOT_FOUND}
    </WelcomeSection>
  );
};

export default ErrorPage;
