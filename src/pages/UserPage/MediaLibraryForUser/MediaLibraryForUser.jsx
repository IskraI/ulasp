import Genres from "../../../components/UserMediaComponent/Genres/Genres";
import LatestPlaylists from "../../../components/UserMediaComponent/PlayLists/PlayLists";
import NewSongs from "../../../components/UserMediaComponent/NewSongs/NewSongs";
import Shops from "../../../components/UserMediaComponent/Shops/Shops";
import { useGetAllGenresForUserQuery } from "../../../redux/genersUserSlice";
import { useGetLatestPlaylistsForUserQuery, useFavoritePlaylistForUserQuery } from "../../../redux/playlistsUserSlice";
import { useGetAllTracksforUserQuery } from "../../../redux/tracksUserSlice";
import { useGetAllShopsUserQuery } from "../../../redux/shopsUserSlice";
import { Loader } from "../../../components/Loader/Loader";

const MediaLibraryForUser = () => {
  const {
    data: genres,
    isFetching: isFetchingAllGenre,
    isSuccess: isSuccesAllGenre,
    isError: isErrorAllGenre,
  } = useGetAllGenresForUserQuery(`?&limit=${12}`);
   const {
     data: shops,
    isFetching: isFetchingShops,
    isSuccess: isSuccessShops,
    isError: isErrorShops,
  } = useGetAllShopsUserQuery(`?&limit=${12}`);
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
  
console.log('FavoritePlaylist medialibrary', favoritePlaylist)

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
      {loading && <Loader />}
      {success && !fetching &&  (
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
           {!isLoadingFavoritePlaylist&& (<LatestPlaylists
             title={"Нові плейлисти"}
            displayPlayer={"none"}
            data={playlists}
            dataFavorite={favoritePlaylist}
            isFetching={isFetchingLatestPlaylist}
            error={isErrorLatestPlaylist}
                 />)}
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
