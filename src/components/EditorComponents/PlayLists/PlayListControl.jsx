/* eslint-disable react/prop-types */
import { Button } from "../../Button/Button";
import { Modal } from "../../Modal/Modal";
import {
  ModalInfoText,
  ModalInfoTextBold,
  ButtonsModalWrapper,
} from "../../Modal/Modal.styled";
import { useUpdatePlaylistMutation } from "../../../redux/playlistsSlice";
import { LoaderButton } from "../../Loader/Loader";
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
    isCountTracksNull();
    async function isCountTracksNull() {
      if (!countTracks && isPublished) {
        await updatePlaylist({
          playlistId,
          body: { published: "false" },
        }).unwrap();
      }
    }
  }, [countTracks, isPublished, isSuccess, playlistId, updatePlaylist]);

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
  const LoaderBtn =
    isPublished && isLoading ? (
      <>
        <p style={{ marginRight: "4px" }}>Деактивація</p>
        <LoaderButton />
      </>
    ) : !isPublished && isLoading ? (
      <>
        <p style={{ marginRight: "4px" }}>Публікуємо</p>
        <LoaderButton />
      </>
    ) : isPublished && !isLoading ? (
      `Опублікований`
    ) : (
      `Опублікувати`
    );

  // const loaderBtn = useMemo(() => {
  //   if (isPublished && isLoading) {
  //     return (
  //       <>
  //         <p style={{ marginRight: "4px" }}>Деактивація</p>
  //         <LoaderButton />
  //       </>
  //     );
  //   }

  //   if (!isPublished && isLoading) {
  //     return (
  //       <>
  //         <p style={{ marginRight: "4px" }}>Публікуємо</p>
  //         <LoaderButton />
  //       </>
  //     );
  //   }
  //   if (isPublished && !isLoading) {
  //     return `Опублікований`;
  //   } else {
  //     return `Опублікувати`;
  //   }
  // }, [isPublished, isLoading]);

  return (
    <>
      <Button
        type={"button"}
        text={LoaderBtn}
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
            Чи дійсно ви хочете опублікувати плейлист
            <ModalInfoTextBold>&quot;{playlistName}&quot;</ModalInfoTextBold> ?
          </ModalInfoText>
          <ButtonsModalWrapper>
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
          </ButtonsModalWrapper>
        </Modal>
      )}
      {isShowModalInfo && (
        <Modal
          width={"567px"}
          onClose={() => setIsShowModalInfo(false)}
          showCloseButton={true}
        >
          <ModalInfoText marginBottom={"20px"}>
            Плейлист
            <ModalInfoTextBold>&quot;{playlistName}&quot;</ModalInfoTextBold>
            опублікований
          </ModalInfoText>
        </Modal>
      )}
    </>
  );
};

export default PlayListControl;
