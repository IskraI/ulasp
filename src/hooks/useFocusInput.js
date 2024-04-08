import { useRef } from "react";

const useFocusInput = (isNeed) => {
  const ref = useRef(null);
  if (isNeed) {
    ref?.current?.focus();
  }

  return [ref];
};

export default useFocusInput;
