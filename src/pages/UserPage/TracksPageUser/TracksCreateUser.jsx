import { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import TracksTable from '../../../components/UserMediaComponent/TracksTable/TracksTableUser';
import {
  useGetCreatePlaylistByIdForUserQuery,
  useFavoritePlaylistForUserQuery
} from '../../../redux/playlistsUserSlice';

import PlaylistListItem from '../../../components/UserMediaComponent/PlayLists/PlayListsItem';
import { ErrorNotFound, Error500 } from '../../../components/Errors/Errors';
import symbol from '../../../assets/symbol.svg';
import { optionsTracksCreate} from './optionsMobileSongList';
import { Loader } from '../../../components/Loader/Loader';
import AddTrackToPlaylistFromDB from '../../../components/UserCabinetPage/AddTrackToPlaylistFromDB/AddTrackToPlaylistFromDB';
import rowsTracksCreateUser from './RowsTracksCreateUser';
import SortTracks from '../../../components/EditorComponents/Sort/SortTracks';

import { ControlWrapper } from '../../../components/UserMediaComponent/MediaList/MediaList.styled';

import MobileSongList from '../../../components/UserMediaComponent/TracksTable/Mobile/MobileTrackList';

const TracksPageCreateUser = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortedBy, setSortedBy] = useState(-1);
  const [isSorted, setIsSorterd] = useState(false);
  const { playlistId } = useParams();

  const {
    data,
    isFetching: isFetchingPlaylistById,
    isSuccess,
    isError,
    error
  } = useGetCreatePlaylistByIdForUserQuery({
    playlistId,
    page: currentPage,
    limit: pageSize,
    sort: sortedBy
  });

  const { data: dataFavorite } = useFavoritePlaylistForUserQuery();

  const onPageChange = (page) => {
    setIsSorterd(false);
    setCurrentPage(page);
  };

  const onPageSizeChange = (size) => {
    setIsSorterd(false);
    setPageSize(size);
  };

  const handleClickSort = (data) => {
    setSortedBy(data);
    if (currentPage > 1) {
      setCurrentPage(1);
    }
    setIsSorterd(true);
  };

  const favStatus = useCallback(
    () =>
      dataFavorite?.favorites.some(({ _id }) => _id === data?.playlist?._id),
    [data?.playlist?._id, dataFavorite?.favorites]
  );

  return (
    <>
      {error?.status === '500' && <Error500 />}
      {error && <ErrorNotFound />}

      <>
        {data && !isError && (
          <ControlWrapper>
            <PlaylistListItem
              icon={data.playlist.playListAvatarURL}
              title={data.playlist.playListName}
              placeListCardInfo={true}
              id={playlistId}
              countTracks={data.totalTracks}
              showPlusBtn={false}
              owner={data.playlist.owner}
              favoriteStatus={favStatus()}
            />

            <div
              style={{
                display: 'flex',
                // outline: '1px solid red',
                gap: '12px',
                width: '100%',
                marginRight: '24px',
                alignItems: 'center'
              }}
            >
              {data?.playlist?.trackList?.length > 1 && (
                <SortTracks
                  onClick={handleClickSort}
                  sortType={'Az'}
                  sortedBy={sortedBy}
                  marginTop={'0px'}
                />
              )}
              <AddTrackToPlaylistFromDB
                iconButton={`${symbol}#icon-plus`}
                textButton={'Музику'}
                idPlaylist={playlistId}
                trackListPlaylist={data.playlist.trackList}
              />
            </div>
          </ControlWrapper>
        )}
        {isFetchingPlaylistById && <Loader />}
        {isSuccess && !isFetchingPlaylistById && !isError && (
          <>
            <TracksTable
              title={'In playlist'}
              showTitle={false}
              checkBox={true}
              marginTopWrapper={'24px'}
              isInPlayList={false}
              playListId={data.playlist._id}
              tracks={data.playlist.trackList}
              error={error}
              isFetching={isFetchingPlaylistById}
              isSuccess={isSuccess}
              rows={rowsTracksCreateUser()}
              onChangeCurrentPage={onPageChange}
              onChangeSizePage={onPageSizeChange}
              currentPage={currentPage}
              pageSize={pageSize}
              totalPages={data.totalPages}
              totalTracks={data.totalTracks}
              tracksSRC={data.tracksSRC}
              deleteButton={true}
              isSorted={isSorted}
            />

            <MobileSongList
              playListId={data.playlist._id}
              tracks={data.playlist.trackList}
              isFetching={isFetchingPlaylistById}
              isSuccess={isSuccess}
              onChangeCurrentPage={onPageChange}
              onChangeSizePage={onPageSizeChange}
              currentPage={currentPage}
              pageSize={pageSize}
              totalPages={data.totalPages}
              totalTracks={data.totalTracks}
              tracksSRC={data.tracksSRC}
              isSorted={isSorted}
              options={optionsTracksCreate}
            />
          </>
        )}
      </>
    </>
  );
};

export default TracksPageCreateUser;
