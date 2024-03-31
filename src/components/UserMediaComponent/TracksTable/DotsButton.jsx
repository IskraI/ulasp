import PropTypes from "prop-types";

import { useEffect, useRef } from "react";

import { SvgStyled } from "../../Button/Button.styled";
import { DotsButton } from "./DotsButton.styled";
const DotsBtn = ({ popUpToogle, disablePopUp, isChecked, icon }) => {
  const dotsButtonRef = useRef(null);

  useEffect(() => {
    const handleClickDotsButton = (e) => {
      if (dotsButtonRef.current && !dotsButtonRef.current.contains(e.target)) {
        disablePopUp();
      }
    };
    document.addEventListener("click", handleClickDotsButton);
    return () => {
      document.removeEventListener("click", handleClickDotsButton);
    };
  }, [disablePopUp]);

  return (
    <DotsButton
      ref={dotsButtonRef}
      type="button"
      onClick={popUpToogle}
      disabled={isChecked ? true : false}
    >
      <SvgStyled
        showIcon={true}
        width="24"
        height="24"
        fillColor={isChecked ? "#CECCC180" : "#17161C"}
        strokeColor={isChecked ? "#CECCC180" : "#17161C"}
      >
        <use href={icon}></use>
      </SvgStyled>
    </DotsButton>
  );
};

DotsBtn.propTypes = {
  popUpToogle: PropTypes.func,
  disablePopUp: PropTypes.func,
  isChecked: PropTypes.bool,
  icon: PropTypes.string,
};

export default DotsBtn;
