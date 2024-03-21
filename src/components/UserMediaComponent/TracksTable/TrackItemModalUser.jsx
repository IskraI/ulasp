/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { sToStr } from "../../../helpers/helpers";

import { TableCell, TrStyle } from "../TracksTable/TracksTableModalUser.styled";
import { WithOutGenre } from "../../Errors/Errors";
import { InfoBlock } from "./TracksTableUser.styled";
import {
  CheckBoxLabel,
  CheckBoxInput,
  CheckBoxSpan,
  CheckBoxSVG,
} from "../../CustomCheckBox/CustomCheckBox.styled";

import symbol from "../../../assets/symbol.svg";

const TrackItemModal = ({
  idTrack,

  trackName,
  artist,
  trackDuration,
  playLists,
  showData,
  inThisPlaylist,
  addTrackToCheckedList,
  deleteCheckedTrackId,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkBoxRef = useRef(null);

  const oneGenre = playLists[0]?.playlistGenre[0]?.genre;

  const selectTrackInModal = (id) => {
    console.log(checkBoxRef.current);
    if (!checkBoxRef.current.checked) {
      checkBoxRef.current.checked = false;
      setIsChecked(false);

      deleteCheckedTrackId(id);
    } else {
      checkBoxRef.current.checked = true;
      setIsChecked(true);
      addTrackToCheckedList(id);
    }
  };

  const makeUniq = (array) => {
    const filteredGenre = {};
    const genre = array.flatMap((playlist) => playlist.playlistGenre);
    const uniqGenre = genre.filter(
      ({ genre }) => !filteredGenre[genre] && (filteredGenre[genre] = 1)
    );
    return uniqGenre;
  };
  return (
    <>
      <TrStyle
        key={idTrack}
        style={{
          background: isChecked ? "#FFF3BF" : null,
        }}
      >
        <TableCell showData={showData[0] || false}>
          <CheckBoxLabel htmlFor={idTrack}>
            <CheckBoxSpan>
              <CheckBoxSVG width="14px" height="15px">
                {isChecked && <use href={`${symbol}#icon-check-in`}></use>}
              </CheckBoxSVG>
            </CheckBoxSpan>
            <CheckBoxInput
              type="checkbox"
              id={idTrack}
              ref={checkBoxRef}
              onClick={() => {
                selectTrackInModal(idTrack);
              }}
            />
          </CheckBoxLabel>
        </TableCell>
        <TableCell showData={showData[1] || false}>{trackName}</TableCell>
        <TableCell showData={showData[2] || false}>{artist}</TableCell>
        <TableCell showData={showData[3] || false}>
          {sToStr(trackDuration)}
        </TableCell>
        <TableCell showData={showData[4] || false}>
          {makeUniq(playLists).length > 1 ? (
            makeUniq(playLists)
              .slice(0, 3)
              .map(({ _id, genre }) => (
                <InfoBlock showData={showData[4]} key={_id}>
                  {genre}
                </InfoBlock>
              ))
          ) : makeUniq(playLists).length !== 0 ? (
            <InfoBlock showData={showData[4]}>{oneGenre}</InfoBlock>
          ) : (
            <WithOutGenre />
          )}
          {makeUniq(playLists)?.length > 3 && (
            <InfoBlock showData={showData[4]}>та інші</InfoBlock>
          )}
        </TableCell>
        <TableCell showData={showData[0] || false}></TableCell>
      </TrStyle>
    </>
  );
};

export default TrackItemModal;
