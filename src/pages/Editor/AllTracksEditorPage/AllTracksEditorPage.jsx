import { useRef, useState, useId } from "react";

import TracksTable from "../../../components/EditorComponents/TracksTable/TracksTable";
import {
  useGetAllTracksQuery,
  useUploadTrackMutation,
} from "../../../redux/tracksSlice";
import Player from "../../../components/Player/Player";
import AddTracks from "../../../components/EditorComponents/AddTracks/AddTracks";
import symbol from "../../../assets/symbol.svg";
import { Loader } from "../../../components/Loader/Loader";

const AllTracksEditor = () => {
  const id = useId();
  const BaseInputRef = useRef(null);
  const [checkedMainCheckBox, setCheckedMainCheckBox] = useState(false);

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
  } = useGetAllTracksQuery({ forceRefetch: true, refetchOnFocus: true });

  const [
    uploadTrack,
    {
      isSuccess: isSuccessUploadTrack,
      isError: isErrorUploadTrack,
      isLoading: isLoadingUploadTrack,
      error: errorUploadTrack,
    },
  ] = useUploadTrackMutation();

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

          <TracksTable
            // title={" Остання додана музика"}
            tracks={allTracks.latestTracks}
            error={errorLoadingAllTracks}
            isFetching={isFetchingAllTracks}
            isSuccess={isSuccessAllTracks}
            rows={rows()}
            isCheckedAll={checkedMainCheckBox}
            isInPlayList={false}
          />
          {/* <Player tracks={allTracks.latestTracks} /> */}
        </>
      )}
    </>
  );
};

export default AllTracksEditor;
