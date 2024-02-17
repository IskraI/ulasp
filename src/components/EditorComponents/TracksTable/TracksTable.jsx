/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useCallback } from "react";

import Pagination from "rc-pagination";
import Select from "rc-select";

import localeUA from "../../../constants/paginationLocaleUA.js";

import TrackItem from "./TrackItem";
import { Loader, ProgressBarTracksTable } from "../../Loader/Loader";
import { ErrorNotFound, NoData } from "../../Errors/Errors";

import { usePrefetch } from "../../../redux/tracksSlice.js";
import {
  setSrcPlayer,
  setLastTrack,
  setDefaultPreloadSrc,
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
}) => {
  const dispatch = useDispatch();
  const playerState = useSelector(getPlayerState);
  const [currentPage, setCurrentPage] = useState(currPage);
  const [pageSize, setPageSize] = useState(10);
  const tracksTableProps = {
    showTitle: showTitle ? "table-caption" : "none",
    marginTop: marginTopWrapper ? `${marginTopWrapper}` : "auto",
    showData: rows.map((rows) => (rows.showData ? true : false)),
  };

  const isPlaying = playerState.isPlaying;
  useEffect(() => {
    if (isSuccess) {
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
    }
  }, [dispatch, isSuccess, tracks]);

  useEffect(() => {
    if (currentPage) {
      onChangeCurrentPage(currentPage);
    }

    if (currentPage !== currPage) {
      dispatch(setDefaultPreloadSrc());
    }
  }, [currPage, currentPage, dispatch, onChangeCurrentPage]);

  const ttt = playerState.indexTrack === playerState.src.length - 1;

  console.log(ttt);

  console.log(playerState.src.length);

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
      {/* {isFetching && <Loader />} */}

      {!error && isSuccess && (
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
              // selectComponentClass={Select}
              showSizeChanger={false}
              defaultPageSize={10}
              // onShowSizeChange={onPageSizeChange}
              onChange={setCurrentPage}
              locale={localeUA}
            />
          )}
        </>
      )}
    </>
  );
};

export default TracksTable;
