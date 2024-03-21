import { createPortal } from "react-dom";
import { useEffect } from "react";
import {
  Overlay,
  ModalWindow,
  CloseBtn,
  CloseIconStyled,
} from "./Modal.styled";

import Close from "../../images/close.svg?react";

const modalRoot = document.querySelector("#modal-root");

const CloseIcon = CloseIconStyled(Close);

export const Modal = ({
  width,
  height,
  padding,
  bcgTransparent,
  showCloseButton,
  children,
  onClose,
  flexDirection,
  borderStyle,
  borderWidth,
  borderColor,
}) => {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [onClose]);

  // const handleBackdropClick = (e) => {
  //   if (e.currentTarget === e.target) onClose();
  // };

  const closeButtonStyle = {
    display: showCloseButton ? "block" : "none",
  };

  const overlayStyle = {
    backgroundColor: bcgTransparent
      ? "rgba(0, 0, 0, 0)"
      : "rgba(18, 20, 23, 0.5)",
  };

  return createPortal(
    // <Overlay onClick={handleBackdropClick} style={overlayStyle}>
    <Overlay style={overlayStyle}>
      <ModalWindow
        width={width}
        height={height}
        padding={padding}
        flexDirection={flexDirection}
        borderStyle={borderStyle}
        borderWidth={borderWidth}
        borderColor={borderColor}
      >
        <CloseBtn onClick={onClose} style={closeButtonStyle}>
          <CloseIcon />
        </CloseBtn>
        {children}
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};
