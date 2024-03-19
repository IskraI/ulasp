import TabNavigation from "../../../components/TabNavigation/TabNavigation";
import TracksTable from "../../../components/UserMediaComponent/TracksTable/TracksTableUser";
import rowsNewTracksUser from "./RowsNewTracksUser";
import { useGetTracksInChartQuery } from "../../../redux/tracksSlice";
import { useState } from "react";
import NavMusic from "../../../components/UserMediaComponent/NavMusic/NavMusic";
import { Loader } from "../../../components/Loader/Loader";


const NewTracksUser = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const {
    data: tracksInChart,
    error: errorLoadingTracksInChart,
    isFetching: isFetchingTracksInChart,
    isSuccess: isSuccessTracksInChart,
    isLoading: isLoadingTracksInChart,
  } = useGetTracksInChartQuery({
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

  const links = [
    { path: "/user/medialibrary/newplaylists", title: "Нові плейлисти" },
    { path: "/user/medialibrary/newtracks", title: "Нова музика" },
  ];


  const handleSortClick = () => {
    // setSortAlphabetically(!sortAlphabetically);
  };

  return (
    <>
      {/* <TabNavigation /> */}
      <NavMusic links={links} />

      {isFetchingTracksInChart && <Loader />}
      {!isFetchingTracksInChart && !errorLoadingTracksInChart && (
        <>
          <TracksTable
            title={"In playlist"}
            showTitle={false}
            marginTopWrapper={"24px"}
            isInPlayList={false}
            tracks={tracksInChart.tracksInChart}
            tracksSRC={tracksInChart.tracksSRC}
            totalTracks={tracksInChart.totalTracks}
            error={errorLoadingTracksInChart}
            isFetching={isFetchingTracksInChart}
            isSuccess={isSuccessTracksInChart}
            rows={rowsNewTracksUser()}
            onChangeCurrentPage={onPageChange}
            onChangeSizePage={onPageSizeChange}
            currentPage={currentPage}
            pageSize={pageSize}
            totalPages={tracksInChart.totalPages}
          />
        </>
      )}
    </>
  );
};

export default NewTracksUser;
