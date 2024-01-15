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
} from "../TracksTable/TracksTable.styled";
import TrackItem from "./TrackItem";
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
                    trackGenre,
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
                        trackGenre={trackGenre}
                        playList={playList?.playListName}
                        showPlayList={true}
                        display={display}
                        isInPlayList={isInPlayList}
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

const RowsTitle = [
  {
    title: "",
    titleSize: "2%",
    showData: true,
  },
  {
    title: "",
    titleSize: "10%",
    showData: true,
  },
  {
    title: "Назва пісні",
    titleSize: "20%",
    showData: true,
  },
  {
    title: "Виконавець",
    titleSize: "15%",
    showData: true,
  },
  {
    title: "Тривалість",
    titleSize: "12%",
    showData: true,
  },
  {
    title: "Жанр",
    titleSize: "10%",
    showData: true,
  },
  {
    title: "Плейлист",
    titleSize: "15%",
    showData: true,
  },

  {
    title: "",
    titleSize: "5%",
    showData: true,
  },
];
