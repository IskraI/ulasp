/* eslint-disable react/prop-types */
import {
  TableCell,
  RowTitle,
  TrackCover,
  TableStyle,
  THeadStyle,
  TrStyle,
  LatestTracks,
  TracksNotFound,
} from "../TracksTable/TracksTable.styled";
import { BASE_URL, ERROR_NOT_FOUND } from "../../../constants/constants";

import { useDeleteTrackMutation } from "../../../redux/tracksSlice";

const TracksTable = ({
  rows,
  tracks,
  isLoading,
  isSuccess,
  error,
  display,
  title,
}) => {
  const [deleteTrack, { all }] = useDeleteTrackMutation();

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
          <LatestTracks>{title}</LatestTracks>
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

                      <TableCell style={{ display }}>
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
                    </TrStyle>
                  );
                }
              )}
            </tbody>
          </TableStyle>
        </>
      )}
    </>
  );
};

export default TracksTable;
