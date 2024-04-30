import CreatePlaylists from "../../../components/UserCabinetPage/CreatePlaylists/CreatePlaylists";
import FavoritePlaylists from "../../../components/UserCabinetPage/FavoritePlaylists/FavoritePlaylists";
import AddPlaylists from "../../../components/UserCabinetPage/AddPlaylists/AddPlaylists";

import {
  useFavoritePlaylistForUserQuery,
  useAddPlaylistForUserQuery,
  useGetCreatePlaylistsForUserQuery,
} from "../../../redux/playlistsUserSlice";

import { useGetAllAddTrackByUserQuery } from "../../../redux/tracksUserSlice";
import { Loader } from "../../../components/Loader/Loader";
import TrackAddByUser from "../../../components/UserCabinetPage/UserTrack/UserTrack";

const MyPlaylists = () => {
  const {
    data: createPlaylists,
    isFetching: isFetchingCreatePlaylists,
    isSuccess: isSuccesCreatePlaylists,
    isError: isErrorCreatePlaylists,
    isLoading: isLoadingCreatePlaylists,
  } = useGetCreatePlaylistsForUserQuery({ page: 1, limit: 6 });

  const {
    data: tracksInAdd,
    error: errorLoadingTracksInAdd,
    isFetching: isFetchingTracksInAdd,
    isSuccess: isSuccessTracksInAddt,
    isLoading: isLoadingTracksInAdd,
  } = useGetAllAddTrackByUserQuery({
    page: 1,
    limit: 6,
    forseRefetch: true,
  });
  const {
    data: allCreatePlaylists,
    isFetching: isFetchingAllCreatePlaylists,
    isSuccess: isSuccesAllCreatePlaylists,
    isError: isErrorAllCreatePlaylists,
    isLoading: isLoadingAllCreatePlaylists,
  } = useGetCreatePlaylistsForUserQuery({ page: "", limit: "" });
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

  const fetching =
    isFetchingCreatePlaylists &&
    isFetchingFavoritePlaylist &&
    isFetchingTracksInAdd &&
    isFetchingAddPlaylist &&
    isErrorCreatePlaylists &&
    !isErrorFavoritePlaylist &&
    !errorLoadingTracksInAdd &&
    !isFetchingAddPlaylist;

  const loading =
    isFetchingCreatePlaylists &&
    isFetchingFavoritePlaylist &&
    isFetchingTracksInAdd &&
    isFetchingAddPlaylist &&
    // !isErrorAllGenre &&
    !isErrorFavoritePlaylist &&
    !errorLoadingTracksInAdd &&
    !isFetchingAddPlaylist;

  const success =
    isSuccesCreatePlaylists &&
    isSuccesLatestFavoritePlaylist &&
    isSuccessTracksInAddt;
  isSuccesAddPlaylist;

  const error =
    isErrorCreatePlaylists &&
    isErrorFavoritePlaylist &&
    errorLoadingTracksInAdd &&
    isErrorFavoritePlaylist;

  return (
    <>
      {isLoadingCreatePlaylists &&
        isLoadingTracksInAdd &&
        isLoadingAllCreatePlaylists &&
        isLoadingFavoritePlaylist &&
        isLoadingAddPlaylist && <Loader />}
      {success && !fetching && (
        <>
          <CreatePlaylists
            title={"Cтворені плейлисти"}
            data={createPlaylists}
            dataFavorite={favoritePlaylist}
            isFetching={isFetchingCreatePlaylists}
            error={isErrorCreatePlaylists}
            showNavigationLink={true}
          />

          <AddPlaylists
            title={"Додані плейлисти"}
            data={dataAdd?.add.slice(0, 6)}
            isFetching={isFetchingAddPlaylist}
            isError={isErrorAddPlaylist}
            isSuccess={isSuccesAddPlaylist}
            showNavigationLink={true}
            isLoadingAddPlaylist={isLoadingAddPlaylist}
            createPlaylists={allCreatePlaylists}
          />

          <>
            {isFetchingFavoritePlaylist && isFetchingAddPlaylist && <Loader />}
            <FavoritePlaylists
              title={"Улюблені плейлисти"}
              data={favoritePlaylist?.favorites.slice(0, 6)}
              // dataFavorite={favoritePlaylist}
              dataAdd={dataAdd}
              isFetching={isFetchingFavoritePlaylist}
              error={isErrorFavoritePlaylist}
              showNavigationLink={true}
              createPlaylists={allCreatePlaylists}
            />
          </>

          <TrackAddByUser
            data={tracksInAdd.tracksInAdd}
            isFetching={isFetchingTracksInAdd}
            // error={isErrorNewSongs}
            // mediaLibrary={true}
            // showTitle={false}
            showNavigationLink={true}
          />
        </>
      )}
    </>
  );
};

export default MyPlaylists;
