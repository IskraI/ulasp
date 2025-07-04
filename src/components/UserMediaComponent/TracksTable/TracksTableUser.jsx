/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { getUserState } from '../../../redux/userSelectors.js';
import Pagination from 'rc-pagination';
import Select from 'rc-select';

import { compareArray, findPage } from '../../../helpers/helpers.js';
import SelectPageSize from '../../EditorComponents/TracksTable/SelectSize.jsx';

import TrackItem from './TrackItemUser';
import { ErrorNotFound, NoData } from '../../Errors/Errors';
import { Button } from '../../Button/Button.jsx';

import { useRemoveTrackFromPlaylistUserMutation } from '../../../redux/playlistsUserSlice.js';

import {
  setPreloadSrcPlayer,
  setLastTrack,
  setDefaultPreloadSrc,
  setNextPage,
  setSrcPlaying,
  setDefaultState,
  setIsSorted
} from '../../../redux/playerSlice';
import { getPlayerState } from '../../../redux/playerSelectors.js';

import {
  MobileContainer,
  TracksTableWrapper,
  ThTitle,
  TableStyle,
  THeadStyle,
  TracksTitle
} from '../TracksTable/TracksTableUser.styled';

import '../../../styles/pagination.css';

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
  onChangeCurrentPage,
  onChangeSizePage,
  currentPage,
  pageSize,
  totalPages,
  deleteButton = false,
  isSorted
}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const playerState = useSelector(getPlayerState);
  const { id: idUser } = useSelector(getUserState);

  const [
    removeTracksFromPlaylist,
    { isLoading: isLoadingRemoveTracksFromPlaylist }
  ] = useRemoveTrackFromPlaylistUserMutation();

  const [tracksIdList, setTracksIdList] = useState([]);
  const tracksTableProps = {
    showTitle: showTitle ? 'table-caption' : 'none',
    marginTop: marginTopWrapper ? `${marginTopWrapper}` : 'auto',
    showData: rows.map((rows) => (rows.showData ? true : false))
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

  const onChangePage = useCallback(
    (page) => {
      onChangeCurrentPage(page);
      dispatch(
        setNextPage({
          currentPage: page
        })
      );
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    },
    [dispatch, onChangeCurrentPage]
  );

  const onPageSizeChange = (size) => {
    onChangeSizePage(size);
    onChangePage(1);
  };

  useEffect(() => {
    // console.log("currentPageLocal", currentPage);
    // console.log("currentPageGlobal", currentPageGlobalState);
    if (currentPage === 1 && !isFetching) {
      // console.log("В прелоад");
      const trackURL = tracksSRC?.map((track) => {
        const transformTrackObject = {
          id: track._id,
          trackURL: track.trackURL,
          artist: track.artist,
          trackName: track.trackName
        };
        return transformTrackObject;
      });
      dispatch(
        setPreloadSrcPlayer({
          preloadSrc: trackURL,
          currentPage: currentPage,
          pageSize: pageSize,
          location: location.pathname
        })
      );
    }

    if (currentPage !== currentPageGlobalState && !isFetching) {
      if (location.pathname !== playerState.location) {
        // console.log("Здесь установилось значение");
        onChangePage(currentPage);
      } else {
        // console.log("Здесь установилось глобальное значение");

        onChangePage(currentPageGlobalState);
      }
    }
  }, [
    currentPage,
    currentPageGlobalState,
    dispatch,
    isFetching,
    location.pathname,
    onChangePage,
    pageSize,
    playerState.location,
    tracksSRC
  ]);

  useEffect(() => {
    //если страницы есть и это последний трек
    if (anyMorePages && lastTrackInPage) {
      dispatch(
        setLastTrack({
          isLastTrack: true,
          isLastPage: false,
          nextPage: currentPageForTrackPlaying + 1
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
              nextPage: 1
            })
          )
        : dispatch(
            setLastTrack({
              isLastTrack: true,
              isLastPage: true,
              nextPage: currentPageForTrackPlaying + 1
            })
          );
      console.log('Это конец');
    }
  }, [
    anyMorePages,
    currentPage,
    currentPageForTrackPlaying,
    dispatch,
    lastTrackInPage
  ]);

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

  useEffect(() => {
    if (isSorted) {
      onChangePage(currentPage);
      setTracksIdList([]);
      dispatch(setIsSorted({ isSorted: true }));
    }
  }, [currentPage, dispatch, isSorted, onChangePage]);

  const deletingMultipleTracks = () => {
    removeTracksFromPlaylist({ playListId, tracksIdList })
      .then(clearAfterDeleting)
      .unwrap();

    // if (isPlaying) {
    //   dispatch(setSrcPlaying({ indexTrack: playerState.indexTrack }));
    // }
  };

  const clearAfterDeleting = () => {
    if (currentPage !== 1) {
      dispatch(setDefaultState());
      onChangePage(1);
    }

    setTracksIdList([]);
  };

  return (
    <MobileContainer>
      {error && <ErrorNotFound error={error?.data?.message} />}
      {tracks?.length === 0 && !isLoading && !error && (
        <NoData text={'Музика ще не завантажена'} textColor={'grey'} />
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
                {tracks?.map(
                  (
                    {
                      _id,
                      trackPictureURL,
                      trackName,
                      artist,
                      trackDuration,
                      playList,
                      trackURL,
                      addTrackByUsers
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
                        showData={tracksTableProps.showData}
                        countOfSkip={skip}
                        deleteCheckedTrackId={deleteCheckedTrackId}
                        addTrackToCheckedList={addTrackToCheckedList}
                        isAddTrackUser={addTrackByUsers?.includes(idUser)}
                      />
                    );
                  }
                )}
              </tbody>
            </TableStyle>
          </TracksTableWrapper>
          <div
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {deleteButton && (
              <Button
                type={'button'}
                width={'140px'}
                padding={'6px'}
                fontsize={'16px'}
                border={'1px solid #A4A2A2'}
                background={'transparent'}
                text={'Видалити'}
                disabled={tracksIdList.length ? false : true}
                onClick={deletingMultipleTracks}
              />
            )}

            {isSuccess && (
              <div
                style={{
                  display: 'flex',
                  marginLeft: 'auto',
                  alignItems: 'center'
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
                  selectComponentClass={Select}
                  showSizeChanger={false}
                  defaultPageSize={pageSize}
                  pageSize={pageSize}
                  hideOnSinglePage
                  onChange={(page) => onChangePage(page)}
                  // locale={localeUA}
                />
              </div>
            )}
          </div>
        </>
      )}
    </MobileContainer>
  );
};

export default TracksTable;
