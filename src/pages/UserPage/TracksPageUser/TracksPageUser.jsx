import TracksTable from "../../../components/UserMediaComponent/TracksTable/TracksTable";
import { useGetPlaylistByIdForUserQuery } from "../../../redux/playlistsUserSlice";
import PlaylistListItem from "../../../components/UserMediaComponent/PlayLists/PlayListsItem";

import Player from "../../../components/Player/Player";

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
    useGetPlaylistByIdForUserQuery(playlistId);

  if (isSuccess) {
    console.log("Count", data.totalTracks);
  }

  return (
    <>
      {isSuccess && !error && (
        <>
          <PlaylistListItem
            icon={data.playlist.playListAvatarURL}
            title={data.playlist.playListName}
            placeListCardInfo={true}
            id={playlistId}
            countTracks={data.totalTracks}
          />
          <TracksTable
            tracks={data.playlist.trackList}
            error={error}
            isFetching={isFetching}
            isSuccess={isSuccess}
            display="none"
            rows={RowsTitle}
          />
          <Player tracks={data.playlist.trackList} />
        </>
      )}
    </>
  );
};

export default TracksPage;
