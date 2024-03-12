import { useState, useCallback } from "react";

import TracksTable from "../../../components/EditorComponents/TracksTable/TracksTable";
import {
  useGetAllTracksQuery,
  useUploadTrackMutation,
  usePrefetch,
} from "../../../redux/tracksSlice";
import AddTracks from "../../../components/EditorComponents/AddTracks/AddTracks";
import SortTracks from "../../../components/EditorComponents/Sort/SortTracks";
import CountTracks from "../../../components/EditorComponents/CountTracks/CountTracks";
import SearchTracks from "../SearchTracks/SearchTracks";
import { Loader } from "../../../components/Loader/Loader";
import RowsAllTracks from "./RowsAllTracksEditor";
import symbol from "../../../assets/symbol.svg";

import { WrapperInfoAndSort } from "./AllTracksEditorPage.styled";

const AllTracksEditor = () => {
  const [checkedMainCheckBox, setCheckedMainCheckBox] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isSorted, setIsSorterd] = useState(false);
  const [sortedBy, setSortedBy] = useState(-1);
  const [query, setQuery] = useState("");
  const prefetchPage = usePrefetch("getAllTracks");
  const {
    data: allTracks,
    error: errorLoadingAllTracks,
    isFetching: isFetchingAllTracks,
    isSuccess: isSuccessAllTracks,
    isLoading: isLoadingAllTracks,
  } = useGetAllTracksQuery({
    page: currentPage,
    limit: pageSize,
    sort: sortedBy,
    query,
    forseRefetch: true,
  });

  const [
    uploadTrack,
    {
      isSuccess: isSuccessUploadTrack,
      isError: isErrorUploadTrack,
      isLoading: isLoadingUploadTrack,
      error: errorUploadTrack,
    },
  ] = useUploadTrackMutation();

  const prefetchNext = useCallback(() => {
    prefetchPage({
      page: currentPage,
      limit: pageSize,
      sort: sortedBy === 1 ? -1 : 1,
    });
  }, [currentPage, pageSize, prefetchPage, sortedBy]);

  const onPageChange = (page) => {
    console.log("4 Step - setCurrentPage in mutation", page);
    setCurrentPage(page);
    setIsSorterd(false);
    setCheckedMainCheckBox(false);
  };

  const onPageSizeChange = (size) => {
    console.log(size);
    setPageSize(size);
    setCheckedMainCheckBox(false);
  };

  const handleClickSort = (data) => {
    setSortedBy(data);
    if (currentPage > 1) {
      setCurrentPage(1);
    }
    if (checkedMainCheckBox) {
      setCheckedMainCheckBox(false);
    }
    setIsSorterd(true);
  };

  const checkedAllFn = (data) => {
    console.log(data);
    if (!data) {
      setCheckedMainCheckBox(false);
    } else {
      setCheckedMainCheckBox(true);
    }
  };

  const handleSearchTracks = (data) => setQuery(data);

  const isSearchResultFail =
    query !== "" && allTracks.latestTracks.length === 0;

  return (
    <>
      {!isSuccessAllTracks && <Loader />}
      {isSuccessAllTracks && !errorLoadingAllTracks && (
        <AddTracks
          iconButton={`${symbol}#icon-plus`}
          textButton={"Музику"}
          uploadTrack={uploadTrack}
        />
      )}

      {allTracks?.totalTracks !== undefined && (
        <WrapperInfoAndSort>
          <CountTracks countTracks={allTracks?.totalTracks} fontSize={"24px"} />
          <SortTracks
            onClick={handleClickSort}
            omMouseEnter={prefetchNext}
            sortType={"Az"}
            sortedBy={sortedBy}
            prefetch={true}
          />
          <SearchTracks handleSearchTracks={handleSearchTracks} />
        </WrapperInfoAndSort>
      )}
      {isSuccessAllTracks && !errorLoadingAllTracks && (
        <>
          <TracksTable
            // title={" Остання додана музика"}
            rows={RowsAllTracks(checkedAllFn, checkedMainCheckBox)}
            isCheckedAll={checkedMainCheckBox}
            isInPlayList={false}
            marginTopWrapper={"24px"}
            tracks={allTracks.latestTracks}
            tracksSRC={allTracks.tracksSRC}
            totalTracks={allTracks.totalTracks}
            error={errorLoadingAllTracks}
            isFetching={isFetchingAllTracks}
            isSuccess={isSuccessAllTracks}
            isLoading={isLoadingAllTracks}
            isLoadingUpload={isLoadingUploadTrack}
            isSuccessUpload={isSuccessUploadTrack}
            errorUpload={errorUploadTrack}
            onChangeCurrentPage={onPageChange}
            onChangeSizePage={onPageSizeChange}
            currentPage={currentPage}
            pageSize={pageSize}
            totalPages={allTracks.totalPages}
            isSorted={isSorted}
            checkedAllFn={checkedAllFn}
            isSearchResultFail={isSearchResultFail}
          />
        </>
      )}
    </>
  );
};

export default AllTracksEditor;
