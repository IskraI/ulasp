import React from "react";
import { useReactToPrint } from "react-to-print";
import { ButtonPrintCustom, SvgStyled } from "./ButtonPrint.styled";

import symbol from "../../../assets/symbol.svg";

export const ButtonPrint = ({ targetComponent }) => {
  const handlePrint = useReactToPrint({
    content: () => targetComponent && targetComponent.current,
  });

  return (
    <ButtonPrintCustom
      onClick={handlePrint}
      showIcon={true}
      icon={`${symbol}#icon-Print`}
      border={`none`}
      marginleft={`0px`}
      margintop={`20px`}
      ariaLabel={`print`}
      fillColor={"rgba(23, 22, 28, 1)"}
    >
      <SvgStyled width="24" height="24">
        <use href={`${symbol}#icon-Print`}></use>
      </SvgStyled>
    </ButtonPrintCustom>
  );
};
