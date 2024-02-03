/* eslint-disable react/prop-types */
import {
  TracksTableWrapper,
  TableCell,
  ThTitle,
  TrackCover,
  TableStyle,
  THeadStyle,
  TrStyle,
  TracksTitle,
  TracksNotFound,
} from "../TracksTable/TracksTableUser.styled";
import TrackItem from "./TrackItemUser";
import { ERROR_NOT_FOUND } from "../../../constants/constants";
import { ProgressBarTracksTable } from "../../Loader/Loader";
import { ErrorNotFound } from "../../Errors/Errors";
import { useEffect, useRef, useState } from "react";
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
  checkBox,
  isInPlayList,
  playListId,
  playListGenre,
  isCheckedAll,
  dataUpload,
  isErrorUpload,
  isSuccessUpload,
  isLoadingUpload,
  errorUpload,
  isUninitialized,
  showData,
}) => {
  const tracksTableProps = {
    showTitle: showTitle ? "table-caption" : "none",
    marginTop: marginTopWrapper ? `${marginTopWrapper}` : "auto",
    showData: rows.map((rows) => (rows.showData ? true : false)),
  };

  const [widthP, setWidthP] = useState(null);

  const rowTitleRef = useRef(null);

  useEffect(() => {
    // console.log(rowTitleRef.current.offsetParent.offsetWidth);
    // rowTitleRef.current.offsetParent.offsetWidth =
    // const widthRow = rowTitleRef.current.offsetWidth + "500";
    // setWidthP(widthRow);
  }, []);

  // console.log("new songs пропс пришел в тейблюзер", tracks);
  return (
    <>
      {error && <TracksNotFound>{ERROR_NOT_FOUND}</TracksNotFound>}
      {tracks?.length === 0 && !isLoading && !error && (
        <TracksNotFound>Музика ще не завантажена</TracksNotFound>
      )}

      {isSuccess && !error && tracks?.length !== 0 && (
        <>
          <TracksTableWrapper marginTop={tracksTableProps.marginTop}>
            <TableStyle>
              <TracksTitle showTitle={tracksTableProps.showTitle}>
                {title}
              </TracksTitle>
              <THeadStyle>
                <tr>
                  {rows.map((row, rowindex) => {
                    return (
                      <ThTitle
                        key={rowindex}
                        widthTh={row.titleSize}
                        index={rowindex + 1}
                        showData={row.showData}
                      >
                        {row.title}
                      </ThTitle>
                    );
                  })}
                </tr>
              </THeadStyle>
              <tbody>
                {isLoadingUpload && (
                  <TrStyle>
                    <TableCell
                      showData={true}
                      colSpan={rows.length}
                      style={{ textAlign: "center" }}
                    >
                      <ProgressBarTracksTable />
                    </TableCell>
                  </TrStyle>
                )}
                {isErrorUpload && (
                  <TrStyle>
                    <TableCell
                      showData={true}
                      colSpan={rows.length}
                      style={{ textAlign: "center" }}
                    >
                      <ErrorNotFound error={errorUpload?.data.message} />
                    </TableCell>
                  </TrStyle>
                )}
                {tracks.map(
                  ({
                    _id,
                    trackPictureURL,
                    trackName,
                    artist,
                    trackDuration,
                    playList,
                  }) => {
                    return (
                      <TrackItem
                        key={_id}
                        isCheckedAll={isCheckedAll}
                        checkBox={checkBox}
                        idTrack={_id}
                        countThInThead={rows.length}
                        disButtonPopUp={true}
                        trackPictureURL={trackPictureURL}
                        trackName={trackName}
                        artist={artist}
                        trackDuration={trackDuration}
                        playListGenre={playListGenre}
                        playLists={playList}
                        showPlayList={true}
                        display={display}
                        isInPlayList={isInPlayList}
                        playListId={playListId}
                        isErrorUpload={isErrorUpload}
                        isSuccessUpload={isSuccessUpload}
                        isLoadingUpload={isLoadingUpload}
                        errorUpload={errorUpload}
                        isUninitialized={isUninitialized}
                        showData={tracksTableProps.showData}
                      />
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
