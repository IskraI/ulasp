import {
  TableCell,
  RowTitle,
  TrackCover,
  TableStyle,
  THeadStyle,
  TrStyle,
  LatestTracks,
  TracksNotFound,
  MockPlayer,
} from "../TracksTable/TracksTable.styled";
import { BASE_URL, ERROR_NOT_FOUND } from "../../constants/constants";

const TracksTable = ({ tracks, isLoading, error, display }) => {
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

      {tracks?.length !== 0 && !isLoading && !error && (
        <>
          <LatestTracks style={{ display }}>
            Остання додана музика{" "}
          </LatestTracks>
          <TableStyle>
            <THeadStyle>
              <tr style={{ display }}>
                <RowTitle></RowTitle>
                <RowTitle>Назва пісні</RowTitle>
                <RowTitle>Виконавець</RowTitle>
                <RowTitle>Тривалість</RowTitle>
                <RowTitle>Жанр</RowTitle>
                <RowTitle>Плейлист</RowTitle>
                <RowTitle></RowTitle>
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
                      <TableCell style={{ display }}>***</TableCell>
                    </TrStyle>
                  );
                }
              )}
            </tbody>
          </TableStyle>
          <MockPlayer>Тут будет плеер</MockPlayer>
        </>
      )}
    </>
  );
};

export default TracksTable;
