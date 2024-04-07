/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";

import Pagination from "rc-pagination";
import Select from "rc-select";

import localeUA from "../../../constants/paginationLocaleUA.js";
import { findPage } from "../../../helpers/helpers.js";

import TrackItem from "./TrackItem";
import { Loader, ProgressBarTracksTable } from "../../Loader/Loader";
import { ErrorNotFound, NoData } from "../../Errors/Errors";
import {
  HASNOT_BEEN_UPLOADED,
  SEARCH_FAILED,
} from "../../../constants/constants.js";
import { Modal } from "../../Modal/Modal.jsx";
import { ModalInfoText, ModalInfoTextBold } from "../../Modal/Modal.styled.jsx";

import { Button } from "../../Button/Button.jsx";

import {
  setPreloadSrcPlayer,
  setLastTrack,
  setNextPage,
  setDefaultState,
} from "../../../redux/playerSlice";

import { useDeleteTrackInPlaylistMutation } from "../../../redux/playlistsSlice";
import { useDeleteTrackMutation } from "../../../redux/tracksSlice";
import { getPlayerState } from "../../../redux/playerSelectors.js";

import {
  TracksTableWrapper,
  TableCell,
  ThTitle,
  TableStyle,
  THeadStyle,
  TrStyle,
  TracksTitle,
} from "../TracksTable/TracksTable.styled";

import "../../../styles/pagination.css";
import "../../../styles/rc-select.css";

const TracksTable = ({
  rows,
  tracks,
  tracksSRC,
  totalTracks,
  isLoading,
  isSuccess,
  isFetching,
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
  checkedAllFn,
  dataUpload,
  isErrorUpload,
  isSuccessUpload,
  isLoadingUpload,
  errorUpload,
  isUninitialized,
  onChangeCurrentPage,
  onChangeSizePage,
  currentPage,
  pageSize,
  totalPages,
  isSorted,
  isSearchResultFail,
  isSearching,
  deleteButton = true,
}) => {
  const [
    deleteTrack,
    {
      data: dataDeleteTrack,
      isSuccess: isSuccessDeleteTrack,
      isLoading: isLoadingDeleteTrack,
    },
  ] = useDeleteTrackMutation();
  const [
    deleteTrackInPlaylist,
    {
      data: dataDeleteTrackInPlaylist,
      isSuccess: isSuccessDeleteTrackInPlaylist,
      isLoading: isLoadingDeleteTrackInPlayList,
    },
  ] = useDeleteTrackInPlaylistMutation();

  const dispatch = useDispatch();
  const location = useLocation();
  const playerState = useSelector(getPlayerState);
  const [tracksIdList, setTracksIdList] = useState([]);
  const [deselect, setDeselect] = useState(true);
  const [showModalSuccesDelete, setShowModalSuccesDelete] = useState(false);
  const [deleteInfo, setDeleteInfo] = useState([]);

  const tracksTableProps = {
    showTitle: showTitle ? "table-caption" : "none",
    marginTop: marginTopWrapper ? `${marginTopWrapper}` : "auto",
    showData: rows.map((rows) => (rows.showData ? true : false)),
  };

  const skip = (currentPage - 1) * pageSize;

  const preloadPlayerSRC = playerState.preloadSrc;
  const playerSRC = playerState.src;
  const isPlaying = playerState.isPlaying;
  const currentPageGlobalState = playerState.currentPage;
  const anyMorePages = totalPages > currentPage;

  const currentPageForTrackPlaying = findPage(playerState.indexTrack, pageSize);

  const indexOfLastTrackInPage =
    pageSize !== tracks.length
      ? tracks.length - 1 + skip
      : currentPageForTrackPlaying * pageSize - 1;

  const lastTrackInPage = playerState.indexTrack === indexOfLastTrackInPage;
  // console.log("pageSize", pageSize);
  // console.log("pageSize === tracks.length", pageSize === tracks.length);

  // console.log("tracks.length - 1 + skip", tracks.length - 1 + skip);
  // console.log(
  //   "currentPageForTrackPlaying * pageSize - 1",
  //   currentPageForTrackPlaying * pageSize - 1
  // );
  // console.log("Длинна", tracks.length);
  // console.log("tracks.length - 1 + skip", tracks.length - 1 + skip);
  // console.log("currentPageForTrackPlaying", currentPageForTrackPlaying);
  // console.log("playerState.indexTrack", playerState.indexTrack);
  // console.log("indexOfLastTrackInPage", indexOfLastTrackInPage);

  const onChangePage = useCallback(
    (page) => {
      // setCurrentPage(page);
      onChangeCurrentPage(page);
      dispatch(
        setNextPage({
          currentPage: page,
        })
      );
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
      // checkedAllFn(false);
      setTracksIdList([]);
    },

    [dispatch, onChangeCurrentPage]
  );

  const onPageSizeChange = (size) => {
    console.log(size);
    // setPageSize(size);
    onChangeSizePage(size);
  };

  useEffect(() => {
    if (currentPage === 1 && !isFetching) {
      const trackURL = tracksSRC.map((track) => {
        const transformTrackObject = {
          id: track._id,
          trackURL: track.trackURL,
          artist: track.artist,
          trackName: track.trackName,
        };
        return transformTrackObject;
      });
      dispatch(
        setPreloadSrcPlayer({
          preloadSrc: trackURL,
          currentPage: currentPage,
          pageSize: pageSize,
          location: location.pathname,
        })
      );
    }

    // console.log(currentPage);
    // console.log(currentPageGlobalState);

    if (currentPage !== currentPageGlobalState && !isFetching) {
      if (location.pathname !== playerState.location) {
        console.log("Здесь установилось значение");
        onChangePage(currentPage);
      } else {
        console.log("Здесь установилось глобальное значение");

        onChangePage(currentPageGlobalState);
      }
    }
  }, [
    currentPage,
    currentPageGlobalState,
    dispatch,
    isFetching,
    onChangePage,
    pageSize,
    tracksSRC,
    location,
    playerState.location,
  ]);

  useEffect(() => {
    if (tracksIdList.length === tracks.length) {
      setDeselect(true);
    } else {
      setDeselect(false);
    }
  }, [isSearching, tracks.length, tracksIdList.length]);

  useEffect(() => {
    if (isSorted) {
      onChangePage(currentPage);
      setTracksIdList([]);
    }
  }, [currentPage, isSorted, onChangePage]);

  useEffect(() => {
    if (isSearching) {
      // setDeselect(false);
      // if (currentPage !== 1) {
      //   onChangePage(1);
      // }
      onChangePage(1);
      setTracksIdList([]);
      setDeselect(true);
    }
  }, [currentPage, isSearching, onChangePage]);

  useEffect(() => {
    //если страницы есть и это последний трек
    if (anyMorePages && lastTrackInPage) {
      dispatch(
        setLastTrack({
          isLastTrack: true,
          isLastPage: false,
          nextPage: currentPageForTrackPlaying + 1,
        })
      );
    }

    //если нет страниц и это последний трек
    if (!anyMorePages && lastTrackInPage) {
      currentPageForTrackPlaying === currentPage
        ? dispatch(
            setLastTrack({
              isLastTrack: true,
              isLastPage: true,
              nextPage: 1,
            })
          )
        : dispatch(
            setLastTrack({
              isLastTrack: true,
              isLastPage: true,
              nextPage: currentPageForTrackPlaying + 1,
            })
          );
      console.log("Это конец");
    }
  }, [
    anyMorePages,
    currentPage,
    currentPageForTrackPlaying,
    dispatch,
    lastTrackInPage,
  ]);

  // const onPageSizeChange = (pageSize) => {
  //   onChangeSizePage(pageSize);
  // };

  const getCheckedTrackId = (data) => {
    if (data !== undefined) {
      setTracksIdList((prev) => [...prev, data]);
    } else {
      setTracksIdList([]);
    }
  };

  const addTrackToCheckedList = (data) => {
    setTracksIdList((prev) => [...prev, data]);
    if (tracksIdList.length === tracks.length - 1) {
      checkedAllFn(true);
      isCheckedAll = true;
    }
  };

  const deleteCheckedTrackId = (data) => {
    setDeselect(false);
    checkedAllFn(false);
    setTracksIdList((prev) =>
      prev.filter((item) => {
        return item !== data;
      })
    );
  };

  const promiseAll = async (results) => {
    return await Promise.all([results]).then(
      (values) => {
        values.flat().map((value) => {
          value.then((result) => {
            setDeleteInfo((prev) => [...prev, result.object]);
          });
        });
      },
      (reason) => {
        console.log(reason);
      },
      clearAfterDeleting(),
      setShowModalSuccesDelete(true)
    );
  };

  const deletingMultipleTracks = () => {
    if (isInPlayList) {
      const result = tracksIdList.map((id) =>
        deleteTrackInPlaylist({
          playListId,
          idTrack: id,
        }).unwrap()
      );
      promiseAll(result);
    } else {
      const result = tracksIdList.map((id) => deleteTrack(id).unwrap());
      promiseAll(result);
    }
  };

  const clearAfterDeleting = () => {
    if (currentPage !== 1) {
      dispatch(setDefaultState());
      onChangePage(1);
    }
    checkedAllFn(false);
    setTracksIdList([]);
  };

  const closeModalDeleteSuccess = () => {
    setShowModalSuccesDelete(false);
    setDeleteInfo([]);
  };

  if (isFetching) {
    return <Loader />;
  }

  return (
    <>
      {error && <ErrorNotFound error={error?.data?.message} />}
      {tracks?.length === 0 && !isLoading && !error && (
        <NoData
          text={isSearchResultFail ? SEARCH_FAILED : HASNOT_BEEN_UPLOADED}
          textColor={"grey"}
        />
      )}
      {/* {isFetching && !isLoadingUpload && <Loader />} */}

      {/* {isFetching && currentPage >= 1 && <Loader />} */}

      {!error && isSuccess && tracks?.length !== 0 && (
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
                      <TrackItem
                        key={_id}
                        index={index}
                        isCheckedAll={isCheckedAll}
                        checkBox={checkBox}
                        idTrack={_id}
                        countThInThead={rows.length}
                        disButtonPopUp={true}
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
                        isErrorUpload={isErrorUpload}
                        isSuccessUpload={isSuccessUpload}
                        isLoadingUpload={isLoadingUpload}
                        errorUpload={errorUpload}
                        isUninitialized={isUninitialized}
                        showData={tracksTableProps.showData}
                        countOfSkip={skip}
                        getCheckedTrackId={getCheckedTrackId}
                        deleteCheckedTrackId={deleteCheckedTrackId}
                        addTrackToCheckedList={addTrackToCheckedList}
                        deselect={deselect}
                      />
                    );
                  }
                )}
              </tbody>
            </TableStyle>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {deleteButton && (
                <Button
                  type={"button"}
                  width={"140px"}
                  padding={"6px"}
                  fontsize={"16px"}
                  border={"1px solid #A4A2A2"}
                  background={"transparent"}
                  text={"Видалити"}
                  disabled={tracksIdList.length ? false : true}
                  onClick={deletingMultipleTracks}
                />
              )}
              {isSuccess && (
                <Pagination
                  // style={{ marginBottom: "24px" }}
                  defaultCurrent={1}
                  current={currentPage}
                  total={totalTracks}
                  showLessItems
                  selectComponentClass={Select}
                  showSizeChanger={false}
                  defaultPageSize={pageSize}
                  pageSize={pageSize}
                  hideOnSinglePage
                  // onShowSizeChange={onPageSizeChange}
                  onChangeSizePage={onPageSizeChange}
                  onChange={(page) => onChangePage(page)}
                  // locale={localeUA}
                />
              )}
            </div>
          </TracksTableWrapper>
        </>
      )}
      {showModalSuccesDelete && deleteInfo.length !== 0 && (
        <Modal
          width={"494px"}
          onClose={closeModalDeleteSuccess}
          showCloseButton={true}
        >
          <ModalInfoText paddingTop={"14px"}>
            {deleteInfo.map(({ artist, trackName }) => {
              return (
                <div
                  key={trackName}
                  style={{
                    display: "flex",
                    gap: "4px",
                    padding: "4px",
                    margin: "2px",
                  }}
                >
                  <ModalInfoTextBold>{artist}</ModalInfoTextBold>
                  <p>{"-"}</p>
                  <ModalInfoTextBold>{trackName}</ModalInfoTextBold>
                  <ModalInfoTextBold
                    style={{ fontSize: "18px", color: "#870505" }}
                  >
                    {"був видалений"}
                  </ModalInfoTextBold>
                </div>
              );
            })}
          </ModalInfoText>
        </Modal>
      )}
    </>
  );
};

export default TracksTable;
