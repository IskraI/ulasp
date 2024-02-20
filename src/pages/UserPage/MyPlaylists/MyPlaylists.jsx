import CreatePlaylists from "../../../components/UserCabinetPage/CreatePlaylists/CreatePlaylists";
import LatestPlaylists from "../../../components/UserMediaComponent/PlayLists/PlayLists";
import NewSongs from "../../../components/UserMediaComponent/NewSongs/NewSongs";
import AddPlaylists from "../../../components/UserCabinetPage/AddPlaylists/AddPlaylists";
import {
  useGetLatestPlaylistsForUserQuery,
  useFavoritePlaylistForUserQuery,
  useAddPlaylistForUserQuery,
  useGetCreatePlaylistsForUserQuery,
} from "../../../redux/playlistsUserSlice";
import { useGetAllTracksforUserQuery } from "../../../redux/tracksUserSlice";
import { Loader } from "../../../components/Loader/Loader";

const MyPlaylists = () => {
  const {
    data: createPlaylists,
    isFetching: isFetchingCreatePlaylists,
    isSuccess: isSuccesCreatePlaylists,
    isError: isErrorCreatePlaylists,
  } = useGetCreatePlaylistsForUserQuery(`?&limit=${12}`);

  const {
    data: playlists,
    isFetching: isFetchingLatestPlaylist,
    isSuccess: isSuccesLatestPlaylist,
    isError: isErrorLatestPlaylist,
  } = useGetLatestPlaylistsForUserQuery(`?&limit=${12}`);
  const {
    data: allTracks,

    isFetching: isFetchingNewSongs,
    isSuccess: isSuccesLatestNewSongs,
    isError: isErrorNewSongs,
  } = useGetAllTracksforUserQuery(`?&limit=${6}`);

  const {
    data: favoritePlaylist,
    isLoading: isLoadingFavoritePlaylist,
    isFetching: isFetchingFavoritePlaylist,
    isSuccess: isSuccesLatestFavoritePlaylist,
    isError: isErrorFavoritePlaylist,
  } = useFavoritePlaylistForUserQuery();

  const {
    data: dataAdd,
    isLoading: isLoadingAddPlaylist,
    isFetching: isFetchingAddPlaylist,
    isSuccess: isSuccesAddPlaylist,
    isError: isErrorAddPlaylist,
  } = useAddPlaylistForUserQuery(`?limit=${2}`);

  const fetching =
    isFetchingCreatePlaylists &&
    isFetchingLatestPlaylist &&
    isFetchingNewSongs &&
    isFetchingAddPlaylist &&
    isErrorCreatePlaylists &&
    !isErrorLatestPlaylist &&
    !isErrorNewSongs &&
    !isFetchingAddPlaylist;

  const loading =
    isFetchingCreatePlaylists &&
    isFetchingLatestPlaylist &&
    isFetchingNewSongs &&
    isFetchingAddPlaylist &&
    // !isErrorAllGenre &&
    !isErrorLatestPlaylist &&
    !isErrorNewSongs &&
    !isFetchingAddPlaylist;

  const success =
    isSuccesCreatePlaylists && isSuccesLatestPlaylist && isSuccesLatestNewSongs;
  isSuccesAddPlaylist;

  const error =
    isSuccesCreatePlaylists && isErrorLatestPlaylist && isErrorNewSongs;
  return (
    <>
      {loading && <Loader />}
      {success && !fetching && (
        <>
          <CreatePlaylists
            title={"Cтворені плейлисти"}
            displayPlayer={"none"}
            data={createPlaylists}
            isFetching={isFetchingCreatePlaylists}
            error={isErrorCreatePlaylists}
            showNavigationLink={true}
          />
          {!isLoadingAddPlaylist && (
            <>
              <AddPlaylists
                title={"Додані плейлисти"}
                displayPlayer={"none"}
                dataAdd={dataAdd}
                isFetching={isFetchingAddPlaylist}
                isError={isErrorAddPlaylist}
                isSuccess={isSuccesAddPlaylist}
                showNavigationLink={true}
              />
              {console.log("dataAdd", dataAdd)}
            </>
          )}

          {!isLoadingFavoritePlaylist && !isLoadingAddPlaylist && (
            <LatestPlaylists
              title={"Нові плейлисти"}
              displayPlayer={"none"}
              data={playlists}
              dataFavorite={favoritePlaylist}
              dataAdd={dataAdd}
              isFetching={isFetchingLatestPlaylist}
              error={isErrorLatestPlaylist}
              showNavigationLink={true}
            />
          )}
          <NewSongs
            data={allTracks}
            isFetching={isFetchingNewSongs}
            error={isErrorNewSongs}
            showNavigationLink={true}
          />
        </>
      )}
    </>
  );
};

export default MyPlaylists;
