import TracksTable from "../../../components/EditorComponents/TracksTable/TracksTable";
import { useGetPlaylistByIdQuery } from "../../../redux/playlistsSlice";
import PlaylistListItem from "../../../components/EditorComponents/PlayLists/PlayListItem";
import PlayListControl from "../../../components/EditorComponents/PlayLists/PlayListControl";
import AddTracks from "../../../components/EditorComponents/AddTracks/AddTracks";
import symbol from "../../../assets/symbol.svg";

import Player from "../../../components/Player/Player";

import { useParams } from "react-router-dom";
import { useLayoutEffect } from "react";

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
  // console.log(window.scrollY);

  const { playlistId } = useParams();

  const { data, isFetching, isSuccess, error } =
    useGetPlaylistByIdQuery(playlistId);

  if (isSuccess) {
    // console.log("Count", data.totalTracks);
    // console.log("data", data);
  }

  useLayoutEffect(() => {
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      {isSuccess && !error && (
        <>
          <AddTracks
            iconButton={`${symbol}#icon-plus`}
            textButton={"Музику"}
            playlistId={playlistId}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <PlaylistListItem
              icon={data.playlist.playListAvatarURL}
              title={data.playlist.playListName}
              placeListCardInfo={true}
              id={playlistId}
              countTracks={data.totalTracks}
            />
            <PlayListControl
              isPublished={data.playlist.published}
              countTracks={data.totalTracks}
            />
          </div>
          <TracksTable
            tracks={data.playlist.trackList}
            error={error}
            isFetching={isFetching}
            isSuccess={isSuccess}
            display="none"
            rows={RowsTitle}
            marginTopWrapper={"24px"}
          />
          <Player tracks={data.playlist.trackList} />
        </>
      )}
    </>
  );
};

export default TracksPage;
