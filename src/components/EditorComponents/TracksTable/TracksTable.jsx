/* eslint-disable react/prop-types */
import {
  TracksTableWrapper,
  TableCell,
  RowTitle,
  TrackCover,
  TableStyle,
  THeadStyle,
  TrStyle,
  LatestTracks,
  TracksNotFound,
} from "../TracksTable/TracksTable.styled";
import TrackItem from "./TrackItem";
import { BASE_URL, ERROR_NOT_FOUND } from "../../../constants/constants";
import { tracksTableProps } from "./TracksTableProps";

import { useDeleteTrackMutation } from "../../../redux/tracksSlice";

import { useState } from "react";

const TracksTable = ({
  rows,
  tracks,
  isLoading,
  isSuccess,
  error,
  display,
  title,
  showTitle,
  marginTopWrapper,
}) => {
  const resultProps = tracksTableProps(showTitle, marginTopWrapper);

  const [deleteTrack, { all }] = useDeleteTrackMutation();

  const [isCheked, setIsCheked] = useState(false);

  const sToStr = (sec) => {
    sec = Math.round(sec);
    let m = Math.trunc(sec / 60) + "";
    sec = (sec % 60) + "";
    return m.padStart(2, 0) + ":" + sec.padStart(2, 0);
  };

  return (
    <>
      {error && <TracksNotFound>{ERROR_NOT_FOUND}</TracksNotFound>}
      {tracks?.length === 0 && !isLoading && !error && (
        <TracksNotFound>Музика ще не завантажена</TracksNotFound>
      )}

      {isSuccess && !error && tracks?.length !== 0 && (
        <>
          <TracksTableWrapper style={resultProps[1]}>
            <LatestTracks style={resultProps[0]}>{title}</LatestTracks>
            <TableStyle>
              <THeadStyle>
                <tr>
                  {rows.map((row, rowindex) => {
                    return <RowTitle key={rowindex}>{row}</RowTitle>;
                  })}
                </tr>
              </THeadStyle>
              <tbody>
                {tracks.map(
                  ({
                    _id,
                    trackPictureURL,
                    trackName,
                    artist,
                    trackDuration,
                    trackGenre,
                    playList,
                  }) => {
                    return (
                      <TrStyle key={_id}>
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
                        <TableCell>{trackGenre}</TableCell>
                        <TableCell
                          style={{ display }}
                          onClick={() => setIsCheked(() => !isCheked)}
                        >
                          {playList?.playListName}
                        </TableCell>
                        {/* <TableCell style={{ display }}>***</TableCell> */}
                        <TableCell style={{ display }}>
                          <button
                            type="buton"
                            onClick={() => deleteTrack(_id).unwrap()}
                          >
                            X
                          </button>
                        </TableCell>
                        {/* <TableCell style={{ display }}>
                        <button
                          type="buton"
                          onClick={() => setShowPopUp(true)}
                          style={{ position: "relative" }}
                        >
                          ***
                          {showPopUp && (
                            <PopUpTracksTable>1. 2. 3.</PopUpTracksTable>
                          )}
                        </button>
                      </TableCell> */}
                        <TrackItem
                          idTrack={_id}
                          disButtonPopUp={true}
                          isCheked={isCheked}
                          // deleteTrack={() => deleteTrack()}
                        />
                      </TrStyle>
                    );
                  }
                )}
              </tbody>
            </TableStyle>
          </TracksTableWrapper>
        </>
      )}
    </>
  );
};

export default TracksTable;
