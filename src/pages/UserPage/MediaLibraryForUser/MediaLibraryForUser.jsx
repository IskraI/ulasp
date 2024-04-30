import Genres from "../../../components/UserMediaComponent/Genres/Genres";
import LatestPlaylists from "../../../components/UserMediaComponent/PlayLists/PlayLists";
import NewSongs from "../../../components/UserMediaComponent/NewSongs/NewSongs";
import ShopsPage from "../ShopsUserPage/ShopUserPage";
import { useGetAllGenresForUserQuery } from "../../../redux/genersUserSlice";
import {
  useGetLatestPlaylistsForUserQuery,
  useFavoritePlaylistForUserQuery,
  useAddPlaylistForUserQuery,
} from "../../../redux/playlistsUserSlice";
import { useGetTracksInChartQuery } from "../../../redux/tracksSlice";
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
    data: favoritePlaylist,
    isLoading: isLoadingFavoritePlaylist,
    isFetching: isFetchingFavoritePlaylist,
    isSuccess: isSuccesLatestFavoritePlaylist,
    isError: isErrorFavoritePlaylist,
  } = useFavoritePlaylistForUserQuery();

  const {
    data: tracksInChart,
    error: errorLoadingTracksInChart,
    isFetching: isFetchingTracksInChart,
    isSuccess: isSuccessTracksInChart,
    isLoading: isLoadingTracksInChart,
    isError: isErrorTracksInChart,
  } = useGetTracksInChartQuery({
    limit: 6,
    forseRefetch: true,
  });

  const { data: dataAdd, isLoading: isLoadingAddPlaylist } =
    useAddPlaylistForUserQuery();

  const fetching =
    isFetchingAllGenre &&
    isFetchingLatestPlaylist &&
    isFetchingTracksInChart &&
    isFetchingShops &&
    !isErrorAllGenre &&
    !isErrorLatestPlaylist &&
    !isErrorTracksInChart &&
    !isErrorShops;

  const success =
    isSuccesAllGenre && isSuccesLatestPlaylist && isSuccessTracksInChart;
  isSuccessShops;

  const error =
    isErrorAllGenre && isErrorLatestPlaylist && isErrorTracksInChart;
  
  
  
  return (
    <>
      {fetching && <Loader />}
      {success && !fetching && (
        <>
          <Genres
            data={genres}
            isFetching={isFetchingAllGenre}
            isError={isErrorAllGenre}
            showNavigationLink={true}
          />
          <ShopsPage
            data={shops}
            isFetching={isFetchingShops}
            isError={isErrorShops}
            isSuccess={isSuccessShops}
            showNavigationLink={true}
          />

          {!isLoadingFavoritePlaylist && !isLoadingAddPlaylist && (
            <LatestPlaylists
              title={"Нові плейлисти"}
              data={playlists}
              dataFavorite={favoritePlaylist}
              dataAdd={dataAdd}
              isFetching={isFetchingLatestPlaylist}
              error={isErrorLatestPlaylist}
              showNavigationLink={true}
            />
          )}

          <NewSongs
            data={tracksInChart.tracksInChart}
            playerSRC={tracksInChart.tracksSRC}
            isFetching={isFetchingTracksInChart}
            isSuccess={isSuccessTracksInChart}
            isError={isErrorTracksInChart}
            showNavigationLink={true}
          />
        </>
      )}
    </>
  );
};

export default MediaLibraryForUser;
