import TracksTable from "../../../components/EditorComponents/TracksTable/TracksTable";
import { useGetPlaylistByIdQuery } from "../../../redux/playlistsSlice";

import { useParams } from "react-router-dom";

const RowsTitle = [
  // "",
  "",
  "Назва пісні",
  "Виконавець",
  "Тривалість",
  "Жанр",
  "",
];

const TracksPage = () => {
  const { playlistId } = useParams();

  const { data, isFetching, error } = useGetPlaylistByIdQuery(playlistId);

  if (!isFetching) {
    console.log(data);
  }

  return (
    <>
      {!isFetching && !error && (
        <TracksTable
          title={` Музика плейлисту "${data.playListName}"`}
          tracks={data.trackList}
          error={error}
          isFetching={isFetching}
          display="none"
          rows={RowsTitle}
        />
      )}
    </>
  );
};

export default TracksPage;
