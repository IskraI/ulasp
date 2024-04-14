import {
  useFavoritePlaylistForUserQuery,
  useGetCreatePlaylistsForUserQuery,
} from "../../../redux/playlistsUserSlice";

import CreatePlaylists from "./CreatePlaylists";

const CreateAllPlaylists = () => {
  const { data: dataFavorite, isLoading: isLoadingFavoritePlaylist } =
    useFavoritePlaylistForUserQuery();

  const {
    data: createPlaylists,
    isFetching: isFetchingGetCreatePlaylists,
    isSuccess: isSuccesCreatePlaylists,
    isError: isErrorCreatePlaylists,
  } = useGetCreatePlaylistsForUserQuery({ page: 1 });

  return (
    <>
      {isSuccesCreatePlaylists &&
        !isErrorCreatePlaylists &&
        !isLoadingFavoritePlaylist && (
          <CreatePlaylists
            title={"Cтворені плейлисти"}
            dataFavorite={dataFavorite}
            data={createPlaylists}
            isFetching={isFetchingGetCreatePlaylists}
            isError={isErrorCreatePlaylists}
            showNavigationLink={false}
          />
        )}
    </>
  );
};

export default CreateAllPlaylists;
