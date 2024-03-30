import styled from "@emotion/styled";
import { colors } from "../../styles/vars";

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
  z-index: 999;
`;

export const ModalWindow = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  flex-direction: ${(props) => props.flexDirection};
  border-style: ${(props) => props.borderStyle || "none"};
  border-width: ${(props) => props.borderWidth || "none"};
  border-color: ${(props) => props.borderColor || "none"};

  border-radius: 15px;
  background: #7f99c0;
  position: relative;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
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

export const ButtonsModalWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  margin-right: 24px;
  margin-bottom: 24px;
`;

export const ModalInfoText = styled.div`
  font-size: ${(props) => props.fontSize || "24px"};
  line-height: 1.5;
  padding-top: ${(props) => props.paddingTop || "38px"};
  padding-bottom: ${(props) => props.paddingBottom || "38px"};
  padding-left: 22px;
  padding-right: 22px;
  margin-top: ${(props) => props.marginTop || "34px"};
  margin-bottom: ${(props) => props.marginBottom};
  text-align: center;
`;

export const ModalInfoTextBold = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-left: 4px;
  margin-right: 4px;
`;

export const TextModal = styled.p`
  color: ${colors.mainFontColor};
  display: flex;
  text-align: center;
  font-size: 24px;
  line-height: calc(28.8px / 24px);
  /* margin-bottom: 16px; */
`;
export const ModalBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;
