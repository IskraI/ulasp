import { useCallback, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import TracksTable from '../../../components/UserMediaComponent/TracksTable/TracksTableUser';

import PlaylistListItem from '../../../components/UserMediaComponent/PlayLists/PlayListsItem';
import { ErrorNotFound, Error500 } from '../../../components/Errors/Errors';

import { Loader } from '../../../components/Loader/Loader';
import SortTracks from '../../../components/EditorComponents/Sort/SortTracks';
import rowsTracksPageUser from './RowsTracksPageUser';
import { ControlWrapper } from '../../../components/UserMediaComponent/MediaList/MediaList.styled';

import { optionsTracksPage } from './optionsMobileSongList';

import MobileSongList from '../../../components/UserMediaComponent/TracksTable/Mobile/MobileTrackList';

import {
  useGetPlaylistByIdForUserQuery,
  useGetCreatePlaylistByIdForUserQuery,
  useFavoritePlaylistForUserQuery,
  useAddPlaylistForUserQuery
} from '../../../redux/playlistsUserSlice';

const TracksPage = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isSorted, setIsSorterd] = useState(false);
  const { playlistId } = useParams();
  const [sortedBy, setSortedBy] = useState(1);

  const playlistQuery = location.pathname.includes('createplaylists')
    ? useGetCreatePlaylistByIdForUserQuery
    : useGetPlaylistByIdForUserQuery;

  const { data: dataFavorite } = useFavoritePlaylistForUserQuery();
  const { data: dataAdd } = useAddPlaylistForUserQuery();

  const {
    data,
    isFetching: isFetchingPlaylistById,
    isSuccess,
    error,
    isError
  } = playlistQuery({
    playlistId,
    page: currentPage,
    limit: pageSize,
    sort: sortedBy
  });

  const handleClickSort = (data) => {
    setSortedBy(data);
    if (currentPage > 1) {
      setCurrentPage(1);
    }

    setIsSorterd(true);
    // dispatch(playlistsUserApi.util.invalidateTags(["Playlists"]));

    //localStorage.setItem("sortOrder", data);
  };

  const onPageChange = (page) => {
    setIsSorterd(false);
    // console.log("4 Step - setCurrentPage in mutation", page);
    setCurrentPage(page);
  };

  const onPageSizeChange = (size) => {
    setIsSorterd(false);
    // console.log(size);
    setPageSize(size);
  };

  const favStatus = useCallback(
    () =>
      dataFavorite?.favorites.some(({ _id }) => _id === data?.playlist?._id),
    [data?.playlist?._id, dataFavorite?.favorites]
  );

  const addStatus = useCallback(
    () => dataAdd?.add.some(({ _id }) => _id === data?.playlist?._id),
    [data?.playlist?._id, dataAdd?.add]
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
              favoriteStatus={favStatus()}
              addStatus={addStatus()}
            />
            {data?.playlist?.trackList?.length > 1 && (
              <SortTracks
                onClick={handleClickSort}
                sortType={'Az'}
                sortedBy={sortedBy}
                marginTop={'0px'}
              />
            )}
          </ControlWrapper>
        )}

        {isFetchingPlaylistById && <Loader />}
        {isSuccess && !isError && !isFetchingPlaylistById && (
          <>
            <TracksTable
              title={'In playlist'}
              showTitle={false}
              marginTopWrapper={'24px'}
              isInPlayList={true}
              playListId={data.playlist._id}
              playListGenre={data.playlist.playlistGenre}
              tracks={data.playlist.trackList}
              error={error}
              isFetching={isFetchingPlaylistById}
              isSuccess={isSuccess}
              rows={rowsTracksPageUser()}
              onChangeCurrentPage={onPageChange}
              onChangeSizePage={onPageSizeChange}
              currentPage={currentPage}
              pageSize={pageSize}
              totalPages={data.totalPages}
              totalTracks={data.totalTracks}
              tracksSRC={data.tracksSRC}
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
              options={optionsTracksPage}
            />
          </>
        )}
      </>
    </>
  );
};

export default TracksPage;
