import Genres from "../../../components/EditorComponents/Genres/Genres";
import LatestPlaylists from "../../../components/EditorComponents/PlayLists/PlayLists";
import ShopsPage from "../ShopsPage/ShopPage";
import { useGetAllGenresQuery } from "../../../redux/genresSlice";
import { useGetLatestPlaylistsQuery } from "../../../redux/playlistsSlice";
import { useGetAllTracksQuery } from "../../../redux/tracksSlice";
import { useGetAllShopsQuery } from "../../../redux/shopsSlice";
import { useGetCreatePlaylistsForUserQuery } from "../../../redux/playlistsUserSlice";

import NewTracksPage from "../NewTracksPage/NewTracksPage";

import { Loader } from "../../../components/Loader/Loader";

const MediaLibraryPage = () => {
  const {
    data: genres,
    isFetching: isFetchingAllGenre,
    isLoading: isLoadingAllGenre,
    isSuccess: isSuccesAllGenre,
    isError: isErrorAllGenre,
  } = useGetAllGenresQuery(`?&limit=${12}`);

  const {
    data: shops,
    isFetching: isFetchingShops,
    isLoading: isLoadingShops,
    isSuccess: isSuccessShops,
    isError: isErrorShops,
    error: errorShops,
  } = useGetAllShopsQuery(`?&limit=${12}`);

  const {
    data: playlists,
    isFetching: isFetchingLatestPlaylist,
    isLoading: isLoadingLatestPlaylist,
    isSuccess: isSuccesLatestPlaylist,
    isError: isErrorLatestPlaylist,
  } = useGetLatestPlaylistsQuery({ limit: 12 });

  const {
    data: allTracks,
    isFetching: isFetchingNewSongs,
    isSuccess: isSuccesLatestNewSongs,
    isError: isErrorNewSongs,
  } = useGetAllTracksQuery(`?&limit=${9}`, {
    forceRefetch: true,
  });

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

  return (
    <>
      {/* {error && <div>{ERROR_NOT_FOUND}</div>} */}
      {loading && <Loader />}
      {success && !fetching && (
        <>
          <Genres
            data={genres}
            isFetching={isFetchingAllGenre}
            isLoading={isLoadingAllGenre}
            error={isErrorAllGenre}
            showNavigationLink={true}
          />

          <ShopsPage limit={"12"} showNavigationLink={true} />
          <LatestPlaylists
            title={"Нові плейлисти"}
            data={playlists}
            isFetching={isFetchingLatestPlaylist}
            isLoading={isLoadingLatestPlaylist}
            error={isErrorLatestPlaylist}
            showNavigationLink={true}
          />

          <NewTracksPage
            mediaLibrary={true}
            limit={"9"}
            showTitle={false}
            showNavigationLink={true}
          />
        </>
      )}
    </>
  );
};

export default MediaLibraryPage;
