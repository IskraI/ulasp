import { useRef, useState, useId, useCallback } from "react";

import TracksTable from "../../../components/EditorComponents/TracksTable/TracksTable";
import {
  useGetAllTracksQuery,
  useUploadTrackMutation,
  usePrefetch,
} from "../../../redux/tracksSlice";
import AddTracks from "../../../components/EditorComponents/AddTracks/AddTracks";
import symbol from "../../../assets/symbol.svg";
import { Loader } from "../../../components/Loader/Loader";

const AllTracksEditor = () => {
  const id = useId();
  const BaseInputRef = useRef(null);
  const [checkedMainCheckBox, setCheckedMainCheckBox] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // const page = currentPage;
  // const limit = pageSize;

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

  const {
    data: allTracks,
    error: errorLoadingAllTracks,
    isFetching: isFetchingAllTracks,
    isSuccess: isSuccessAllTracks,
    isLoading: isLoadingAllTracks,
  } = useGetAllTracksQuery({
    page: currentPage,
    limit: pageSize,
    // forceRefetch: true,
    // refetchOnFocus: true,
  });

  // console.log(isLoadingAllTracks);

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
  };

  const onPageSizeChange = (size) => {
    setPageSize(size);

    return pageSize;
  };

  const prefetchPage = usePrefetch("getAllTracks");

  const prefetchNext = useCallback(() => {
    prefetchPage({ page: 2, limit: 10 });
  }, [prefetchPage]);

  return (
    <>
      {!isSuccessAllTracks && <Loader />}
      {isSuccessAllTracks && !errorLoadingAllTracks && (
        <>
          <AddTracks
            iconButton={`${symbol}#icon-plus`}
            textButton={"Музику"}
            uploadTrack={uploadTrack}
          />
          {/* <button onClick={() => prefetchNext()}>PpPPPPPPPP</button> */}

          <TracksTable
            // title={" Остання додана музика"}
            marginTopWrapper={"24px"}
            tracks={allTracks.latestTracks}
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
          />
        </>
      )}
    </>
  );
};

export default AllTracksEditor;
