/* eslint-disable react/prop-types */

import Pagination from "rc-pagination";

import localeUA from "../../../constants/paginationLocaleUA.js";

import TrackItem from "./TrackItem.jsx";
import { Loader } from "../../Loader/Loader.jsx";
import { ErrorNotFound, NoData } from "../../Errors/Errors.jsx";
import {
  HASNOT_BEEN_ADDED,
  SEARCH_FAILED,
} from "../../../constants/constants.js";

import {
  TracksTableWrapper,
  ThTitle,
  TableStyle,
  THeadStyle,
  TracksTitle,
} from "./TracksTable.styled.js";

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
}) => {
  const tracksTableProps = {
    showTitle: showTitle ? "table-caption" : "none",
    marginTop: marginTopWrapper ? `${marginTopWrapper}` : "auto",
    showData: rows.map((rows) => (rows.showData ? true : false)),
  };

  const skip = (currentPage - 1) * pageSize;

  return (
    <>
      {error && <ErrorNotFound error={error?.data?.message} />}


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
                        showData={tracksTableProps.showData}
                        countOfSkip={skip}
                      />
                    );
                  }
                )}
              </tbody>
            </TableStyle>
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

export default TracksTable;
