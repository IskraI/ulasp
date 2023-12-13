import TracksTable from "../../../components/EditorComponents/TracksTable/TracksTable";
import { useGetAllTracksQuery } from "../../../redux/tracksSlice";
import symbol from "../../../assets/symbol.svg";
import AddTracks from "../../../components/EditorComponents/AddTracks/AddTracks";
const RowsTitle = [
  // "",
  "",
  "Назва пісні",
  "Виконавець",
  "Тривалість",
  "Жанр",
  // "",
];

const NewTracksPage = () => {
  const {
    data: allTracks,
    isFetching,
    isSuccess,
    error,
  } = useGetAllTracksQuery();
  return (
    <>
      <AddTracks iconButton={`${symbol}#icon-plus`} textButton={"Музику"} />
      {isSuccess && !error && (
        <TracksTable
          // title={" Остання додана музика!!!!!"}
          tracks={allTracks}
          error={error}
          isFetching={isFetching}
          isSuccess={isSuccess}
          display="none"
          rows={RowsTitle}
        />
      )}
    </>
  );
};

export default NewTracksPage;
