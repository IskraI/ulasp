/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import TrackItem from "./TrackItemUser";
import { ErrorNotFound, NoData } from "../../Errors/Errors";

import { setSrcPlayer } from "../../../redux/playerSlice";

import {
  TracksTableWrapper,
  ThTitle,
  TableStyle,
  THeadStyle,
  TracksTitle,
} from "../TracksTable/TracksTableUser.styled";

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
  const tracksTableProps = {
    showTitle: showTitle ? "table-caption" : "none",
    marginTop: marginTopWrapper ? `${marginTopWrapper}` : "auto",
    showData: rows.map((rows) => (rows.showData ? true : false)),
  };

  useEffect(() => {
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
  }, [dispatch, tracks]);

  // console.log("new songs пропс пришел в тейблюзер", tracks);
  return (
    <>
      {error && <ErrorNotFound error={error?.data?.message} />}
      {tracks?.length === 0 && !isLoading && !error && (
        <NoData text={"Музика ще не завантажена"} textColor={"grey"} />
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
