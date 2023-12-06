

import TracksTable from "../../../components/EditorComponents/TracksTable/TracksTable";
import { useGetAllTracksQuery,  } from "../../../redux/tracksSlice";

const RowsTitle = ["", "Назва пісні", "Виконавець", "Тривалість", "Жанр", ""];

const AllTracksEditor = () => {


  const {
    data: allTracks,

    error: errorLoadingAllTracks,
    isFetching: isFetchingAllTracks,
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
          rows={RowsTitle}
        />
      )}
    </>
  );
};

export default AllTracksEditor;
