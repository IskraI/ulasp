import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalWindow = styled.div`
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  flex-direction: ${(props) => props.flexDirection};
  border-radius: 15px;
  background: #7f99c0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const CloseIconStyled = (component) => styled(component)`
  width: 24px;
  height: 24px;
`;

export const ModalInfoText = styled.p`
  padding: 37px 22px;
  font-size: 16px;
  line-height: 1.2;
`;
