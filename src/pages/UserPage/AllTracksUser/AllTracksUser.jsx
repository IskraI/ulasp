import TracksTable from '../../../components/UserMediaComponent/TracksTable/TracksTableUser';
import { useGetAllTracksforUserQuery } from '../../../redux/tracksUserSlice';

import { useState } from 'react';
import NavMusic from '../../../components/UserMediaComponent/NavMusic/NavMusic';
import { Loader } from '../../../components/Loader/Loader';

const AllTracksUser = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const {
    data: allTracks,
    isSuccess,
    error: errorLoadingAllTracks,
    isFetching: isFetchingAllTracks
  } = useGetAllTracksforUserQuery({
    page: currentPage,
    limit: pageSize
  });

  const onPageChange = (page) => {
    console.log('4 Step - setCurrentPage in mutation', page);
    setCurrentPage(page);
  };

  const onPageSizeChange = (size) => {
    console.log(size);
    setPageSize(size);
  };

  const links = [
    { path: '/user/medialibrary/newplaylists', title: 'Нові плейлисти' },
    { path: '/user/medialibrary/newtracks', title: 'Нова музика' }
  ];

  const rows = () => {
    const RowsTitle = [
      {
        title: '',
        type: 'none',
        titleSize: '2%',
        showData: false
      },

      {
        title: '',
        type: 'button',
        titleSize: '2%',
        showData: true
      },
      {
        title: '',
        type: 'image',
        titleSize: '10%',
        showData: true
      },
      {
        title: 'Назва пісні',
        type: 'text',
        titleSize: '25%',
        showData: true
      },
      {
        title: 'Виконавець',
        type: 'text',
        titleSize: '25%',
        showData: true
      },
      {
        title: 'Тривалість',
        type: 'text',
        titleSize: '12%',
        showData: true
      },
      {
        title: 'Жанр',
        type: 'text',
        titleSize: '10%',
        showData: true
      },
      {
        title: 'Плейлист',
        type: 'text',
        titleSize: '0%',
        showData: false
      },

      {
        title: '',
        type: 'button',
        titleSize: '1%',
        showData: false
      }
    ];

    return RowsTitle;
  };
  const [sortAlphabetically, setSortAlphabetically] = useState(false);

  const handleSortClick = () => {
    setSortAlphabetically(!sortAlphabetically);
  };

  return (
    <>
      <NavMusic links={links} />

      {isFetchingAllTracks && <Loader />}
      {!isFetchingAllTracks && !errorLoadingAllTracks && (
        <>
          <TracksTable
            title={'In playlist'}
            showTitle={false}
            marginTopWrapper={'24px'}
            isInPlayList={false}
            tracks={allTracks.latestTracks}
            tracksSRC={allTracks.tracksSRC}
            totalTracks={allTracks.totalTracks}
            error={errorLoadingAllTracks}
            isFetching={isFetchingAllTracks}
            isSuccess={isSuccess}
            rows={rows()}
            onChangeCurrentPage={onPageChange}
            onChangeSizePage={onPageSizeChange}
            currentPage={currentPage}
            pageSize={pageSize}
            totalPages={allTracks.totalPages}
          />
        </>
      )}
    </>
  );
};

export default AllTracksUser;
