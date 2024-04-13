import PropTypes from "prop-types";

import { Modal } from "../../Modal/Modal";

import PlaylistsForAdd from "../../UserMediaComponent/PlayLists/PlayListsForAddUser";
const AddTracksUser = ({ idTrack, handleCloseModal }) => {
  return (
    <>
      <Modal
        width={"85vw"}
        height={"80vh"}
        padding={"14px"}
        borderColor={"#FFF3BF"}
        borderStyle={"solid"}
        borderWidth={"1px"}
        onClose={handleCloseModal}
        showCloseButton={true}
      >
        <div
          style={{
            marginTop: "10px",
            padding: "6px",
            width: "100%",
            height: "100%",
            overflowY: "auto",
          }}
        >
          <PlaylistsForAdd
            title={`Оберіть плейлист та додайте пісню чи створіть новий плейлист`}
            trackId={idTrack}
          />
        </div>
      </Modal>
    </>
  );
};

AddTracksUser.propTypes = {
  idTrack: PropTypes.string,
  handleCloseModal: PropTypes.func,
};

export default AddTracksUser;
