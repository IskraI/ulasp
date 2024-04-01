import PropTypes from "prop-types";

import { useState } from "react";

import { Modal } from "../../Modal/Modal";
import { Button } from "../../Button/Button";
import { PlaylistList } from "../PlayLists/PlayLists.styled";
import ModalPlayListItem from "./ModalPlayListItem";

import { useGetPlaylistsWithoutTrackQuery } from "../../../redux/playlistsSlice";
import { useAddTrackToPlaylistsMutation } from "../../../redux/tracksSlice";

const ModalAddToPlaylists = ({ idTrack, modalClose }) => {
  const { data, isSuccess } = useGetPlaylistsWithoutTrackQuery({ id: idTrack });
  const [addTrack, { isSuccess: isSuccessAddTrack }] =
    useAddTrackToPlaylistsMutation();
  const [selectedPlaylists, setSelectedPlaylists] = useState([]);

  const addToSelectedPlaylists = (data) => {
    setSelectedPlaylists((prev) => [...prev, data]);
  };

  const deleteSelectedPlaylists = (data) => {
    setSelectedPlaylists((prev) =>
      prev.filter((item) => {
        return item !== data;
      })
    );
  };

  const addTrackToPlaylist = () => {
    addTrack({ id: idTrack, idPlaylists: selectedPlaylists });
  };

  return (
    isSuccess && (
      <Modal
        width={"95vw"}
        height={"85vh"}
        padding={"26px"}
        borderColor={"#FFF3BF"}
        borderStyle={"solid"}
        borderWidth={"1px"}
        showCloseButton
        flexDirection={"column"}
        onClose={() => modalClose(false)}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "start",
            alignItems: "center",
          }}
        >
          <p
            style={{
              padding: "6px",
              fontSize: "16px",
              textAlign: "center",
            }}
          >
            Обрана кількість:
          </p>
          <p
            style={{
              width: "20px",
              fontSize: "16px",
              padding: "0px 4px",
            }}
          >
            {selectedPlaylists.length}
          </p>
          <Button
            text={"Додати"}
            marginleft={"6px"}
            padding={"6px"}
            width={"150px"}
            disabled={!selectedPlaylists.length}
            onClick={addTrackToPlaylist}
          ></Button>
        </div>

        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            width: "100%",
            height: "100%",
            overflowY: "scroll",
          }}
        >
          <PlaylistList gap={"10px"}>
            {data.map(({ _id, playListName, playListAvatarURL }) => {
              return (
                <ModalPlayListItem
                  id={_id}
                  key={_id}
                  title={playListName}
                  icon={playListAvatarURL}
                  addToSelectedPlaylists={addToSelectedPlaylists}
                  deleteSelectedPlaylists={deleteSelectedPlaylists}
                />
              );
            })}
          </PlaylistList>
        </div>
      </Modal>
    )
  );
};

ModalAddToPlaylists.propTypes = {
  idTrack: PropTypes.string,
  modalClose: PropTypes.func,
};

export default ModalAddToPlaylists;
