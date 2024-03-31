import { useNavigate } from "react-router-dom";
import { PathText, BackLink, PathContainer } from "./BackButton.styled";
import symbol from "../../../assets/symbol.svg";

export const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <PathContainer>
      <BackLink onClick={goBack}>
        <svg className="icon" width="24" height="24">
          <use
            href={`${symbol}#icon-arrow`}
            width="24"
            height="24"
            fill="#17161C"
          ></use>
        </svg>
      </BackLink>
      <PathText>Назад</PathText>
    </PathContainer>
  );
};

export default BackButton;
