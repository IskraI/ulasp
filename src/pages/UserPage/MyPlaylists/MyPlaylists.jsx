import CreatePlaylists from "../../../components/UserCabinetPage/CreatePlaylists/CreatePlaylists";
import FavoritePlaylists from "../../../components/UserCabinetPage/FavoritePlaylists/FavoritePlaylists";
import AddTracksUser from "../../../components/UserMediaComponent/NewSongs/NewSongs.";
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
  } = useGetCreatePlaylistsForUserQuery(`?&limit=${6}`);

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
  } = useAddPlaylistForUserQuery();

  console.log("dataAdd playlist", dataAdd?.add.slice(0, 2));
  console.log(" allTracks", allTracks);

  const fetching =
    isFetchingCreatePlaylists &&
    isFetchingFavoritePlaylist &&
    isFetchingNewSongs &&
    isFetchingAddPlaylist &&
    isErrorCreatePlaylists &&
    !isErrorFavoritePlaylist &&
    !isErrorNewSongs &&
    !isFetchingAddPlaylist;

  const loading =
    isFetchingCreatePlaylists &&
    isFetchingFavoritePlaylist &&
    isFetchingNewSongs &&
    isFetchingAddPlaylist &&
    // !isErrorAllGenre &&
    !isErrorFavoritePlaylist &&
    !isErrorNewSongs &&
    !isFetchingAddPlaylist;

  const success =
    isSuccesCreatePlaylists &&
    isSuccesLatestFavoritePlaylist &&
    isSuccesLatestNewSongs;
  isSuccesAddPlaylist;

  const error =
    isErrorCreatePlaylists &&
    isErrorFavoritePlaylist &&
    isErrorNewSongs &&
    isErrorFavoritePlaylist;

  return (
    <>
      {loading && <Loader />}
      {success && !fetching && (
        <>
          <CreatePlaylists
            title={"Cтворені плейлисти"}
            displayPlayer={"none"}
            data={createPlaylists}
            dataFavorite={favoritePlaylist}
            isFetching={isFetchingCreatePlaylists}
            error={isErrorCreatePlaylists}
            showNavigationLink={true}
          />
          {!isLoadingAddPlaylist && !isLoadingFavoritePlaylist && (
            <AddPlaylists
              title={"Додані плейлисти"}
              displayPlayer={"none"}
              data={dataAdd?.add.slice(0, 6)}
              isFetching={isFetchingAddPlaylist}
              isError={isErrorAddPlaylist}
              isSuccess={isSuccesAddPlaylist}
              showNavigationLink={true}
              isLoadingAddPlaylist={isLoadingAddPlaylist}
            />
          )}

          {!isLoadingFavoritePlaylist && !isLoadingAddPlaylist && (
            <FavoritePlaylists
              title={"Улюблені плейлисти"}
              displayPlayer={"none"}
              data={favoritePlaylist?.favorites.slice(0, 6)}
              // dataFavorite={favoritePlaylist}
              dataAdd={dataAdd}
              isFetching={isFetchingFavoritePlaylist}
              error={isErrorFavoritePlaylist}
              showNavigationLink={true}
            />
          )}
          <AddTracksUser
            data={allTracks?.latestTracks.slice(0, 6)}
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
