import TracksTable from "../../../components/EditorComponents/TracksTable/TracksTable";
import { useGetAllTracksQuery } from "../../../redux/tracksSlice";
import symbol from "../../../assets/symbol.svg";
import AddTracks from "../../../components/EditorComponents/AddTracks/AddTracks";
import Player from "../../../components/Player/Player";
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

  // if (isSuccess) {
  //   console.log(allTracks.trackURL);
  // }
  return (
    <>
      {isSuccess && !error && (
        <>
          <AddTracks iconButton={`${symbol}#icon-plus`} textButton={"Музику"} />

          <TracksTable
            title={" Остання додана музика"}
            tracks={allTracks}
            error={error}
            isFetching={isFetching}
            isSuccess={isSuccess}
            display="none"
            rows={RowsTitle}
            isInPlayList={false}
          />
          <Player tracks={allTracks} />
        </>
      )}
    </>
  );
};

export default NewTracksPage;
