import TracksTable from "../../../components/EditorComponents/TracksTable/TracksTable";
import { useGetPlaylistByIdQuery } from "../../../redux/playlistsSlice";
import PlaylistListItem from "../../../components/EditorComponents/PlayLists/PlayListItem";

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

  const { data, isFetching, isSuccess, error } =
    useGetPlaylistByIdQuery(playlistId);

  if (!isFetching) {
    console.log(data.trackList);
  }

  return (
    <>
      {isSuccess && !error && (
        <>
          <PlaylistListItem
            icon={data.playListAvatarURL}
            title={data.playListName}
            placeListCardInfo={true}
            id={playlistId}
          />
          <TracksTable
            title={` Музика плейлисту "${data.playListName}"`}
            tracks={data.trackList}
            error={error}
            isFetching={isFetching}
            isSuccess={isSuccess}
            display="none"
            rows={RowsTitle}
          />
        </>
      )}
    </>
  );
};

export default TracksPage;
