import TracksTable from "../../../components/EditorComponents/TracksTable/TracksTable";
import { useGetAllTracksQuery } from "../../../redux/tracksSlice";

const RowsTitle = [
  // "",
  "",
  "Назва пісні",
  "Виконавець",
  "Тривалість",
  "Жанр",
  "",
];

const NewTracks = () => {
  const { data: allTracks, isFetching, error } = useGetAllTracksQuery();
  return (
    <>
      {!isFetching && !error && (
        <TracksTable
          title={" Остання додана музика"}
          tracks={allTracks}
          error={error}
          isFetching={isFetching}
          display="none"
          rows={RowsTitle}
        />
      )}
    </>
  );
};

export default NewTracks;