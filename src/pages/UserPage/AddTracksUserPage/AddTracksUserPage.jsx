import TabNavigation from "../../../components/TabNavigation/TabNavigation";
import TracksTable from "../../../components/UserMediaComponent/TracksTable/TracksTableUser";
import rowsNewTracksUser from "./RowsAddTracksUserPage";
import { useGetAllAddTrackByUserQuery } from "../../../redux/tracksUserSlice";
import { useGetCreatePlaylistsForUserQuery } from "../../../redux/playlistsUserSlice";
import { useState } from "react";

import { Loader } from "../../../components/Loader/Loader";

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

  const {
    data: createPlaylists,
    isFetching: isFetchingCreatePlaylists,
    isSuccess: isSuccesCreatePlaylists,
    isError: isErrorCreatePlaylists,
  } = useGetCreatePlaylistsForUserQuery();

  console.log("createPlaylists :>> ", createPlaylists);
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const onPageSizeChange = (size) => {
    setPageSize(size);
  };

  const handleSortClick = () => {
    // setSortAlphabetically(!sortAlphabetically);
  };
  console.log("tracksInAdd :>> ", tracksInAdd);
  return (
    <>
      {/* <TabNavigation /> */}

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
            createPlaylists={createPlaylists}
          />
        </>
      )}
    </>
  );
};

export default AddTracksUserPage;