/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import Pagination from "rc-pagination";

import localeUA from "../../../constants/paginationLocaleUA.js";

import TrackItemModal from "./TrackItemModalUser.jsx";
import { ErrorNotFound } from "../../Errors/Errors.jsx";
import { Button } from "../../Button/Button.jsx";

import { useAddTrackToPlaylistUserMutation } from "../../../redux/playlistsUserSlice";
import { tracksUserApi } from "../../../redux/tracksUserSlice.js";

import {
  TracksTableWrapper,
  ThTitle,
  TableStyle,
  THeadStyle,
} from "./TracksTableModalUser.styled.js";

import symbol from "../../../assets/symbol.svg";

import "../../../styles/pagination.css";
import "../../../styles/rc-select.css";

const TracksTableModalUser = ({
  rows,
  tracks,
  totalTracks,
  isLoading,
  isSuccess,
  isFetching,
  error,
  display,
  title,
  showTitle,
  marginTopWrapper,
  isInPlayList,
  playListId,
  playListGenre,

  onChangeCurrentPage,
  onChangeSizePage,
  currentPage,
  pageSize,

  isSearchResultFail,
  isSearching,
  loaderHeight,

  refetch,
}) => {
  const [addTracks, { isLoading: isLoadingAddTrackToPlaylist }] =
    useAddTrackToPlaylistUserMutation();

  const dispatch = useDispatch();

  const tracksTableProps = {
    showTitle: showTitle ? "table-caption" : "none",
    marginTop: marginTopWrapper ? `${marginTopWrapper}` : "auto",
    showData: rows.map((rows) => (rows.showData ? true : false)),
  };

  const [tracksIdList, setTracksIdList] = useState([]);
  const [showMessageSuccess, setShowMessageSuccess] = useState(false);

  console.log("tracksIdList", tracksIdList);

  const skip = (currentPage - 1) * pageSize;

  const addTrackToCheckedList = (data) => {
    setTracksIdList((prev) => [...prev, data]);
  };

  const deleteCheckedTrackId = (data) => {
    setTracksIdList((prev) =>
      prev.filter((item) => {
        return item !== data;
      })
    );
  };

  const addingMultipleTracks = () => {
    console.log(tracksIdList);
    addTracks({ playListId, tracksIdList })
      .then(() => {
        setTracksIdList([]);
      })
      .finally(() =>
        setTimeout(
          () => dispatch(tracksUserApi.util.invalidateTags(["Tracks"])),
          1000
        )
      );
    setShowMessageSuccess(true);
  };

  if (showMessageSuccess) {
    return (
      <div
        style={{
          marginTop: "auto",
          marginBottom: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="134px" height="134px" fill="green">
          {<use href={`${symbol}#icon-check-in`}></use>}
        </svg>
      </div>
    );
  }
  return (
    <>
      {error && <ErrorNotFound error={error?.data?.message} />}
      {!error && isSuccess && tracks?.length !== 0 && (
        <>
          <TracksTableWrapper marginTop={tracksTableProps.marginTop}>
            <TableStyle>
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
                      isTopChart,
                    },
                    index
                  ) => {
                    return (
                      <TrackItemModal
                        key={_id}
                        index={index}
                        idTrack={_id}
                        countThInThead={rows.length}
                        trackURL={trackURL}
                        isTopChart={isTopChart}
                        trackPictureURL={trackPictureURL}
                        trackName={trackName}
                        artist={artist}
                        trackDuration={trackDuration}
                        playListGenre={playListGenre}
                        playLists={playList}
                        display={display}
                        isInPlayList={isInPlayList}
                        playListId={playListId}
                        showData={tracksTableProps.showData}
                        countOfSkip={skip}
                        deleteCheckedTrackId={deleteCheckedTrackId}
                        addTrackToCheckedList={addTrackToCheckedList}
                      />
                    );
                  }
                )}
              </tbody>
            </TableStyle>
            <Button
              type={"button"}
              width={"140px"}
              padding={"6px"}
              fontsize={"16px"}
              border={"1px solid #A4A2A2"}
              background={"transparent"}
              text={"Додати"}
              disabled={tracksIdList.length ? false : true}
              onClick={addingMultipleTracks}
            />
          </TracksTableWrapper>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "auto",
            }}
          >
            {isSuccess && (
              <Pagination
                defaultCurrent={1}
                current={currentPage}
                total={totalTracks}
                showLessItems
                showSizeChanger={false}
                defaultPageSize={pageSize}
                pageSize={pageSize}
                hideOnSinglePage
                onChangeSizePage={onChangeSizePage}
                onChange={(page) => onChangeCurrentPage(page)}
                locale={localeUA}
              />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default TracksTableModalUser;
