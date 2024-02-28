import { useRef, useState, useId, useCallback } from "react";

import TracksTable from "../../../components/EditorComponents/TracksTable/TracksTable";
import {
  useGetAllTracksQuery,
  useUploadTrackMutation,
  usePrefetch,
} from "../../../redux/tracksSlice";
import AddTracks from "../../../components/EditorComponents/AddTracks/AddTracks";
import SortTracks from "../../../components/EditorComponents/Sort/SortTracks";
import CountTracks from "../../../components/EditorComponents/CountTracks/CountTracks";
import { Loader } from "../../../components/Loader/Loader";
import symbol from "../../../assets/symbol.svg";

const AllTracksEditor = () => {
  const id = useId();
  const BaseInputRef = useRef(null);
  const [checkedMainCheckBox, setCheckedMainCheckBox] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isSorted, setIsSorterd] = useState(false);
  const [sortedBy, setSortedBy] = useState(-1);
  // const [sortOptions, setSortOptions] = useState({
  //   sortedBy: -1,
  //   countOfSortedFields: 1,
  // });

  const rows = () => {
    const RowsTitle = [
      // {
      //   title: (
      //     <input
      //       key={id}
      //       type="checkbox"
      //       id="mainInput"
      //       ref={BaseInputRef}
      //       style={{ width: "24px", height: "24px", marginRight: "24px" }}
      //       onClick={() => {
      //         if (BaseInputRef.current.checked) {
      //           setCheckedMainCheckBox(true);
      //         } else {
      //           setCheckedMainCheckBox(false);
      //         }
      //       }}
      //     />
      //   ),
      //   type: "checkbox",
      //   titleSize: "2%",
      //   showData: true,
      // },
      {
        title: "",
        type: "button",
        titleSize: "1%",
        showData: false,
      },

      {
        title: "",
        type: "button",
        titleSize: "4%",
        showData: true,
      },

      {
        title: "",
        type: "image",
        titleSize: "10%",
        showData: true,
      },
      {
        title: "Назва пісні",
        type: "text",
        titleSize: "20%",
        showData: true,
      },
      {
        title: "Виконавець",
        type: "text",
        titleSize: "15%",
        showData: true,
      },
      {
        title: "Тривалість",
        type: "text",
        titleSize: "12%",
        showData: true,
      },
      {
        title: "Жанр",
        type: "text",
        titleSize: "10%",
        showData: true,
      },
      {
        title: "Плейлист",
        type: "text",
        titleSize: "15%",
        showData: true,
      },

      {
        title: "",
        type: "button",
        titleSize: "8%",
        showData: true,
      },
    ];

    return RowsTitle;
  };

  // console.log(isSorted);

  // const page = currentPage;
  // const limit = pageSize;

  const {
    data: allTracks,
    error: errorLoadingAllTracks,
    isFetching: isFetchingAllTracks,
    isSuccess: isSuccessAllTracks,
    isLoading: isLoadingAllTracks,
    refetch,
  } = useGetAllTracksQuery({
    page: currentPage,
    limit: pageSize,
    sort: sortedBy,
    // sort: sortOptions.sortedBy,
    // countOfSortedFields: sortOptions.countOfSortedFields,
    forceRefetch: true,
    // refetchOnFocus: true,
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

  const onPageChange = (page) => {
    console.log("4 Step - setCurrentPage in mutation", page);
    setCurrentPage(page);
    setIsSorterd(false);
  };

  const onPageSizeChange = (size) => {
    console.log(size);
    setPageSize(size);
  };

  const prefetchPage = usePrefetch("getAllTracks");

  const prefetchNext = useCallback(() => {
    prefetchPage({
      page: currentPage,
      limit: pageSize,
      sort: sortedBy === 1 ? -1 : 1,
    });
  }, [currentPage, pageSize, prefetchPage, sortedBy]);

  const handleClickSort = (data) => {
    // refetch();
    setSortedBy(data);
    if (currentPage > 1) {
      setCurrentPage(1);
      setIsSorterd(true);
    }
  };

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
        <div
          style={{
            width: "20%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CountTracks countTracks={allTracks?.totalTracks} fontSize={"24px"} />

          <SortTracks
            onClick={handleClickSort}
            omMouseEnter={prefetchNext}
            sortType={"Az"}
            sortedBy={sortedBy}
            prefetch={true}
          />
        </div>
      )}
      {isSuccessAllTracks && !errorLoadingAllTracks && (
        <>
          {/* <button onClick={() => prefetchNext()}>PpPPPPPPPP</button> */}

          <TracksTable
            // title={" Остання додана музика"}
            marginTopWrapper={"24px"}
            tracks={allTracks.latestTracks}
            tracksSRC={allTracks.tracksSRC}
            totalTracks={allTracks.totalTracks}
            error={errorLoadingAllTracks}
            isFetching={isFetchingAllTracks}
            isSuccess={isSuccessAllTracks}
            isLoading={isLoadingAllTracks}
            rows={rows()}
            isCheckedAll={checkedMainCheckBox}
            isInPlayList={false}
            isLoadingUpload={isLoadingUploadTrack}
            isSuccessUpload={isSuccessUploadTrack}
            errorUpload={errorUploadTrack}
            onChangeCurrentPage={onPageChange}
            onChangeSizePage={onPageSizeChange}
            currentPage={currentPage}
            pageSize={pageSize}
            totalPages={allTracks.totalPages}
            isSorted={isSorted}
          />
        </>
      )}
    </>
  );
};

export default AllTracksEditor;
