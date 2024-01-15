import TracksTable from "../../../components/EditorComponents/TracksTable/TracksTable";
import { useGetAllTracksQuery } from "../../../redux/tracksSlice";
import Player from "../../../components/Player/Player";
import AddTracks from "../../../components/EditorComponents/AddTracks/AddTracks";
import symbol from "../../../assets/symbol.svg";
import { useRef, useState, useId } from "react";

const AllTracksEditor = () => {
  const id = useId();
  const BaseInputRef = useRef(null);
  const [checkedMainCheckBox, setCheckedMainCheckBox] = useState(false);

  const rows = () => {
    const RowsTitle = [
      {
        title: (
          <input
            key={id}
            type="checkbox"
            id="mainInput"
            ref={BaseInputRef}
            style={{ width: "24px", height: "24px", marginRight: "24px" }}
            onClick={() => {
              if (BaseInputRef.current.checked) {
                setCheckedMainCheckBox(true);
              } else {
                setCheckedMainCheckBox(false);
              }
            }}
          />
        ),
        type: "checkbox",
        titleSize: "2%",
        showData: true,
      },

      {
        title: "",
        type: "button",
        titleSize: "2%",
        showData: false,
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

    error: errorLoadingAllTracks,
    isFetching: isFetchingAllTracks,
    isSuccess: isSuccessAllTracks,
  } = useGetAllTracksQuery({ forceRefetch: true, refetchOnFocus: true });

  return (
    <>
      {!isSuccessAllTracks && <p>Загружаемся.....</p>}
      {isSuccessAllTracks && !errorLoadingAllTracks && (
        <>
          <AddTracks iconButton={`${symbol}#icon-plus`} textButton={"Музику"} />

          <TracksTable
            // title={" Остання додана музика"}
            tracks={allTracks}
            error={errorLoadingAllTracks}
            isFetching={isFetchingAllTracks}
            isSuccess={isSuccessAllTracks}
            rows={rows()}
            isCheckedAll={checkedMainCheckBox}
            isInPlayList={false}
          />
          <Player tracks={allTracks} />
        </>
      )}
    </>
  );
};

export default AllTracksEditor;
