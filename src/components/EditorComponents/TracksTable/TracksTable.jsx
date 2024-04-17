/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import Pagination from "rc-pagination";

import localeUA from "../../../constants/paginationLocaleUA.js";
import { findPage } from "../../../helpers/helpers.js";

import TrackItem from "./TrackItem";
import { Loader, ProgressBarTracksTable } from "../../Loader/Loader";
import { ErrorNotFound, NoData } from "../../Errors/Errors";
import {
  HASNOT_BEEN_UPLOADED,
  SEARCH_FAILED,
} from "../../../constants/constants.js";

import ModalDeleteWarning from "../../ModalDeleteWarning/ModalDeleteWarning.jsx";
import ModalInfoDeleteTracks from "./ModalInfoDeleteTracks.jsx";
import ModalAddToPlaylists from "./ModalAddToPlaylists.jsx";

import { Button } from "../../Button/Button.jsx";
import SelectPageSize from "./SelectSize.jsx";

import {
  setPreloadSrcPlayer,
  setLastTrack,
  setNextPage,
  setDefaultState,
  setIsSorted,
} from "../../../redux/playerSlice";

import { useDeleteTrackInPlaylistMutation } from "../../../redux/playlistsSlice";
import { useDeleteTrackMutation } from "../../../redux/tracksSlice";
import { getPlayerState } from "../../../redux/playerSelectors.js";
import { playlistsApi } from "../../../redux/playlistsSlice";
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
  showPagination = true,
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
  const [showDeleteWarning, setShowDeleteWarning] = useState(false);
  const [selectDeleteButton, setSelectDeleteButton] = useState(null);
  const [showModalReplaceToPlaylsit, setShowModalReplaceToPlaylsit] =
    useState(false);

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

  useEffect(() => {
    if (showModalSuccesDelete) {
      setTimeout(() => closeModalDeleteSuccess(), 3500);
    }
  }, [showModalSuccesDelete]);

  const onChangePage = useCallback(
    (page) => {
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
      setTracksIdList([]);
    },

    [dispatch, onChangeCurrentPage]
  );

  const onPageSizeChange = (size) => {
    onChangeSizePage(size);
    onChangePage(1);
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
      dispatch(setIsSorted({ isSorted: true }));
    }
  }, [currentPage, dispatch, isSorted, onChangePage]);

  useEffect(() => {
    if (isSearching) {
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

  const deletingMultipleTracksInPlaylist = () => {
    if (isInPlayList) {
      const result = tracksIdList.map((id) =>
        deleteTrackInPlaylist({
          playListId,
          idTrack: id,
        }).unwrap()
      );
      promiseAll(result);
    }
    setShowDeleteWarning(false);
  };

  const deletingMultipleTracks = () => {
    const result = tracksIdList.map((id) => deleteTrack(id).unwrap());
    promiseAll(result);
    dispatch(playlistsApi.util.invalidateTags(["Playlists"]));
    setShowDeleteWarning(false);
  };

  const clearAfterDeleting = () => {
    if (currentPage !== 1) {
      dispatch(setDefaultState());
      onChangePage(1);
    }
    checkedAllFn(false);
    setTracksIdList([]);
  };

  const openModalDeleteWarning = (e) => {
    const btnID = e.currentTarget.id;
    setSelectDeleteButton(btnID);
    setShowDeleteWarning(true);
  };

  const closeModalDeleteSuccess = () => {
    setShowModalSuccesDelete(false);
    setDeleteInfo([]);
  };

  const closeModalReplaceSuccess = () => {
    setShowModalReplaceToPlaylsit(false);
    clearAfterDeleting();
    setDeselect(true);
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
              {deleteButton && isInPlayList && (
                <Button
                  type={"button"}
                  width={"200px"}
                  padding={"6px"}
                  marginright={"12px"}
                  fontsize={"16px"}
                  border={"1px solid #A4A2A2"}
                  background={"transparent"}
                  text={"Перенести з плейлисту"}
                  disabled={tracksIdList.length ? false : true}
                  onClick={() => setShowModalReplaceToPlaylsit(true)}
                />
              )}
              {deleteButton && isInPlayList && (
                <Button
                  id={"deleteFromPlaylist"}
                  type={"button"}
                  width={"200px"}
                  padding={"6px"}
                  marginright={"12px"}
                  fontsize={"16px"}
                  border={"1px solid #A4A2A2"}
                  background={"transparent"}
                  text={"Видалити з плейлисту"}
                  disabled={tracksIdList.length ? false : true}
                  onClick={openModalDeleteWarning}
                />
              )}

              {deleteButton && (
                <Button
                  id={"deleteMediateca"}
                  type={"button"}
                  width={"200px"}
                  padding={"6px"}
                  fontsize={"16px"}
                  border={"1px solid #A4A2A2"}
                  background={"transparent"}
                  text={"Видалити з медіатеки "}
                  disabled={tracksIdList.length ? false : true}
                  onClick={openModalDeleteWarning}
                />
              )}

              {isSuccess && showPagination && (
                <div
                  style={{
                    display: "flex",
                    marginLeft: "auto",
                    alignItems: "center",
                  }}
                >
                  <SelectPageSize
                    pageSize={pageSize}
                    onChange={onPageSizeChange}
                    totalPages={totalPages}
                    optionValue={[10, 20, 50, 100]}
                  />

                  <Pagination
                    // style={{ marginBottom: "24px" }}
                    defaultCurrent={1}
                    current={currentPage}
                    total={totalTracks}
                    showLessItems
                    showSizeChanger={false}
                    defaultPageSize={pageSize}
                    pageSize={pageSize}
                    hideOnSinglePage
                    onChange={(page) => onChangePage(page)}
                    // locale={localeUA}
                    showTitle
                  />
                </div>
              )}
            </div>
          </TracksTableWrapper>
        </>
      )}
      {showModalSuccesDelete && deleteInfo.length !== 0 && (
        <ModalInfoDeleteTracks
          closeModal={closeModalDeleteSuccess}
          deleteInfo={deleteInfo}
        />
      )}
      {showDeleteWarning && (
        <ModalDeleteWarning
          text={
            selectDeleteButton === "deleteFromPlaylist"
              ? "Ця операція видалить виділені пісни з плейлисту, але вони залишаться у медіатеці. Чи дійcно Ви цього бажаєте?"
              : "Ця операція видалить виділені пісни з медіатеки та плейлисту. Чи дійcно Ви цього бажаєте?"
          }
          onClick={
            selectDeleteButton === "deleteFromPlaylist"
              ? deletingMultipleTracksInPlaylist
              : deletingMultipleTracks
          }
          closeModalWarning={() => setShowDeleteWarning(false)}
        />
      )}
      {showModalReplaceToPlaylsit && (
        <ModalAddToPlaylists
          playListId={playListId}
          tracks={tracksIdList}
          replaceMany={true}
          modalClose={closeModalReplaceSuccess}
        />
      )}
    </>
  );
};

export default TracksTable;
