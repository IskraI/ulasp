/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";

import Pagination from "rc-pagination";
import Select from "rc-select";

import localeUA from "../../../constants/paginationLocaleUA.js";
import { compareArray, findPage } from "../../../helpers/helpers.js";

import TrackItem from "./TrackItem";
import { Loader, ProgressBarTracksTable } from "../../Loader/Loader";
import { ErrorNotFound, NoData } from "../../Errors/Errors";

import {
  setPreloadSrcPlayer,
  setLastTrack,
  setDefaultPreloadSrc,
  setNextPage,
  setSrcPlaying,
} from "../../../redux/playerSlice";
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
}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const playerState = useSelector(getPlayerState);
  // const [currentPage, setCurrentPage] = useState(currPage);
  // const [pageSize, setPageSize] = useState(currentPageSize);

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
    pageSize > tracks.length
      ? tracks.length - 1 + skip
      : currentPageForTrackPlaying * pageSize - 1;

  const lastTrackInPage = playerState.indexTrack === indexOfLastTrackInPage;

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
    },
    [dispatch, onChangeCurrentPage]
  );

  const onPageSizeChange = (size) => {
    console.log(size);
    setPageSize(size);
    onChangeSizePage(size);
  };
  useEffect(() => {
    // console.log("currentPageLocal", currentPage);
    // console.log("currentPageGlobal", currentPageGlobalState);
    if (currentPage === 1 && !isFetching) {
      // console.log("В прелоад");
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
    if (isSorted) {
      onChangePage(currentPage);
    }
  }, [currentPage, isSorted, onChangePage]);

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

  // const onPageChange = (page) => {
  //   console.log("page", page);

  //   const ttt = onChangeCurrentPage(page);
  //   setCurrentPage(ttt);
  //   console.log(ttt);
  // };

  // const onPageSizeChange = (pageSize) => {
  //   onChangeSizePage(pageSize);
  // };

  // console.log(onPageChange());

  return (
    <>
      {error && <ErrorNotFound error={error?.data?.message} />}
      {tracks?.length === 0 && !isLoading && !error && (
        <NoData text={"Музика ще не завантажена"} textColor={"grey"} />
      )}
      {isFetching && <Loader />}

      {!error && isSuccess && !isFetching && tracks?.length !== 0 && (
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
                        countOfSkip={skip}
                      />
                    );
                  }
                )}
              </tbody>
            </TableStyle>
          </TracksTableWrapper>
          {isSuccess && totalTracks > pageSize && (
            <Pagination
              style={{ marginTop: "auto", marginBottom: "24px" }}
              defaultCurrent={1}
              current={currentPage}
              total={totalTracks}
              showLessItems
              selectComponentClass={Select}
              showSizeChanger={false}
              defaultPageSize={pageSize}
              pageSize={pageSize}
              // onShowSizeChange={onPageSizeChange}
              onChangeSizePage={onPageSizeChange}
              onChange={(page) => onChangePage(page)}
              locale={localeUA}
            />
          )}
        </>
      )}
    </>
  );
};

export default TracksTable;
