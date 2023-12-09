import LatestPlaylists from "../../../components/UserMediaComponent/PlayLists/PlayLists";
import { useGetLatestPlaylistsForUserQuery } from "../../../redux/playlistsUserSlice";

const NewPlaylistsUser = () => {
  const {
    data: playlists,
    isFetching: isFetchingLatestPlaylist,
    error: isErrorLatestPlaylist,
  } = useGetLatestPlaylistsForUserQuery();
  return (
      <LatestPlaylists
          title={"Нові плейлисти"}
          displayPlayer={"none"}
          display={"none"}
      data={playlists}
      isFetching={isFetchingLatestPlaylist}
      error={isErrorLatestPlaylist}
    />
  );
};

export default NewPlaylistsUser;