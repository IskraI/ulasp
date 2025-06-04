import { useState } from 'react';

import TracksTable from '../../../components/UserMediaComponent/TracksTable/TracksTableUser';
import MobileSongList from '../../../components/UserMediaComponent/TracksTable/Mobile/MobileTrackList';
import rowsNewTracksUser from './RowsAddTracksUserPage';
import { useGetAllAddTrackByUserQuery } from '../../../redux/tracksUserSlice';

import {
  ControlWrapper,
  TitleWrapper
} from '../../../components/UserMediaComponent/MediaList/MediaList.styled';
const AddTracksUserPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const {
    data: tracksInAdd,
    error: errorLoadingTracksInAdd,
    isFetching: isFetchingTracksInAdd,
    isSuccess: isSuccessTracksInAdd,
    isLoading: isLoadingTracksInAdd
  } = useGetAllAddTrackByUserQuery({
    page: currentPage,
    limit: pageSize,
    forseRefetch: true
  });

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const onPageSizeChange = (size) => {
    setPageSize(size);
  };

  return (
    <>
      <ControlWrapper>
        <TitleWrapper>Обрані пісні</TitleWrapper>
      </ControlWrapper>
      {/* {isFetchingTracksInAdd && <Loader />} */}
      {isSuccessTracksInAdd && !errorLoadingTracksInAdd && (
        <>
          <TracksTable
            title={'In playlist'}
            showTitle={false}
            marginTopWrapper={'24px'}
            isInPlayList={false}
            tracks={tracksInAdd.tracksInAdd}
            tracksSRC={tracksInAdd.tracksSRC}
            totalTracks={tracksInAdd.totalTracks}
            error={errorLoadingTracksInAdd}
            isFetching={isFetchingTracksInAdd}
            isSuccess={isSuccessTracksInAdd}
            rows={rowsNewTracksUser()}
            onChangeCurrentPage={onPageChange}
            onChangeSizePage={onPageSizeChange}
            currentPage={currentPage}
            pageSize={pageSize}
            totalPages={tracksInAdd.totalPages}
          />
          <MobileSongList
            tracks={tracksInAdd.tracksInAdd}
            isFetching={isFetchingTracksInAdd}
            isSuccess={isSuccessTracksInAdd}
            onChangeCurrentPage={onPageChange}
            onChangeSizePage={onPageSizeChange}
            currentPage={currentPage}
            pageSize={pageSize}
            totalPages={tracksInAdd.totalPages}
            totalTracks={tracksInAdd.totalTracks}
            tracksSRC={tracksInAdd.tracksSRC}
            options={null}
          />
        </>
      )}
    </>
  );
};

export default AddTracksUserPage;
