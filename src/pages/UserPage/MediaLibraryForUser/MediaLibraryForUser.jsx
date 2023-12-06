import Genres from "../../../components/UserMediaComponent/Genres/Genres";
import LatestPlaylists from "../../../components/UserMediaComponent/PlayLists/PlayLists";
import NewMusic from "../../../components/UserMediaComponent/NewMusic/NewMusic";
// import NewSongs from "../../../components/EditorComponents/NewSongs/NewSongs";
import { useGetAllGenresForUserQuery } from "../../../redux/genresSlice";
import { useGetLatestPlaylistsForUserQuery } from "../../../redux/playlistsSlice";
import { useGetAllTracksforUserQuery } from "../../../redux/tracksSlice";

import { ERROR_NOT_FOUND } from "../../../constants/constants";

const MediaLibraryForUser = () => {
  const {
    data: genres,
    isFetching: isFetchingAllGenre,
    error: isErrorAllGenre,
  } = useGetAllGenresForUserQuery();
  const {
    data: playlists,
    isFetching: isFetchingLatestPlaylist,
    error: isErrorLatestPlaylist,
  } = useGetLatestPlaylistsForUserQuery();
  const {
    data: allTracks,
    isFetching: isFetchingNewSongs,
    error: isErrorNewSongs,
  } = useGetAllTracksforUserQuery();

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
      {loading && <div>Загружаемся.....</div>}
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
            displayPlayer={"none"}
            data={playlists}
            isFetching={isFetchingLatestPlaylist}
            error={isErrorLatestPlaylist}
                  />
                  <NewMusic/>
          {/* <NewSongs
            data={allTracks}
            isFetching={isFetchingNewSongs}
            error={isErrorNewSongs}
          /> */}
        </>
      )}
    </>
  );
    };
    
    
export default MediaLibraryForUser;
