import PropTypes from "prop-types";
import { useRef, useState, useEffect } from "react";

import symbol from "../../assets/symbol.svg";

import {
  CheckBoxLabel,
  CheckBoxSpan,
  CheckBoxSVG,
  CheckBoxInput,
} from "./CustomCheckBox.styled";

const CustomCheckBox = ({ checkedAll, isCheckedAll }) => {
  const baseInputRef = useRef(null);
  const [checkedCheckBox, setCheckedCheckBox] = useState(false);

  useEffect(() => {
    if (isCheckedAll) {
      setCheckedCheckBox(true);
      baseInputRef.current.checked = true;
    } else {
      setCheckedCheckBox(false);
      baseInputRef.current.checked = false;
    }
  }, [isCheckedAll]);

  const checked = () => {
    if (baseInputRef.current.checked) {
      setCheckedCheckBox(true);
      return true;
    } else {
      setCheckedCheckBox(false);
      return false;
    }
  };

  return (
    <>
      <CheckBoxLabel htmlFor="mainInput">
        <CheckBoxSpan>
          <CheckBoxSVG width="14px" height="15px">
            {checkedCheckBox && <use href={`${symbol}#icon-check-in`}></use>}
          </CheckBoxSVG>
        </CheckBoxSpan>
        <CheckBoxInput
          type="checkbox"
          id="mainInput"
          ref={baseInputRef}
          onClick={() => {
            checkedAll(checked());
          }}
        />
      </CheckBoxLabel>
    </>
  );
};

CustomCheckBox.propTypes = {
  checkedAll: PropTypes.func,
  isCheckedAll: PropTypes.bool,
};

export default CustomCheckBox;
