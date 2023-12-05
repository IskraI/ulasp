import LatestPlaylists from "../../../components/EditorComponents/PlayLists/PlayLists";
import { useGetLatestPlaylistsForUserQuery } from "../../../redux/playlistsSlice";

const NewPlaylistsUser = () => {
  const {
    data: playlists,
    isFetching: isFetchingLatestPlaylist,
    error: isErrorLatestPlaylist,
  } = useGetLatestPlaylistsForUserQuery();
  return (
    <LatestPlaylists
      displayPlayer={"none"}
      data={playlists}
      isFetching={isFetchingLatestPlaylist}
      error={isErrorLatestPlaylist}
    />
  );
};

export default NewPlaylistsUser;