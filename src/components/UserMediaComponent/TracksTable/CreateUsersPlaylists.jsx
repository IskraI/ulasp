import PropTypes from "prop-types";
import { useState } from "react";

import useChooseAvatar from "../../../hooks/useChooseAvatar";

import { Modal } from "../../Modal/Modal";
import ModalFormMyplaylist from "../../UserCabinetPage/ControlMyplaylists/ModalFormMyplaylist";

import { ErrorNotFound } from "../../Errors/Errors";

import { useCreatePlaylistForUserMutation } from "../../../redux/playlistsUserSlice";

import { ModalInfoText } from "../../Modal/Modal.styled";

const CreateUsersPlaylists = ({ onClose }) => {
  const [
    createPlaylist,
    { isError: isErrorCreatePlaylist, error: errorCreatePlaylist },
  ] = useCreatePlaylistForUserMutation();

  const minLength = 1;
  const maxLength = 29;

  const [showModal, setShowModal] = useState(false);
  const [showModalErrorCreate, setShowModalErrorCreate] = useState(false);

  const [avatar, chooseAvatar, resetAvatar] = useChooseAvatar();

  const formDataFunction = (data) => {
    const formData = new FormData();

    formData.append("playListName", data.playListName),
      formData.append("type", data.type),
      formData.append("picsURL", avatar);

    return formData;
  };

  const handleSubmitPlaylist = async (data) => {
    try {
      await createPlaylist(formDataFunction(data)).unwrap();
      setShowModal(true);
      setTimeout(() => onClose(), 1500);
    } catch (error) {
      setShowModalErrorCreate(true);
    }
  };

  return (
    <>
      <Modal width={"814px"} onClose={onClose} showCloseButton={true}>
        <ModalFormMyplaylist
          onSubmit={handleSubmitPlaylist}
          changePlayListAvatar={chooseAvatar}
          img={avatar}
          clearImageCover={() => resetAvatar(null)}
          idInputImg={"picsURL"}
          idInputFirst={"playListName"}
          idInputSecond={"type"}
          marginTopInputFirst="24px"
          valueInputSecond={"playlist"}
          placeholderFirst={`Назва плейлисту*`}
          cover={true}
          minLength={minLength}
          maxLength={maxLength}
        />
      </Modal>
      {showModal && (
        <Modal
          width={"25vw"}
          height={"25vh"}
          onClose={() => setShowModal(false)}
          showCloseButton={true}
        >
          <ModalInfoText fontSize={"20px"} marginBottom={"34px"}>
            Новий плейлист успішно доданий
          </ModalInfoText>
        </Modal>
      )}
      {showModalErrorCreate && (
        <Modal
          width={"25vw"}
          height={"25vh"}
          onClose={() => setShowModalErrorCreate(false)}
          showCloseButton={true}
        >
          <ModalInfoText fontSize={"20px"} marginBottom={"34px"}>
            {isErrorCreatePlaylist &&
            errorCreatePlaylist.data?.code === "4091" ? (
              <ErrorNotFound
                error={`Плейлист "${errorCreatePlaylist.data?.object}" вже використовується`}
              />
            ) : (
              <ErrorNotFound error={errorCreatePlaylist.data?.message} />
            )}
          </ModalInfoText>
        </Modal>
      )}
    </>
  );
};

CreateUsersPlaylists.propTypes = {
  onClose: PropTypes.func,
};

export default CreateUsersPlaylists;
