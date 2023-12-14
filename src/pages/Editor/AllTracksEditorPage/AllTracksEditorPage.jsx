import TracksTable from "../../../components/EditorComponents/TracksTable/TracksTable";
import { useGetAllTracksQuery } from "../../../redux/tracksSlice";

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
      {isFetchingAllTracks && <p>Загружаемся.....</p>}
      {!isFetchingAllTracks && !errorLoadingAllTracks && (
        <TracksTable
          title={" Остання додана музика"}
          tracks={allTracks}
          error={errorLoadingAllTracks}
          isFetching={isFetchingAllTracks}
          isSuccess={isSuccessAllTracks}
          rows={RowsTitle}
        />
      )}
    </>
  );
};

export default AllTracksEditor;
