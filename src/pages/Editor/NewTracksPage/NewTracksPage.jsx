import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import TracksTable from "../../../components/EditorComponents/TracksTable/TracksTable";
import ControlMediateca from "../../../components/EditorComponents/ControlMediateca/ControlMediaTeca";

import RowsForNewTracks from "./RowsForNewTracks";
import symbol from "../../../assets/symbol.svg";
import AddTrackFromDB from "../../../components/AddTrackFromDB/AddTrackFromDB";

import { useGetTracksInChartQuery } from "../../../redux/tracksSlice";

const NewTracksPage = ({ mediaLibrary, limit, showTitle = true }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const navigate = useNavigate();

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
    console.log("4 Step - setCurrentPage in mutation", page);
    setCurrentPage(page);
  };

  const onPageSizeChange = (size) => {
    console.log(size);
    setPageSize(size);
  };

  useEffect(() => {
    if (mediaLibrary) {
      setPageSize(limit);
    }
  }, [mediaLibrary, limit]);

  return (
    <>
      {mediaLibrary ? (
        <ControlMediateca
          title={"Нові пісні"}
          iconButton={`${symbol}#icon-plus`}
          textButton={"Музику"}
          onClick={() =>
            navigate(`${location.pathname}/newtracks`, { replace: true })
          }
        />
      ) : (
        <AddTrackFromDB
          iconButton={`${symbol}#icon-plus`}
          textButton={"Музику"}
        />
      )}

      {isSuccessTracksInChart && !errorLoadingTracksInChart && (
        <>
          <TracksTable
            rows={RowsForNewTracks()}
            title={"Новинки пісень"}
            showTitle={showTitle}
            marginTopWrapper={"24px"}
            tracks={tracksInChart.tracksInChart}
            tracksSRC={tracksInChart.tracksSRC}
            totalTracks={tracksInChart.totalTracks}
            error={errorLoadingTracksInChart}
            isFetching={isFetchingTracksInChart}
            isSuccess={isSuccessTracksInChart}
            isInPlayList={false}
            onChangeCurrentPage={onPageChange}
            onChangeSizePage={onPageSizeChange}
            currentPage={currentPage}
            pageSize={pageSize}
            totalPages={tracksInChart.totalPages}
            deleteButton={false}
          />
        </>
      )}
    </>
  );
};

NewTracksPage.propTypes = {
  mediaLibrary: PropTypes.bool,
  showTitle: PropTypes.bool,
  limit: PropTypes.string,
};

export default NewTracksPage;
