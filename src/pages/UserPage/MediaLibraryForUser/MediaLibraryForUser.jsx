import Genres from "../../../components/UserMediaComponent/Genres/Genres";
import LatestPlaylists from "../../../components/UserMediaComponent/PlayLists/PlayLists";
import NewSongs from "../../../components/UserMediaComponent/NewSongs/NewSongs";
import Shops from "../../../components/UserMediaComponent/Shops/Shops";
import { useGetAllGenresForUserQuery } from "../../../redux/genresSlice";
import { useGetLatestPlaylistsForUserQuery } from "../../../redux/playlistsSlice";
import { useGetAllTracksforUserQuery } from "../../../redux/tracksSlice";
import { useGetAllShopsUserQuery } from "../../../redux/shopsUserSlice";
import { ERROR_NOT_FOUND } from "../../../constants/constants";

const MediaLibraryForUser = () => {
  const {
    data: genres,
    isFetching: isFetchingAllGenre,
    error: isErrorAllGenre,
  } = useGetAllGenresForUserQuery();
   const {
    data: shops,
    isFetching: isFetchingShops,
    isSuccess: isSuccessShops,
    isError: isErrorShops,
  } = useGetAllShopsUserQuery(`?&limit=${12}`);
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
          <Shops
            displayPlayer={"none"}
            data={shops}
            isFetching={isFetchingShops}
            isError={isErrorShops}
            isSuccess={isSuccessShops}
          />
          <LatestPlaylists
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
    
    
export default MediaLibraryForUser;
