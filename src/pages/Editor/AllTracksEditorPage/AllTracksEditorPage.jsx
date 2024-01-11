import TracksTable from "../../../components/EditorComponents/TracksTable/TracksTable";
import { useGetAllTracksQuery } from "../../../redux/tracksSlice";
import Player from "../../../components/Player/Player";
import AddTracks from "../../../components/EditorComponents/AddTracks/AddTracks";
import symbol from "../../../assets/symbol.svg";

const RowsTitle = [
  "",
  "Назва пісні",
  "Виконавець",
  "Тривалість",
  "Жанр",
  "Плейлист",
];

const AllTracksEditor = () => {
  const {
    data: allTracks,

    error: errorLoadingAllTracks,
    isFetching: isFetchingAllTracks,
    isSuccess: isSuccessAllTracks,
  } = useGetAllTracksQuery();

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
            rows={RowsTitle}
            isInPlayList={false}
          />
          <Player tracks={allTracks} />
        </>
      )}
    </>
  );
};

export default AllTracksEditor;
