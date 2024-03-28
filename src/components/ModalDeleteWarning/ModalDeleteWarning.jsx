import PropTypes from "prop-types";

import { Modal } from "../Modal/Modal";
import { Button } from "../Button/Button";

import { colors } from "../../styles/vars";

import { ModalInfoText } from "../Modal/Modal.styled";

const ModalDeleteWarning = ({ text, onClick, closeModalWarning }) => {
  return (
    <>
      <Modal
        width={"500px"}
        padding={"20px"}
        onClose={() => closeModalWarning(false)}
        showCloseButton={true}
        borderColor={`${colors.errorColor}`}
        borderStyle={"solid"}
        borderWidth={"2px"}
        flexDirection={"column"}
      >
        <ModalInfoText fontSize={"20px"} marginBottom={"4px"} marginTop={"4px"}>
          {text ? text : "Text hasn't been added yet."}
        </ModalInfoText>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "space-around",
            justifySelf: "center",
          }}
        >
          <Button
            text={"Так"}
            type={"button"}
            width={"100px"}
            padding={"16px"}
            onClick={onClick}
          />
          <Button
            text={"Ні"}
            type={"button"}
            padding={"16px"}
            onClick={() => closeModalWarning(false)}
          />
        </div>
      </Modal>
    </>
  );
};

ModalDeleteWarning.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  closeModalWarning: PropTypes.func,
};

export default ModalDeleteWarning;
