/* eslint-disable react/prop-types */
import { Button } from "../../Button/Button";
import { Modal } from "../../Modal/Modal";
import { ModalInfoText } from "../../Modal/Modal.styled";
import { useUpdatePlaylistMutation } from "../../../redux/playlistsSlice";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const PlayListControl = ({ isPublished, countTracks, playlistName }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalInfo, setIsShowModalInfo] = useState(false);

  const { playlistId } = useParams();

  const [updatePlaylist, { isSuccess, isLoading }] =
    useUpdatePlaylistMutation();

  useEffect(() => {
    if (isSuccess) {
      setIsShowModal(false);
    }
  }, [isSuccess]);

  const handleSubmit = async () => {
    const body = Object.assign({ published: isPublished ? "false" : "true" });

    await updatePlaylist({ playlistId, body })
      .unwrap()
      .then(() => {
        if (!isPublished) {
          setIsShowModalInfo(true);
        }
      });
  };

  return (
    <>
      <Button
        type={"button"}
        text={isPublished ? "Опублікований" : "Опублікувати"}
        color={isPublished ? "#D74A4A" : null}
        background={isPublished ? null : " #fff3bf"}
        disabled={countTracks ? false : true}
        display={"none"}
        marginleft={"24px"}
        padding={"6px 24px"}
        fontsize={"16px"}
        width={"140px"}
        height={"32px"}
        onClick={isPublished ? handleSubmit : () => setIsShowModal(true)}
      />
      {isShowModal && (
        <Modal
          width={"567px"}
          onClose={() => setIsShowModal(false)}
          showCloseButton={true}
          flexDirection={"column"}
        >
          <ModalInfoText>
            Чи дійсно ви хочете опублікувати плейлист &quot;{playlistName}
            &quot; ?
          </ModalInfoText>
          <div
            style={{
              display: "flex",
              gap: "24px",
              marginBottom: "24px",
              marginRight: "24px",
              justifyContent: "flex-end",
            }}
          >
            <Button
              type={"button"}
              text={"Ні"}
              display={"none"}
              padding={"12px 26px"}
              onClick={() => setIsShowModal(false)}
            />

            <Button
              type={"button"}
              text={"Так"}
              display={"none"}
              padding={"12px 26px"}
              onClick={handleSubmit}
            />
          </div>
        </Modal>
      )}
      {isShowModalInfo && (
        <Modal
          width={"567px"}
          onClose={() => setIsShowModalInfo(false)}
          showCloseButton={true}
          flexDirection={"column"}
        >
          <ModalInfoText>
            Плейлист &quot;{playlistName}
            &quot; опублікований
          </ModalInfoText>
        </Modal>
      )}
    </>
  );
};

export default PlayListControl;
