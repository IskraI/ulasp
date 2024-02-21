/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";

import Pagination from "rc-pagination";
import Select from "rc-select";

import localeUA from "../../../constants/paginationLocaleUA.js";
import { compareArray, findPage } from "../../../helpers/helpers.js";
import ScrollToTop from "../../../helpers/scrollToTop";

import TrackItem from "./TrackItem";
import { Loader, ProgressBarTracksTable } from "../../Loader/Loader";
import { ErrorNotFound, NoData } from "../../Errors/Errors";

import {
  useGetAllTracksQuery,
  usePrefetch,
} from "../../../redux/tracksSlice.js";
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
  currentPage: currPage,
  pageSize: currentPageSize,
  totalPages,
}) => {
  const {
    data: allTracks,
    error: errorLoadingAllTracks,
    isFetching: isFetchingAllTracks,
    isSuccess: isSuccessAllTracks,
    isLoading: isLoadingAllTracks,
  } = useGetAllTracksQuery({ page: "", limit: "" });

  const dispatch = useDispatch();
  const playerState = useSelector(getPlayerState);
  const [currentPage, setCurrentPage] = useState(currPage);
  const [pageSize, setPageSize] = useState(currentPageSize);
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

  const currentPageForTrackPlaying = findPage(
    playerState.indexTrack,
    currentPageSize
  );

  const indexOfLastTrackInPage =
    currentPageSize > tracks.length
      ? tracks.length - 1 + skip
      : currentPageForTrackPlaying * currentPageSize - 1;

  const lastTrackInPage = playerState.indexTrack === indexOfLastTrackInPage;

  // console.log(
  //   "Длинна реса меньше, чем количество елементов на странице",
  //   currentPageSize > tracks.length
  // );
  // console.log(currentPageSize);
  // console.log(tracks.length);
  // console.log("tracks.length - 1 + skip ==>", tracks.length - 1 + skip);
  // console.log("indexTrack ===>", playerState.indexTrack);
  // console.log("lastIndex ===>", lastTrackInPage);

  const location = useLocation();

  const onChangePage = useCallback(
    (page) => {
      // console.log(page);

      setCurrentPage(page);
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

    if (isSuccessAllTracks) {
      if (currentPage === 1 && !isFetching) {
        // console.log("В прелоад");
        const trackURL = allTracks.latestTracks.map((track) => {
          const newObject = {
            id: track._id,
            trackURL: track.trackURL,
            artist: track.artist,
            trackName: track.trackName,
          };
          return newObject;
        });

        dispatch(
          setPreloadSrcPlayer({
            preloadSrc: trackURL,
            currentPage: currentPage,
            pageSize: currentPageSize,
          })
        );
      }
    }

    if (currentPage !== currentPageGlobalState && !isFetching) {
      if (pageSize !== pageSize) {
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
    isSuccessAllTracks,
    onChangePage,
    pageSize,
    currentPageSize,
  ]);

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

  // const lastTrackInPlaylist = totalTracks ===

  //Последний трек в плейлисте
  //Current page = 1
  //Elements on page = 10
  //first element on page 2 = 10

  // console.log("Текущая страница", currentPage);
  // console.log("Количество елементов на странице", pageSize);
  // console.log("Это последний трек в массиве?", lastTrackInPage);
  // console.log("У нас есть еще страницы", anyMorePages);

  // console.log("Длинна сорса в плеере", playerState.src.length);

  // useEffect(() => {
  //   // const countPages = totalTracks % pageSize === 0;
  //   const countPages = Math.ceil(totalTracks / pageSize);

  //   //Есть ли у нас еще страницы?
  //   const anyMorePages = countPages > currentPage;
  //   console.log(!anyMorePages);
  //   //Если нет, сообщаем в стейт, что это последний трек в плейлисте
  //   if (!anyMorePages) {
  //     dispatch(setLastTrack());
  //   } else {
  //     // alert("Это не конец");
  //   }

  //   //Если есть страницы, делаем префетч для слудующей порции данных
  //   //записываем в будущий сорс новую порцию данных

  //   // let i = 0;
  //   // if (countPages > i) {
  //   //   while (i < countPages) {
  //   //     i++;
  //   //   }
  //   // }

  //   // if (
  //   //   playerState.indexTrack === playerState.src.length - 1 &&
  //   //   countPages > currentPage
  //   // ) {
  //   //   onChangeCurrentPage(currentPage + 1);
  //   // }

  //   // console.log(countPages);
  // }, [currentPage, dispatch, pageSize, totalTracks]);

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

      {!error && isSuccess && !isFetching && (
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
          {isSuccess && totalTracks > 9 && (
            <Pagination
              style={{ marginTop: "auto", marginBottom: "24px" }}
              defaultCurrent={1}
              current={currentPage}
              total={totalTracks}
              selectComponentClass={Select}
              showSizeChanger={false}
              defaultPageSize={currentPageSize}
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
