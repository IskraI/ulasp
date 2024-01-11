/* eslint-disable react/prop-types */
import {
  TracksTableWrapper,
  TableCell,
  RowTitle,
  TrackCover,
  TableStyle,
  THeadStyle,
  TrStyle,
  TracksTitle,
  TracksNotFound,
} from "../TracksTable/TracksTable.styled";
import TrackItem from "./TrackItem";
import { ERROR_NOT_FOUND } from "../../../constants/constants";
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
}) => {
  const tracksTableProps = {
    showTitle: showTitle ? "block" : "none",
    marginTop: marginTopWrapper ? `${marginTopWrapper}` : "auto",
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
            <TracksTitle showTitle={tracksTableProps.showTitle}>
              {title}
            </TracksTitle>
            <TableStyle>
              <THeadStyle>
                <tr>
                  {rows.map((row, rowindex) => {
                    return (
                      <RowTitle
                        key={rowindex}
                        // style={{
                        //   width: "100px",
                        // }}
                      >
                        {row}
                        {/* <p ref={rowTitleRef}>{row}</p> */}
                      </RowTitle>
                    );
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
                      <TrackItem
                        key={_id}
                        isCheckedAll={isCheckedAll}
                        checkBox={checkBox}
                        idTrack={_id}
                        disButtonPopUp={true}
                        trackPictureURL={trackPictureURL}
                        trackName={trackName}
                        artist={artist}
                        trackDuration={trackDuration}
                        trackGenre={trackGenre}
                        playList={playList?.playListName}
                        display={display}
                        isInPlayList={isInPlayList}
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
