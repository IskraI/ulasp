import CreatePlaylists from "../../../components/UserCabinetPage/CreatePlaylists/CreatePlaylists";
import FavoritePlaylists from "../../../components/UserCabinetPage/FavoritePlaylists/FavoritePlaylists";
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
    
   
  
// console.log('dataAdd playlist', dataAdd )
  console.log('dataFavorite playlist', favoritePlaylist)


  const fetching =
    isFetchingCreatePlaylists &&
    isFetchingFavoritePlaylist &&
    isFetchingNewSongs &&
    isFetchingAddPlaylist &&

    isErrorCreatePlaylists&&
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
    isSuccesCreatePlaylists && isSuccesLatestFavoritePlaylist && isSuccesLatestNewSongs;
  isSuccesAddPlaylist;


  // console.log('dataAdd.add.slice(0, 2)',dataAdd.add)

  const error = isErrorCreatePlaylists && isErrorFavoritePlaylist && isErrorNewSongs && isErrorFavoritePlaylist;

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
                  {!isLoadingAddPlaylist && !isLoadingFavoritePlaylist&&<AddPlaylists
                       title={"Додані плейлисти"}
                      displayPlayer={"none"}
                      data={dataAdd.add}
                      isFetching={isFetchingAddPlaylist}
                      isError={isErrorAddPlaylist}
                      isSuccess={isSuccesAddPlaylist}
            showNavigationLink={true}
            isLoadingAddPlaylist={isLoadingAddPlaylist}
                  />}

          {!isLoadingFavoritePlaylist&&!isLoadingAddPlaylist&& (<FavoritePlaylists

             title={"Улюблені плейлисти"}
            displayPlayer={"none"}
            data={favoritePlaylist}
            dataFavorite={favoritePlaylist}
            dataAdd={dataAdd}
            isFetching={isFetchingFavoritePlaylist}
            error={isErrorFavoritePlaylist}
                        showNavigationLink={true}
                 />)}
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
