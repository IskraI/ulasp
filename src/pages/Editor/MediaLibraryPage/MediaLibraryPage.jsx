import Genres from "../../../components/EditorComponents/Genres/Genres";
import LatestPlaylists from "../../../components/EditorComponents/PlayLists/PlayLists";
import NewSongs from "../../../components/EditorComponents/NewSongs/NewSongs";
import Shops from "../../../components/EditorComponents/Shops/Shops";
import { useGetAllGenresQuery } from "../../../redux/genresSlice";
import { useGetLatestPlaylistsQuery} from "../../../redux/playlistsSlice";
import { useGetAllTracksQuery } from "../../../redux/tracksSlice";
import { useGetAllShopsQuery } from "../../../redux/shopsSlice";
import Player from "../../../components/Player/Player";

import { Loader } from "../../../components/Loader/Loader";

const MediaLibraryPage = () => {
  const {
    data: genres,
    isFetching: isFetchingAllGenre,
    isSuccess: isSuccesAllGenre,
    isError: isErrorAllGenre,
  } = useGetAllGenresQuery(`?&limit=${12}`);

  const {
    data: shops,
    isFetching: isFetchingShops,
    isSuccess: isSuccessShops,
    isError: isErrorShops,
  } = useGetAllShopsQuery(`?&limit=${12}`);

  const {
    data: playlists,
    isFetching: isFetchingLatestPlaylist,
    isSuccess: isSuccesLatestPlaylist,
    isError: isErrorLatestPlaylist,
  } = useGetLatestPlaylistsQuery(`?&limit=${12}`);

  const {
    data: allTracks,
    isFetching: isFetchingNewSongs,
    isSuccess: isSuccesLatestNewSongs,
    isError: isErrorNewSongs,
  } = useGetAllTracksQuery(`?&limit=${9}`);
 


  const fetching =
    isFetchingAllGenre &&
    isFetchingLatestPlaylist &&
    isFetchingNewSongs &&
    isFetchingShops &&
    !isErrorAllGenre &&
    !isErrorLatestPlaylist &&
    !isErrorNewSongs &&
    !isErrorShops;

  const loading =
    isFetchingAllGenre &&
    isFetchingLatestPlaylist &&
    isFetchingNewSongs &&
    isFetchingShops &&
    !isErrorAllGenre &&
    !isErrorLatestPlaylist &&
    !isErrorNewSongs &&
    !isErrorShops;

  const success =
    isSuccesAllGenre && isSuccesLatestPlaylist && isSuccesLatestNewSongs;
  isSuccessShops;

  const error = isErrorAllGenre && isErrorLatestPlaylist && isErrorNewSongs;

  console.log("Data", shops);
  console.log("Fetching", isFetchingShops);
  console.log("Success", success);
  console.log("Error", isErrorShops);
  return (
    <>
      {/* {error && <div>{ERROR_NOT_FOUND}</div>} */}
      {loading && <Loader />}
      {success && !fetching && (
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
            isSuccess={isSuccesLatestNewSongs}
          />
          <Player tracks={allTracks} />
        </>
      )}
    </>
  );
};

export default MediaLibraryPage;
