import PropTypes from "prop-types";

import { Modal } from "../../Modal/Modal";
import { ModalInfoTextBold, ModalInfoText } from "../../Modal/Modal.styled";

const ModalInfoDeleteTracks = ({ closeModal, deleteInfo = [] }) => {
  return (
    <Modal width={"494px"} onClose={closeModal} showCloseButton={true}>
      <ModalInfoText paddingTop={"14px"}>
        {deleteInfo.map(({ artist, trackName }) => {
          return (
            <div
              key={trackName}
              style={{
                display: "flex",
                gap: "4px",
                padding: "4px",
                margin: "2px",
                alignItems: "center",
              }}
            >
              <ModalInfoTextBold>{artist}</ModalInfoTextBold>
              <p>{"-"}</p>
              <ModalInfoTextBold>{trackName}</ModalInfoTextBold>
              <ModalInfoTextBold style={{ fontSize: "18px", color: "#870505" }}>
                {"був видалений"}
              </ModalInfoTextBold>
            </div>
          );
        })}
      </ModalInfoText>
    </Modal>
  );
};

ModalInfoDeleteTracks.propTypes = {
  closeModal: PropTypes.func,
  deleteInfo: PropTypes.array,
};

export default ModalInfoDeleteTracks;
