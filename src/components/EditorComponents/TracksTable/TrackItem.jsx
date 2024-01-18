/* eslint-disable react/prop-types */
import {
  TableCell,
  TrackCover,
  TableStyle,
  THeadStyle,
  TrStyle,
  TracksNotFound,
  PopUpTracksTable,
  PopUpButton,
  DotsButton,
  PopUpTracksTableWrapper,
} from "../TracksTable/TracksTable.styled";
import { SvgStyled } from "../../Button/Button.styled";
import { sToStr } from "../../../helpers/helpers";
import { BASE_URL } from "../../../constants/constants";
import { WithOutGenre } from "../../Errors/Errors";
import symbol from "../../../assets/symbol.svg";
import { useDeleteTrackInPlaylistMutation } from "../../../redux/playlistsSlice";
import { useDeleteTrackMutation } from "../../../redux/tracksSlice";
import { useState, useEffect, useRef } from "react";

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
  showPlayList,
  showData,
}) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [id, setId] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [trackId, setTrackId] = useState([]);

  const ref = useRef(null);
  const dotsButtonRef = useRef(null);

  // console.log("showData", showData);

  // console.log("REF", ref);

  // console.log("countThInThead", countThInThead);

  // console.log("isSuccessUpload", isSuccessUpload);

  // console.log("isLoadingUpload", isLoadingUpload);

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
  }, [isChecked]);

  const PopUpToogle = () => {
    setShowPopUp(!showPopUp);
  };

  const handleClickCheckBox = () => {
    setIsChecked(!isChecked);

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

  const handleClick = (e) => {
    if (dotsButtonRef.current && !dotsButtonRef.current.contains(e.target)) {
      setShowPopUp(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <TrStyle
        key={idTrack}
        style={{
          background: isChecked ? "#FFF3BF" : null,
        }}
      >
        <TableCell showData={showData[0]}>
          <input
            type="checkbox"
            name=""
            id="checkTrack"
            ref={ref}
            onClick={handleClickCheckBox}
          />
        </TableCell>

        <TableCell showData={showData[1] || false}>
          <button
            type="buton"
            onClick={
              isInPlayList
                ? () => deleteTrackInPlaylist(idTrack).unwrap()
                : () => deleteTrack(idTrack).unwrap()
            }
          >
            X
          </button>
        </TableCell>
        <TableCell showData={showData[2] || false}>
          <TrackCover
            src={BASE_URL + "/" + trackPictureURL}
            alt={trackName}
            width={55}
          />
        </TableCell>
        <TableCell showData={showData[3] || false}>{trackName}</TableCell>
        <TableCell showData={showData[4] || false}>{artist}</TableCell>
        <TableCell showData={showData[5] || false}>
          {sToStr(trackDuration)}
        </TableCell>
        <TableCell showData={showData[6] || false}>
          {trackGenre ? trackGenre.genre : <WithOutGenre />}
        </TableCell>
        <TableCell showData={showData[7] || false}>{playList}</TableCell>
        <TableCell showData={showData[8] || false}>
          {showPopUp && (
            <PopUpTracksTableWrapper>
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
            </PopUpTracksTableWrapper>
          )}
          <DotsButton
            ref={dotsButtonRef}
            type="button"
            onClick={PopUpToogle}
            // disabled={isChecked ? false : true}
          >
            <SvgStyled width="24" height="24" fillColor="black">
              <use href={`${symbol}#icon-more-dots`}></use>
            </SvgStyled>
          </DotsButton>
        </TableCell>
      </TrStyle>
    </>
  );
};

export default TrackItem;
