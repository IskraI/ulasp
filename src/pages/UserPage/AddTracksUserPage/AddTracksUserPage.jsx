import TabNavigation from "../../../components/TabNavigation/TabNavigation";
import TracksTable from "../../../components/UserMediaComponent/TracksTable/TracksTableUser";
import rowsNewTracksUser from "./RowsAddTracksUserPage";
import { useGetAllAddTrackByUserQuery } from "../../../redux/tracksUserSlice";
import { useState } from "react";

import { TitleWrapper } from "../../../components/EditorComponents/MediaList/MediaList.styled";
const AddTracksUserPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const {
    data: tracksInAdd,
    error: errorLoadingTracksInAdd,
    isFetching: isFetchingTracksInAdd,
    isSuccess: isSuccessTracksInAdd,
    isLoading: isLoadingTracksInAdd,
  } = useGetAllAddTrackByUserQuery({
    page: currentPage,
    limit: pageSize,
    forseRefetch: true,
  });

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const onPageSizeChange = (size) => {
    setPageSize(size);
  };

  return (
    <>
      {/* <TabNavigation /> */}
      <TitleWrapper>Обрані пісні</TitleWrapper>
      {/* {isFetchingTracksInAdd && <Loader />} */}
      {isSuccessTracksInAdd && !errorLoadingTracksInAdd && (
        <>
          <TracksTable
            title={"In playlist"}
            showTitle={false}
            marginTopWrapper={"24px"}
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
        </>
      )}
    </>
  );
};

export default AddTracksUserPage;
