import PropTypes from "prop-types";

import { useEffect, useState } from "react";

import { Modal } from "../../Modal/Modal";
import { Button } from "../../Button/Button";
import { PlaylistList } from "../PlayLists/PlayLists.styled";
import ModalPlayListItem from "./ModalPlayListItem";

import {
  useGetPlaylistsWithoutTrackQuery,
  useDeleteTrackInPlaylistMutation,
} from "../../../redux/playlistsSlice";
import { useAddTrackToPlaylistsMutation } from "../../../redux/tracksSlice";
import {
  useReplaceTracksToPlaylistsMutation,
  useGetLatestPlaylistsQuery,
} from "../../../redux/playlistsSlice";
import { ModalInfoText } from "../../Modal/Modal.styled";

const ModalAddToPlaylists = ({
  idTrack,
  playListId,
  tracks,
  replaceTrack,
  replaceMany,
  modalClose,
}) => {
  const selectReduxQuery = replaceMany
    ? useGetLatestPlaylistsQuery
    : useGetPlaylistsWithoutTrackQuery;

  const { data, isSuccess } = selectReduxQuery(
    replaceMany ? { withoutPlaylist: playListId } : { id: idTrack }
  );

  const [addTrack, { isSuccess: isSuccessAddTrack }] =
    useAddTrackToPlaylistsMutation();

  const [replaceTracks, { isUninitialized }] =
    useReplaceTracksToPlaylistsMutation();

  const [deleteTrackInPlaylist] = useDeleteTrackInPlaylistMutation();
  const [selectedPlaylists, setSelectedPlaylists] = useState([]);
  const [showModalSuccess, setShowModalSuccess] = useState(false);

  useEffect(() => {
    if (isSuccessAddTrack || !isUninitialized) {
      setShowModalSuccess(true);
      setTimeout(() => {
        setShowModalSuccess(false);
        modalClose(false);
      }, 2000);
    }
  }, [isSuccessAddTrack, isUninitialized, modalClose]);

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

  const replaceTrackToPlaylist = () => {
    addTrack({ id: idTrack, idPlaylists: selectedPlaylists }).then(() => {
      deleteTrackInPlaylist({
        playListId,
        idTrack,
      }).unwrap();
    });
  };

  const replaceManyTracksToPlaylists = () => {
    replaceTracks({
      idPlaylistFrom: playListId,
      tracks,
      playlists: selectedPlaylists,
    }).unwrap();
  };

  return (
    isSuccess && (
      <>
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
              text={replaceTrack || replaceMany ? "Перенести" : "Додати"}
              marginleft={"6px"}
              padding={"6px"}
              width={"150px"}
              disabled={!selectedPlaylists.length}
              onClick={
                replaceTrack
                  ? replaceTrackToPlaylist
                  : replaceMany
                  ? replaceManyTracksToPlaylists
                  : addTrackToPlaylist
              }
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
              {data?.map(({ _id, playListName, playListAvatarURL }) => {
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
        {showModalSuccess && (
          <Modal width={"400px"} height={"50px"}>
            <ModalInfoText marginTop={"0"}>
              {replaceMany || replaceTrack
                ? "Успішно перенесено"
                : "Успішно додано"}
            </ModalInfoText>
          </Modal>
        )}
      </>
    )
  );
};

ModalAddToPlaylists.propTypes = {
  idTrack: PropTypes.string,
  playListId: PropTypes.string,
  tracks: PropTypes.array,
  replaceTrack: PropTypes.bool,
  replaceMany: PropTypes.bool,
  modalClose: PropTypes.func,
};

export default ModalAddToPlaylists;
