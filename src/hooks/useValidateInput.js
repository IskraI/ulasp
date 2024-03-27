import { useEffect, useState } from "react";
import { getNoun } from "../helpers/helpers";

const useValidateInput = (mediaTitle, minLength, maxLength) => {
  const [showValidateError, setShowValidateError] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const minValue = getNoun(minLength, "символ", "символи", "символів");
  const maxValue = getNoun(maxLength, "символ", "символи", "символів");

  const errorValidateMin = `Мінімальна довжина ${minLength} ${minValue} `;
  const errorValidateMax = `Максимальна довжина ${maxLength} ${maxValue} `;

  useEffect(() => {
    if (!minLength || !maxLength) {
      return;
    }
    if (!mediaTitle) {
      setErrorMessage(errorValidateMin);
      return;
    }

    if (mediaTitle.length >= maxLength) {
      setShowValidateError(true);
      setErrorMessage(errorValidateMax);
    } else if (mediaTitle.length < minLength) {
      setErrorMessage(errorValidateMin);
      setShowValidateError(true);
    } else {
      setShowValidateError(false);
    }
  }, [errorValidateMax, errorValidateMin, maxLength, mediaTitle, minLength]);

  return [errorMessage, showValidateError, setShowValidateError];
};

export default useValidateInput;
