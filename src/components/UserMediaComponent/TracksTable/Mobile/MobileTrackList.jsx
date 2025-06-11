import PropTypes from 'prop-types';
import { useEffect, useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import {
  setPreloadSrcPlayer,
  setLastTrack,
  setNextPage,
  setIsSorted
} from '../../../../redux/playerSlice';
import { getPlayerState } from '../../../../redux/playerSelectors';
import { getUserState } from '../../../../redux/userSelectors';
// END OF REDUX

import Pagination from 'rc-pagination';
import Select from 'rc-select';
import { findPage } from '../../../../helpers/helpers';

import SelectPageSize from '../../../EditorComponents/TracksTable/SelectSize';

import MobileTrackItem from './MobileTrackItem';
import optionsDefault from './options';
import {
  SongListContainer,
  SongMobileContainer
} from './mobileTrackList.styled';

const MobileSongList = ({
  playListId,
  tracks,
  isFetching,
  isSuccess,
  onChangeCurrentPage,
  onChangeSizePage,
  currentPage,
  pageSize,
  totalPages,
  totalTracks,
  tracksSRC,
  isSorted,
  options,
  addTrackInModal
}) => {
  if (options === undefined || options === null) {
    options = optionsDefault;
  }
  const dispatch = useDispatch();
  const location = useLocation();
  const playerState = useSelector(getPlayerState);
  const { id: idUser } = useSelector(getUserState);

  const skip = (currentPage - 1) * pageSize;

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

  const modalPagination = (page) => {
    onChangeCurrentPage(page);
  };

  const onPageSizeChange = (size) => {
    onChangeSizePage(size);
    onChangePage(1);
  };

  useEffect(() => {
    // if (addTrackInModal) {
    //   return;
    // }
    if (currentPage === 1 && !isFetching) {
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
        onChangePage(currentPage);
      } else {
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
    tracksSRC,
    addTrackInModal
  ]);

  useEffect(() => {
    if (anyMorePages && lastTrackInPage) {
      dispatch(
        setLastTrack({
          isLastTrack: true,
          isLastPage: false,
          nextPage: currentPageForTrackPlaying + 1
        })
      );
    }

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
    }
  }, [
    anyMorePages,
    currentPage,
    currentPageForTrackPlaying,
    dispatch,
    lastTrackInPage
  ]);

  useEffect(() => {
    if (isSorted) {
      onChangePage(currentPage);
      dispatch(setIsSorted({ isSorted: true }));
    }
  }, [currentPage, dispatch, isSorted, onChangePage]);

  return (
    <SongMobileContainer>
      <SongListContainer>
        {tracks.map(
          (
            {
              _id,
              trackPictureURL,
              trackName,
              artist,
              trackDuration,
              addTrackByUsers
            },
            index
          ) => (
            <MobileTrackItem
              key={_id}
              index={index}
              idTrack={_id}
              cover={trackPictureURL}
              title={trackName}
              artist={artist}
              duration={trackDuration}
              countOfSkip={skip}
              isAddTrackUser={addTrackByUsers?.includes(idUser)}
              playListId={playListId}
              options={options}
              addTrackInModal={addTrackInModal}
            />
          )
        )}
      </SongListContainer>
      {isSuccess && (
        <div
          style={{
            display: 'flex',
            marginLeft: 'auto',
            alignItems: 'center',
            marginTop: '12px'
          }}
        >
          {options?.pageSize && tracks.length !== 0 && (
            <SelectPageSize
              pageSize={pageSize}
              onChange={onPageSizeChange}
              totalPages={totalPages}
              optionValue={[10, 20, 50, 100]}
            />
          )}

          <Pagination
            defaultCurrent={1}
            current={currentPage}
            total={totalTracks}
            showLessItems
            selectComponentClass={Select}
            showSizeChanger={false}
            defaultPageSize={pageSize}
            pageSize={pageSize}
            hideOnSinglePage
            onChange={addTrackInModal ? modalPagination : onChangePage}
          />
        </div>
      )}
    </SongMobileContainer>
  );
};

MobileSongList.propTypes = {
  playListId: PropTypes.string,
  tracks: PropTypes.array,
  isFetching: PropTypes.bool,
  isSuccess: PropTypes.bool,
  onChangeCurrentPage: PropTypes.func,
  onChangeSizePage: PropTypes.func,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  totalPages: PropTypes.number,
  totalTracks: PropTypes.number,
  tracksSRC: PropTypes.array,
  isSorted: PropTypes.bool,
  options: PropTypes.object,
  addTrackInModal: PropTypes.bool
};

export default MobileSongList;
