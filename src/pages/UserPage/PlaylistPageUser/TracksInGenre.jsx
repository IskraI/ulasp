import { useState } from 'react';

import TracksTable from '../../../components/UserMediaComponent/TracksTable/TracksTableUser';
import { useGetTracksByGenreIdQuery } from '../../../redux/tracksUserSlice';

import NavMusic from '../../../components/UserMediaComponent/NavMusic/NavMusic';
import { useParams } from 'react-router-dom';
import DropDownTracksInGenres from '../../../components/DropDownGeners/DropDownTracksInGener';
import { Loader } from '../../../components/Loader/Loader';
import rowsTracksInGenre from './RowsTracksInGenre';
import MobileSongList from '../../../components/UserMediaComponent/TracksTable/Mobile/MobileTrackList';

import { GenresWrapper } from './PageUserCommon.styled';

const AllTracksUser = () => {
  const { genreId } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const {
    data: allTracks,
    error: errorLoadingAllTracks,
    isFetching: isFetchingAllTracks,
    isSuccess,
    isError
  } = useGetTracksByGenreIdQuery({
    genreId,
    page: currentPage,
    limit: pageSize
  });

  const links = [
    {
      path: `/user/medialibrary/genres/${genreId}/playlists`,
      title: 'Плейлисти'
    },
    { path: `/user/medialibrary/genres/${genreId}/tracks`, title: 'Пісні' }
  ];

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const onPageSizeChange = (size) => {
    setPageSize(size);
  };

  return (
    <>
      {!isSuccess && !isError && <Loader />}

      {!isFetchingAllTracks && !errorLoadingAllTracks && (
        <>
          <GenresWrapper>
            <NavMusic links={links} />
            <DropDownTracksInGenres currentGenreId={genreId} />
          </GenresWrapper>

          <TracksTable
            title={'In playlist'}
            showTitle={false}
            marginTopWrapper={'24px'}
            isInPlayList={true}
            // playListId={allTracks.playlist._id}
            playListGenre={allTracks.playlistGenre}
            tracks={allTracks.tracks}
            error={errorLoadingAllTracks}
            isFetching={isFetchingAllTracks}
            isSuccess={isSuccess}
            rows={rowsTracksInGenre}
            onChangeCurrentPage={onPageChange}
            onChangeSizePage={onPageSizeChange}
            currentPage={currentPage}
            pageSize={pageSize}
            totalPages={allTracks.totalPages}
            totalTracks={allTracks.totalTracks}
            tracksSRC={allTracks.tracksSRC}
          />
          <MobileSongList
            tracks={allTracks.tracks}
            isFetching={isFetchingAllTracks}
            isSuccess={isSuccess}
            onChangeCurrentPage={onPageChange}
            onChangeSizePage={onPageSizeChange}
            currentPage={currentPage}
            pageSize={pageSize}
            totalPages={allTracks.totalPages}
            totalTracks={allTracks.totalTracks}
            tracksSRC={allTracks.tracksSRC}

            // options={options}
          />
        </>
      )}
    </>
  );
};

export default AllTracksUser;
