import React from "react";
import { useReactToPrint } from "react-to-print";
import { ButtonPrintCustom, SvgStyled } from "./ButtonPrint.styled";
import { Button } from "../../Button/Button";
import symbol from "../../../assets/symbol.svg";
// const customToPrint = (printWindow) => {
//   const printContent =
//     printWindow.contentDocument || printWindow.contentWindow?.document;
//   const printedScrollContainer =
//     printContent.querySelector(".scroll-container");

//   const originScrollContainer = document.querySelector(".scroll-container");

//   // Set the scroll position of the printed container to match the origin container
//   printedScrollContainer.scrollTop = originScrollContainer.scrollTop;

//   // You can also set the `overflow` and `height` properties of the printed container to show all content.
//   // printedScrollContainer.style.overflow = "visible";
//   // printedScrollContainer.style.height = "fit-content";

//   printWindow.contentWindow.print();
const getPageMargins = () => {
  return `@page { margin: ${marginTop} ${marginRight} ${marginBottom} ${marginLeft} !important; }`;
};

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
      marginleft={`24px`}
      margintop={`24px`}
      ariaLabel={`print`}
      fillColor={"rgba(23, 22, 28, 1)"}

      //   type={"button"}
      //   width={`24px`}
      //   height={`24px`}
    >
      <SvgStyled
        width="24"
        height="24"

        // fillColor={fillColor}
        // strokeColor={strokeColor}
      >
        <use href={`${symbol}#icon-Print`}></use>
      </SvgStyled>
    </ButtonPrintCustom>
  );
};
