/* eslint-disable react/prop-types */
import {
  TableCell,
  RowTitle,
  TrackCover,
  TableStyle,
  THeadStyle,
  TrStyle,
  TracksNotFound,
  PopUpTracksTable,
  PopUpButton,
} from "../TracksTable/TracksTable.styled";
import { sToStr } from "../../../helpers/helpers";
import { BASE_URL } from "../../../constants/constants";
import { WithOutGenre } from "../../Errors/Errors";
import { useDeleteTrackInPlaylistMutation } from "../../../redux/playlistsSlice";
import { useDeleteTrackMutation } from "../../../redux/tracksSlice";
import { useMemo, useState, useEffect, useRef } from "react";

const arr = [];

const TrackItem = ({
  idTrack,
  trackPictureURL,
  trackName,
  artist,
  trackDuration,
  trackGenre,
  playList,
  checkBox,
  display,
  isInPlayList,
  isCheckedAll,
}) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [id, setId] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [trackId, setTrackId] = useState([]);

  const ref = useRef(null);

  // console.log("REF", ref);

  // console.log("tableCellRef", tableCellRef);

  const [
    deleteTrack,
    { data: dataDeleteTrack, isSuccess: isSuccessDeleteTrack },
  ] = useDeleteTrackMutation();
  const [
    deleteTrackInPlaylist,
    {
      data: dataDeleteTrackInPlaylist,
      isSuccess: isSuccessDeleteTrackInPlaylist,
    },
  ] = useDeleteTrackInPlaylistMutation();

  useEffect(() => {
    if (isCheckedAll && ref?.current !== null) {
      setIsChecked(true);
      ref.current.checked = true;
      // arr.splice(0, arr.length);
      arr.push(idTrack);
      // console.log(arr);
    }
    if (!isCheckedAll && ref?.current !== null) {
      setIsChecked(false);
      ref.current.checked = false;
      arr.splice(0, arr.length);
      // console.log(arr);
    }
    if (isSuccessDeleteTrack || isSuccessDeleteTrackInPlaylist) {
      setShowPopUp(false);
    }
  }, [
    idTrack,
    isCheckedAll,
    isSuccessDeleteTrack,
    isSuccessDeleteTrackInPlaylist,
  ]);

  useEffect(() => {
    if (isChecked === false) {
      setShowPopUp(false);
    }

    // tableCellRef.current.children.map((child) => console.log(child));
    // console.log("tableCellRefWidth", tableCellRef.current.clientWidth);
  }, [isChecked]);

  const PopUpToogle = () => {
    setShowPopUp((prev) => !showPopUp);
  };

  const handleClickCheckBox = () => {
    setIsChecked((prev) => !isChecked);

    // setId(idTrack);

    setTrackId(idTrack);

    console.log("Кликнули");

    // if (arr.includes(idTrack)) {
    //   console.log("arr", arr);

    //   const indexTrack = arr.indexOf(idTrack);
    //   console.log(indexTrack);
    //   arr.splice(indexTrack);
    //   console.log("arr", arr);

    //   // console.log("Замечательно входит");
    // } else {
    //   arr.push(idTrack);
    // }

    if (arr.includes(idTrack)) {
      console.log("arr", arr);

      const indexTrack = arr.indexOf(idTrack);
      console.log(indexTrack);
      let knife = arr.splice(0, indexTrack);
      // arr.slice(0, indexTrack);
      console.log("arr", arr);
      console.log("knife", knife);

      // knife.length === 1 ? knife.splice(0, arr.length) : null;
      // console.log("knife", knife);

      // console.log("Замечательно входит");
    } else {
      console.log("PUSH");
      arr.push(idTrack);
      console.log("arr", arr);
    }

    // console.log("arr", arr);
  };

  return (
    <>
      <TrStyle
        key={idTrack}
        style={{
          background: isChecked ? "#FFF3BF" : null,
        }}
      >
        {checkBox && (
          <TableCell>
            <input
              type="checkbox"
              name=""
              id="checkTrack"
              ref={ref}
              onClick={handleClickCheckBox}
            />
          </TableCell>
        )}
        <TableCell>
          <TrackCover
            src={BASE_URL + "/" + trackPictureURL}
            alt={trackName}
            width={55}
          />
        </TableCell>
        <TableCell>{trackName}</TableCell>
        <TableCell>{artist}</TableCell>
        <TableCell>{sToStr(trackDuration)}</TableCell>
        <TableCell>
          {trackGenre ? trackGenre.genre : <WithOutGenre />}
        </TableCell>
        <TableCell style={{ display }}>{playList}</TableCell>
        {/* <TableCell style={{ display }}>***</TableCell> */}
        <TableCell style={{ display }}>
          <button type="buton" onClick={() => deleteTrack(idTrack).unwrap()}>
            X
          </button>
        </TableCell>
        <TableCell>
          <div style={{ position: "relative" }}>
            <button
              type="buton"
              // disabled={isChecked ? false : true}
              onClick={() => PopUpToogle()}
            >
              ***
            </button>
            {showPopUp && (
              <PopUpTracksTable>
                <PopUpButton
                  type="button"
                  onClick={
                    isInPlayList
                      ? () => deleteTrackInPlaylist(idTrack).unwrap()
                      : () => deleteTrack(idTrack).unwrap()
                  }
                >
                  Видалити з медіатеки
                </PopUpButton>
                <PopUpButton type="button">Додати до плейлисту</PopUpButton>
                <PopUpButton type="button">Перенести до плейлисту</PopUpButton>
              </PopUpTracksTable>
            )}
          </div>
        </TableCell>
      </TrStyle>
    </>
  );
};

export default TrackItem;
