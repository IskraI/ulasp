import PropTypes from "prop-types";

import { PathText, BackLink, PathContainer } from "./BackButton.styled";
import symbol from "../../../assets/symbol.svg";

export const BackButton = ({ backLink }) => {
  return (
    <PathContainer>
      <BackLink to={backLink || -1}>
        <svg className="icon" width="24" height="24">
          <use
            href={`${symbol}#icon-arrow`}
            width="24"
            height="24"
            fill="#17161C"
          ></use>
        </svg>
        <PathText>Назад</PathText>
      </BackLink>
    </PathContainer>
  );
};

BackButton.propTypes = {
  backLink: PropTypes.string,
};

export default BackButton;
