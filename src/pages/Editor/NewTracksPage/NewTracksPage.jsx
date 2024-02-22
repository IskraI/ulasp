import TracksTable from "../../../components/EditorComponents/TracksTable/TracksTable";
import {
  useGetAllTracksQuery,
  useUploadTrackMutation,
} from "../../../redux/tracksSlice";
import symbol from "../../../assets/symbol.svg";
import AddTracks from "../../../components/EditorComponents/AddTracks/AddTracks";
import { useRef, useState, useId } from "react";
import { NoData } from "../../../components/Errors/Errors";

const NewTracksPage = () => {
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
      //   titleSize: "1%",
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
        titleSize: "1%",
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
        titleSize: "0%",
        showData: false,
      },

      {
        title: "",
        type: "button",
        titleSize: "5%",
        showData: true,
      },
    ];

    return RowsTitle;
  };

  const {
    data: allTracks,
    isFetching,
    isSuccess,
    error,
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
      {isSuccess && !error && (
        <>
          {/* <AddTracks
            iconButton={`${symbol}#icon-plus`}
            textButton={"Музику"}
            uploadTrack={uploadTrack}
          />

          <TracksTable
            title={" Остання додана музика"}
            marginTopWrapper={"24px"}
            tracks={allTracks.latestTracks}
            error={error}
            isFetching={isFetching}
            isSuccess={isSuccess}
            isCheckedAll={checkedMainCheckBox}
            rows={rows()}
            isInPlayList={false}
          /> */}
          <NoData text={"Розділ тимчасово не доступний. В розробці"}/>
        </>
      )}
    </>
  );
};

export default NewTracksPage;
