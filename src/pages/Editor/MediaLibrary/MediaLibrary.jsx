import Genres from "../../../components/EditorComponents/Genres/Genres";
import LatestPlaylists from "../../../components/EditorComponents/PlayLists/PlayLists";
import NewSongs from "../../../components/EditorComponents/NewSongs/NewSongs";
// import ControlMediateca from "../../../components/EditorComponents/ControlMediateca/ControlMediaTeca";
import { useGetAllGenresQuery } from "../../../redux/genresSlice";
import { useGetLatestPlaylistsQuery } from "../../../redux/playlistsSlice";
import { useGetAllTracksQuery } from "../../../redux/tracksSlice";

import { Loader } from "../../../components/Loader/Loader";
import { ERROR_NOT_FOUND } from "../../../constants/constants";

const MediaLibrary = () => {
  const {
    data: genres,
    isFetching: isFetchingAllGenre,
    error: isErrorAllGenre,
  } = useGetAllGenresQuery();
  const {
    data: playlists,
    isFetching: isFetchingLatestPlaylist,
    error: isErrorLatestPlaylist,
  } = useGetLatestPlaylistsQuery();
  const {
    data: allTracks,
    isFetching: isFetchingNewSongs,
    error: isErrorNewSongs,
  } = useGetAllTracksQuery();

  const fetching =
    !isFetchingAllGenre &&
    !isFetchingLatestPlaylist &&
    !isFetchingNewSongs &&
    !isErrorAllGenre &&
    !isErrorLatestPlaylist &&
    !isErrorNewSongs;

  const loading =
    isFetchingAllGenre &&
    isFetchingLatestPlaylist &&
    isFetchingNewSongs &&
    !isErrorAllGenre &&
    !isErrorLatestPlaylist &&
    !isErrorNewSongs;

  const error = isErrorAllGenre && isErrorLatestPlaylist && isErrorNewSongs;
  return (
    <>
      {error && <div>{ERROR_NOT_FOUND}</div>}
      {loading && <Loader />}
      {fetching && (
        <>
          <Genres
            displayPlayer={"none"}
            data={genres}
            isFetching={isFetchingAllGenre}
            error={isErrorAllGenre}
          />
          <Genres
            displayPlayer={"none"}
            data={genres}
            isFetching={isFetchingAllGenre}
            error={isErrorAllGenre}
          />
          <LatestPlaylists
            title={"Нові плейлисти"}
            displayPlayer={"none"}
            data={playlists}
            isFetching={isFetchingLatestPlaylist}
            error={isErrorLatestPlaylist}
          />
          <NewSongs
            data={allTracks}
            isFetching={isFetchingNewSongs}
            error={isErrorNewSongs}
          />
        </>
      )}
    </>
  );
};

export default MediaLibrary;
