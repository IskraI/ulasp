import React from "react";
import { useReactToPrint } from "react-to-print";

export const ButtonPrint = ({ targetComponent }) => {
  const handlePrint = useReactToPrint({
    content: () => targetComponent && targetComponent.current,
  });

  return <button onClick={handlePrint}>Распечатать</button>;
};
