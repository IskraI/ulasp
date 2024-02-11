/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import symbol from "../../../assets/symbol.svg";

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
import { ErrorNotFound, NoData } from "../../Errors/Errors";
import { Button } from "../../Button/Button";

import { setSrcPlayer, stopPlay } from "../../../redux/playerSlice";
import { getPlayerState } from "../../../redux/playerSelectors";
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
}) => {
  const dispatch = useDispatch();
  const playerState = useSelector(getPlayerState);
  const tracksTableProps = {
    showTitle: showTitle ? "table-caption" : "none",
    marginTop: marginTopWrapper ? `${marginTopWrapper}` : "auto",
    showData: rows.map((rows) => (rows.showData ? true : false)),
  };

  const isLoadedTracks = playerState.isLoaded;

  const playMusic = () => {
    const trackURL = tracks.map((track) => {
      const newObject = {
        id: track._id,
        trackURL: track.trackURL,
        artist: track.artist,
        trackName: track.trackName,
      };
      return newObject;
    });

    dispatch(setSrcPlayer(trackURL));
  };

  const stopMusic = () => {
    dispatch(stopPlay([]));
  };

  return (
    <>
      {error && <ErrorNotFound error={error?.data?.message} />}
      {tracks?.length === 0 && !isLoading && !error && (
        <NoData text={"Музика ще не завантажена"} textColor={"grey"} />
      )}

      {isSuccess && !error && tracks?.length !== 0 && (
        <>
          <Button
            onClick={() => (!isLoadedTracks ? playMusic() : stopMusic())}
            type={"button"}
            width={"250px"}
            height={"50px"}
            padding={"16px"}
            margintop={"12px"}
            text={isLoadedTracks ? "Зупинити" : "Грати музику"}
            showIcon={"true"}
            // icon={`${symbol}#icon-play`}
            icon={
              isLoadedTracks
                ? `${symbol}#icon-stop-play`
                : `${symbol}#icon-play`
            }
          />
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
                  (
                    {
                      _id,
                      trackPictureURL,
                      trackName,
                      artist,
                      trackDuration,
                      playList,
                      trackURL,
                    },
                    index
                  ) => {
                    return (
                      <TrackItem
                        key={_id}
                        index={index}
                        isCheckedAll={isCheckedAll}
                        checkBox={checkBox}
                        idTrack={_id}
                        countThInThead={rows.length}
                        disButtonPopUp={true}
                        trackURL={trackURL}
                        trackPictureURL={trackPictureURL}
                        trackName={trackName}
                        artist={artist}
                        trackDuration={trackDuration}
                        playListGenre={playListGenre}
                        playLists={playList}
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
