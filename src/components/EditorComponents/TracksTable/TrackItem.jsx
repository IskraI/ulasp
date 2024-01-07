import {
  TableCell,
  RowTitle,
  TrackCover,
  TableStyle,
  THeadStyle,
  TrStyle,
  LatestTracks,
  TracksNotFound,
  PopUpTracksTable,
  PopUpButton,
} from "../TracksTable/TracksTable.styled";

import { useDeleteTrackInPlaylistMutation } from "../../../redux/playlistsSlice";
import { useMemo, useState, useEffect } from "react";

const TrackItem = ({ idTrack, disButtonPopUp, isCheked }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [id, setId] = useState(null);

  //   let YYYY;

  useEffect(() => {
    if (id === null) {
      return;
    }

    if (id !== idTrack) {
      const YYYY = false;
      //   console.log(YYYY);
    }
  }, [id, idTrack]);

  const test = useMemo(() => {
    // console.log(id);
    // console.log(idTrack);
    if (id === null) {
      //   console.log("id === null");

      return false;
    }

    if (id == idTrack) {
      //   console.log("id !==");

      return true;
    }

    if (!showPopUp) {
      //   console.log("PopUp false");
      return false;
    }
    // return false;
  }, [id, idTrack, showPopUp]);

  //   console.log("test", test);

  //   const tracksState = [
  //     { id: "6596ca80943eb1e7960d763f", visible: false },
  //     { id: "6582f41e0769413f9060a492", visible: true },
  //   ];

  //   const tracksState = { id: "6596ca80943eb1e7960d763f", visible: false };

  //   console.log(showPopUp.id === id);
  //   console.log("showPopUp", showPopUp);
  //   console.log("id", id);

  const [deleteTrack, {all}] = useDeleteTrackInPlaylistMutation();

  const PopUpToogle = () => {
    // setShowPopUp((prevShow) => !showPopUp[0].visible);
    // setShowPopUp((prevShow) => ({
    //   ...prevShow,

    //   id: idTrack,
    //   visible: !prevShow.visible,
    // }));
    setId(idTrack);
    setShowPopUp((prev) => !showPopUp);
    // if (setShowPopUp !== showPopUp) {
    //   //   console.log(false);
    //   setShowPopUp((prevShow) => ({
    //     ...prevShow,

    //     id: idTrack,
    //     visible: !prevShow.visible,
    //   }));
    // }

    // if (showPopUp.id !== setId(idTrack)) {
    //   setShowPopUp((prevShow) => ({
    //     ...prevShow,

    //     id: idTrack,
    //     visible: !prevShow.visible,
    //   }));
    // }

    // if (id !== setId) {
    //   setShowPopUp(false);
    // }
  };

  //   const visibleButtons = id !== idTrack ?? id === null ?? !showPopUp;

  //   console.log("visibleButtons", visibleButtons);

  //   console.log("func ", test());

  return (
    <TableCell>
      <div style={{ position: "relative" }}>
        <button
          type="buton"
          // disabled={isCheked ? false : disButtonPopUp}
          onClick={() => PopUpToogle()}
        >
          ***
        </button>
        {showPopUp && (
          <PopUpTracksTable>
            <PopUpButton
              type="button"
              onClick={() => deleteTrack(idTrack).unwrap()}
            >
              Видалити з медіатеки
            </PopUpButton>
            <PopUpButton type="button">Додати до плейлисту</PopUpButton>
            <PopUpButton type="button">Перенести до плейлисту</PopUpButton>
          </PopUpTracksTable>
        )}
      </div>
    </TableCell>
  );
};

export default TrackItem;
