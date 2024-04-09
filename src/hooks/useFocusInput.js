import { useRef, useEffect } from "react";

const useFocusInput = (isNeed) => {
  const ref = useRef(null);
  useEffect(() => {
    if (isNeed) {
      ref?.current?.focus();
    }
  }, [isNeed]);

  return [ref];
};

export default useFocusInput;
